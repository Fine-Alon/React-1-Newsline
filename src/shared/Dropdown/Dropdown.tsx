import React from 'react';
import styles from './dropdown.css';


interface IDropdownProps {
    button: React.ReactNode
    children?: React.ReactNode
    btnStyles?:  string | undefined
    isOpen?: boolean
    onOpen?: () => void
    onClose?: () => void
}

const NOOP = () => {
}

export function Dropdown({button, btnStyles, children, onOpen = NOOP, onClose = NOOP, isOpen}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    return <>
        <div className={styles.container}>
            <div className={btnStyles} onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && <div className={styles.listContainer}>
                <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                    {children}
                </div>
            </div>}
        </div>
    </>
}

