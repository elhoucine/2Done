import { classNames } from '@/entities/utils';
import React, { useState } from 'react';

type InputType = 'text' | 'password'

interface Props {
    id: string,
    title: string,
    type: InputType,
    name: string,
    value: string,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
    placeholder?: string,
    minLength?: number,
    className?: string
}

export const Input = ({ id, type, name, value, title, placeholder, onChange, className = '', ...rest }: Props) => {
    return (<input
        id={id}
        className={classNames('w-full', className)}
        type={type}
        name={name}
        title={title}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
    />);
}