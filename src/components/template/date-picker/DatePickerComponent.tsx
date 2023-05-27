import DateFormatting from '@/logic/utils/DateFormatting';
import { Button, NumberInput, Popover } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';

export interface DatePickerProps {
  date?: Date;
  changeDate?: (data: Date) => void;
}

export const DatePickerComponent: React.FC<DatePickerProps> = (props) => {
  const today = new Date();

  const [date, setDate] = useState<Date>(
    new Date(
      props.date?.getFullYear() ?? today.getFullYear(),
      props.date?.getMonth() ?? today.getMonth(),
      1
    )
  );

  function changeYear(year: number) {
    if (!year) return;
    const newDate = new Date(date);
    newDate.setFullYear(year);
    setDate(newDate);
    props.changeDate?.(newDate);
  }

  function changeMonth(month: number) {
    const newDate = new Date(date);
    newDate.setMonth(month);
    setDate(newDate);
    props.changeDate?.(newDate);
  }

  function increment() {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
    props.changeDate?.(newDate);
  }

  function decrement() {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
    props.changeDate?.(newDate);
  }

  return (
    <div className='flex items-center gap-2'>
      <Button
        className={`
              flex justify-center items-center bg-red-500
              text-white cursor-pointer p-1
          `}
        color='red'
        onClick={decrement}
      >
        <IconChevronLeft size={14} />
      </Button>
      <Popover withArrow>
        <Popover.Target>
          <Button
            className={`
                      bg-gradient-to-r from-indigo-600 to-cyan-600
                      text-white cursor-pointer select-none 
                      w-full sm:w-44 px-3
                  `}
          >
            {DateFormatting.mmyy.format(date)}
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <div className='flex justify-center mb-5'>
            <NumberInput
              value={date.getFullYear()}
              onChange={changeYear}
            />
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {DateFormatting.months().map((month, i) => {
              const selected = date.getMonth() === i;
              return (
                <Button
                  key={i}
                  color={selected ? 'red' : 'blue'}
                  className={`${selected ? 'bg-red-500' : 'bg-blue-500'}`}
                  onClick={() => changeMonth(i)}
                >
                  {month}
                </Button>
              );
            })}
          </div>
        </Popover.Dropdown>
      </Popover>
      <Button
        className={`
              flex justify-center items-center bg-red-500
              text-white cursor-pointer p-1
          `}
        color='red'
        onClick={increment}
      >
        <IconChevronRight size={14} />
      </Button>
    </div>
  );
};
