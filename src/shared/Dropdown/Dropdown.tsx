import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import styles from './dropdown.css';
import {createPortal} from "react-dom";
import {NOOP} from "../../utils/js/noop";


interface IDropdownProps {
    button: React.ReactNode
    children?: React.ReactNode
    btnStyles?: string | undefined
    isOpen?: boolean
    onOpen?: () => void
    onClose?: () => void
}

type Coords = {
    left: number;
    top: number;
    width: number;
};

export function Dropdown(props: IDropdownProps) {
    const {
        button, btnStyles,
        children, onOpen = NOOP, onClose = NOOP, isOpen
    } = props

    const btnRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
    const [coords, setCoords] = useState<Coords | null>(null);
    const getCoords = (): Coords | null => {
        const box = btnRef.current?.getBoundingClientRect();
        if (box) {
            return {
                left: box.left,
                top: box.top + box.height,
                width: box.width,
            };
        }
        return null;
    };
    useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
    useEffect(() => {
        if (!isDropdownOpen) return;

        const coords = getCoords();
        setCoords(coords);
    }, [isDropdownOpen]);


    const handleClose: MouseEventHandler<HTMLDivElement> = (event) => {
        if (event.target instanceof Node && !listRef.current?.contains(event.target)) {
            setIsDropdownOpen(false)
        }
    };

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    const node = document.body.querySelector('#dropdown_root')
    if (!node) {
        return null
    }

    return <>
        <div ref={btnRef} className={styles.container}>
            <div className={btnStyles} onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && coords && createPortal(<div className={styles.listContainer} onClick={handleClose}>
                <div ref={listRef} className={styles.list} style={{
                    position: 'absolute',
                    top: `${coords.top}px`,
                    left: `${coords.left}px`,
                    minWidth: `${Math.max(130, coords.width)}px`,
                    minHeight: `${Math.max(150, coords.width)}px`,
                }} onClick={() => setIsDropdownOpen(false)}>
                    {children}
                </div>
            </div>, node)}
        </div>
    </>
}

