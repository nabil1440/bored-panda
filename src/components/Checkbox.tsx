import type { InputHTMLAttributes } from 'react';
import { HiCheck } from 'react-icons/hi2';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className='ui-checkbox-row'>
      <input type='checkbox' {...props} />

      <span className='ui-checkbox-content'>
        <span className='ui-checkbox-text'>{label}</span>
      </span>

      <span className='ui-checkbox-box'>
        <HiCheck className='ui-checkbox-check' />
      </span>
    </label>
  );
}
