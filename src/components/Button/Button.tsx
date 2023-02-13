import { classNames } from '@/entities/utils';
import React, { Children } from 'react';

interface Props {
    children: string | JSX.Element,
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
}

export const Button = ({ children, onClick, type = 'submit', className = '', disabled = false, ...rest }: Props) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <button
            className={classNames(className)}
            type={type}
            onClick={handleClick}
            {...rest}
          >
            {children}
          </button>
    )
};
