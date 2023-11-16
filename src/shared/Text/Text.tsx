import React from 'react';
import styles from './text.css';
import classNames from 'classnames'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export enum EColors {
    black = 'black',
    orange = 'orange',
    green = 'green',
    white = 'white',
    greyF4 = 'greyF4',
    greyF3 = 'greyF3',
    greyF9 = 'greyF9',
    greyC4 = 'greyC4',
    grey99 = 'grey99',
    grey66 = 'grey66',
}

interface ITextProps {
    As?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
    children?: React.ReactNode
    size: TSizes
    mobileSize?: TSizes
    tabletSize?: TSizes
    desktopSize?: TSizes
    color?: EColors
}

export const Text: React.FC<ITextProps> = (props: ITextProps) => {
    const {
        As = 'span',
        children,
        size,
        color = EColors.black,
        mobileSize,
        tabletSize,
        desktopSize
    } = props

    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
        {[styles[`d${desktopSize}`]]: desktopSize},
    )

    return <As className={classes}>
        {children}
    </As>
}
