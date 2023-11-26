import React from 'react';
import styles from '../card.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateId} from "../../../../utils/js/generateRandomIndex";
import {Close, CommentBtn, Hide, Report, Save, Share} from "./MenuLinks";
import {MenuSvg} from "../../../icons";
import {merge} from "../../../../utils/js/merge";
import {useMediaQuery} from 'react-responsive';
import {Icon} from "../../../Icon";


interface IMenuProps {
    postId?: string
    onDeletePost?: (postId: string) => void
}


export const Menu: React.FC<IMenuProps> = ({postId, onDeletePost}) => {

    const menuListDesk = [
        {text: <CommentBtn/>, className: styles.mobileHidden},
        {text: <Share/>, className: styles.mobileHidden},
        {text: <Hide/>, onClick: onDeletePost},
        {text: <Save/>, className: styles.mobileHidden},
        {text: <Report/>, onClick: onDeletePost},
        {text: <Close styles={styles.closeButton}/>, className: styles.desktopHidden},
    ].map(generateId)

    const [isDropdownClose, setIsDropdownClose] = React.useState(true)

    return <div id={postId} className={styles.menu}>
        <Dropdown btnStyles={styles.menuSvg} portalId={postId}
                  button={<button className={styles.menuButton}>
                      <Icon name={'MenuSvg'} height={20} width={20}/></button>}>

            {isDropdownClose &&
                <div className={styles.dropdown}>
                    {<GenericList list={menuListDesk.map(item => ({
                        ...item, postId: postId,
                        onClick: () => item.onClick!(postId as string)
                    }))}/>
                    }
                </div>}
        </Dropdown>
    </div>
}
