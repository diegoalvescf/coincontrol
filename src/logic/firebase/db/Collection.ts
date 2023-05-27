import Id from '@/logic/core/shared/id';
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  OrderByDirection,
  query,
  QueryConstraint,
  setDoc,
  WhereFilterOp,
  where,
} from 'firebase/firestore';
import { app } from '../config/app';

export interface IFilter {
  attribute: string;
  op: WhereFilterOp;
  value: any;
}

export default class Collection {
  async save(path: string, entity: any, id?: string): Promise<any> {
    const db = getFirestore(app);
    const finalId = id ?? entity.id ?? Id.newId();
    const docRef = doc(db, path, finalId);
    await setDoc(docRef, entity);

    return {
      ...entity,
      id: entity.id ?? finalId,
    };
  }

  async remove(path: string, id?: string): Promise<boolean> {
    if (!id) return false;
    const db = getFirestore(app);
    const docRef = doc(db, path, id);
    const itemInDatabase = await getDoc(docRef);
    if (!itemInDatabase.exists()) return false;
    await deleteDoc(docRef);
    return true;
  }

  async query(
    path: string,
    _orderBy?: string,
    direction?: OrderByDirection
  ): Promise<any[]> {
    const db = getFirestore(app);
    const collectionRef = collection(db, path);
    const filter: QueryConstraint[] = [];
    const order = _orderBy ? [orderBy(_orderBy, direction)] : [];
    const consult = query(collectionRef, ...filter, ...order);
    const result = await getDocs(consult);
    return result.docs.map(this._convertFromFirebase) ?? [];
  }

  async queryById(path: string, id: string): Promise<any> {
    if (!id) return null;
    const db = getFirestore(app);
    const docRef = doc(db, path, id);
    const result = await getDoc(docRef);
    return this._convertFromFirebase(result);
  }

  async queryWithFilters(
    path: string,
    filters: IFilter[],
    _orderBy?: string,
    direction?: OrderByDirection
  ): Promise<any[]> {
    const db = getFirestore(app);
    const collectionRef = collection(db, path);

    const whereFilters =
      filters?.map((f) => where(f.attribute, f.op, f.value)) ?? [];
    const order = _orderBy ? [orderBy(_orderBy, direction)] : [];

    const _query = query(collectionRef, ...whereFilters, ...order);
    const result = await getDocs(_query);
    return result.docs.map(this._convertFromFirebase) ?? [];
  }

  private _convertFromFirebase(snapshot: DocumentSnapshot<DocumentData>) {
    if (!snapshot.exists()) return null;
    const entity: any = { ...snapshot.data(), id: snapshot.id };
    if (!entity) return entity;
    return Object.keys(entity).reduce((obj: any, attribute: string) => {
      const value: any = entity[attribute];
      return { ...obj, [attribute]: value.toDate?.() ?? value };
    }, {});
  }
}
