import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { factory, useProps, MantineSize, Factory } from '../../../core';
import { InputWrapperStylesNames, Input, InputWrapperProps } from '../../Input';
import { InputsGroupFieldset } from '../../InputsGroupFieldset';
import { RadioGroupProvider } from '../RadioGroup.context';

export type RadioGroupStylesNames = InputWrapperStylesNames;

export interface RadioGroupProps extends Omit<InputWrapperProps, 'onChange'> {
  /** `Radio` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: Record<string, any>;

  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: MantineSize;

  /** Name attribute of child radio inputs */
  name?: string;
}

export type RadioGroupFactory = Factory<{
  props: RadioGroupProps;
  ref: HTMLDivElement;
  stylesNames: RadioGroupStylesNames;
}>;

const defaultProps: Partial<RadioGroupProps> = {};

export const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const { value, defaultValue, onChange, size, wrapperProps, children, name, ...others } = useProps(
    'RadioGroup',
    defaultProps,
    props
  );

  const _name = useId(name);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <RadioGroupProvider value={{ value: _value, onChange: handleChange, size, name: _name }}>
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="RadioGroup"
      >
        <InputsGroupFieldset role="radiogroup">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </RadioGroupProvider>
  );
});

RadioGroup.classes = Input.Wrapper.classes;
RadioGroup.displayName = '@mantine/core/RadioGroup';
