import React, {useEffect} from 'react';
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
    portalId?: string
}

export function Dropdown(props: IDropdownProps) {
    const {button, portalId, btnStyles,
        children, onOpen = NOOP, onClose = NOOP, isOpen} = props

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }


    const node = document.getElementById(portalId || '')

    // this useEffect is necessary because we use Portal that need ID, but this ID comes after first rendering
    // so we need any mount/unmount effect
    useEffect(() => {
        setIsDropdownOpen(!isDropdownOpen)
    }, [node,portalId]);

    if (!node) {
        console.log(node)
        return null
    }

    return <>{createPortal(<div className={styles.container}>
        <div className={btnStyles} onClick={handleOpen}>
            {button}
        </div>
        {isDropdownOpen && <div className={styles.listContainer}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                {children}
            </div>
        </div>}
    </div>, node)}
    </>
}

