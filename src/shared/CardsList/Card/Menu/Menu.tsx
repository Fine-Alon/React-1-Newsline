import React from 'react';
import styles from '../card.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateId} from "../../../../utils/js/generateRandomIndex";
import {Close, CommentBtn, Hide, Report, Save, Share} from "./MenuLinks";
import {Icon} from "../../../Icon";


interface IMenuProps {
    postId?: string
    onDeletePost?: (postId: string) => void
    isOpen?: boolean
}


export const Menu: React.FC<IMenuProps> = ({isOpen = true, postId,
                                               onDeletePost}) => {

    const menuListDesk = [
        {text: <CommentBtn/>, className: styles.mobileHidden},
        {text: <Share/>, className: styles.mobileHidden},
        {text: <Hide/>, onClick: onDeletePost},
        {text: <Save/>, className: styles.mobileHidden},
        {text: <Report/>, onClick: onDeletePost},
        {text: <Close styles={styles.closeButton}/>, className: styles.desktopHidden},
    ].map(generateId)

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)

    return <>
        <div id={postId} className={styles.menu}>
            <Dropdown btnStyles={styles.menuSvg}
                      button={<button className={styles.menuButton}>
                          <Icon name={'MenuSvg'} height={20} width={20}/></button>}>

                {isDropdownOpen &&
                    <div className={styles.dropdown}>
                        { <GenericList list={menuListDesk.map(item => ({
                                ...item, postId: postId,
                                onClick: () => item.onClick!(postId as string)
                            }))}/>
                            }
                    </div>}
            </Dropdown>
        </div>
    </>
}
