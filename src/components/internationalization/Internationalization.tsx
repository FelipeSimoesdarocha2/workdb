// Next
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

// React
import React, { useState, useRef, useEffect } from 'react';

// Assets
import pt from './icons/br.png';
import en from './icons/en.png';
import arrow from 'assets/components/arrow.svg';

// Styles
import * as S from './Internationalization.styles';

// Hooks
import { useInternationalization } from './useInternationalization';

const Internationalization = () => {
  const { itens, languageSelected, onChangeLanguage } = useInternationalization();
  const [openList, setOpenList] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(languageSelected ?? '');

  const router = useRouter();
  const pathname = usePathname();
  const componentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as HTMLElement)) {
      setOpenList(false);
      setIsFocused(false);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    setSelectedOption(optionValue);
    onChangeValue({ target: { value: optionValue } });
    router.push(pathname, undefined, { locale: optionValue });
  };

  const toggleSelectVisibility = () => {
    setIsFocused(!isFocused);
    setOpenList(!openList);
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target.value;
    onChangeLanguage(value);
  };

  let imageSrc;

  switch (languageSelected) {
    case 'pt':
      imageSrc = pt;
      break;
    case 'en':
      imageSrc = en;
      break;
    default:
      imageSrc = pt;
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Component onClick={toggleSelectVisibility} ref={componentRef} className={`${isFocused ? 'focused' : null}`}>
      <S.Content>
        <S.Wrapper>
          <S.Value>
            <Image src={imageSrc} alt="Logo" width={22} draggable={'false'} />
            <S.Label>{itens.find(e => e.value === languageSelected)?.label}</S.Label>
          </S.Value>
          <span className={`${isFocused ? 'focused-arrow' : null}`}>
            <Image src={arrow} width={12} alt="arrow" draggable="false" />
          </span>
        </S.Wrapper>
        {openList && (
          <S.Inner className={`${isFocused ? 'focused' : null}`}>
            <S.List>
              {itens.map((option, key) => (
                <S.Item
                  key={key}
                  onClick={() => handleOptionClick(option.value)}
                  className={`${selectedOption === option.label ? `${'selected'}` : null}`}
                >
                  <S.Label>{option.label}</S.Label>
                </S.Item>
              ))}
            </S.List>
          </S.Inner>
        )}
      </S.Content>
    </S.Component>
  );
};

export default Internationalization;
