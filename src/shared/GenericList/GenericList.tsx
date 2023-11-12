import React from 'react';
import styles from './genericList.css';

interface IItem {
    text: string | React.ReactNode | React.JSX.Element
    id: string
    onClick?: (id: string) => void
    className?: string
    As?: 'a' | 'li' | 'button' | 'div'
    href?: string
}

interface IGenericListProps {
    list: IItem[]
}

const noop = () => {
}

export function GenericList({list}: IGenericListProps) {
    return <>
        {list.map(({
                       As = 'div', text, id,
                       onClick = noop, href, className
                   }) =>
            (<As key={id}
                 className={className}
                 onClick={() => onClick(id)}
                 href={href}>
                {text}
            </As>))
        }
    </>
}
