export default class MoneyFormatting {
  private static _language = 'pt-BR';
  private static _currency = 'BRL';

  static format(num: number): string {
    return (num ?? 0).toLocaleString(MoneyFormatting._language, {
      style: 'currency',
      currency: MoneyFormatting._currency,
    });
  }

  static unformat(value: string): number {
    const nums = value.replace(/[^0-9]+/g, '');
    const i = nums.length - 2;
    return Number(`${nums.substring(0, i)}.${nums.substring(i)}`);
  }
}
