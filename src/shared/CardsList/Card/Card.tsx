import React from 'react';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import {Menu} from './Menu';
import {Controls} from './Controls';

export const Card: React.FC = () => {
    return <>
        <TextContent/>
        <Preview/>
        <Menu/>
        <Controls/>
    </>
};
