// React
import { useState } from 'react';

// Styles
import * as S from './Textarea.styles';

// Models
import { inputValueProps } from './models';

const Textarea = ({
  id,
  title,
  value,
  disable,
  required,
  className,
  placeholder,
  autocomplete,
  onBlur,
  onChange,
}: inputValueProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [invalidRequired, setInvalidRequired] = useState(false);

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';

    if (!value && required) {
      setInvalidRequired(true);
    } else {
      setInvalidRequired(false);
    }

    onChange(value);
  };

  return (
    <S.Component className={`${invalidRequired ? 'required' : ''} ${value || isFocused ? 'focused' : ''} `}>
      <label
        htmlFor={id}
        className={`${required ? 'required' : ''} `}
        dangerouslySetInnerHTML={{ __html: title as string }}
      />
      <textarea
        id={id}
        key={id}
        title={title}
        value={value}
        data-testid={id}
        disabled={disable}
        required={required}
        className={className}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onChange={onChangeValue}
        onFocus={() => setIsFocused(true)}
        onBlur={event => {
          onBlur && onBlur(event);
          setIsFocused(false);
        }}
      />
    </S.Component>
  );
};

export default Textarea;
