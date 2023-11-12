import React from 'react';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import {Menu} from './Menu';
import {Controls} from './Controls';

export function Card() {
    return (
        <>
            <TextContent/>
            <Preview/>
            <Menu/>
            <Controls/>
        </>
    );
};
