import { useCallback, useState } from 'react';

const useForm = <T,>(dataInitial?: T) => {
  const [data, setData] = useState<T>(dataInitial ?? ({} as T));

  const changeData = useCallback(function (data: T) {
    setData(data);
  }, []);

  const changeAttribute = useCallback(
    function (attribute: string, fn?: Function) {
      return (valueOrEvent: any) => {
        const v = valueOrEvent?.target?.value ?? valueOrEvent;
        setData({ ...data, [attribute]: fn?.(v) ?? v });
      };
    },
    [data]
  );

  return {
    data,
    changeAttribute,
    changeData,
  };
};

export default useForm;
