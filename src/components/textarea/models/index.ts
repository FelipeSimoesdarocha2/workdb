// React
import { HTMLInputTypeAttribute } from 'react';

export interface inputValueProps {
  id: string;
  autocomplete?: string;
  title: string;
  disable?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
