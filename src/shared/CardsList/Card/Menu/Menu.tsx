import React from 'react';
import styles from '../card.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateId} from "../../../../utils/js/generateRandomIndex";
import {Close, Comments, Hide, Report, Save, Share} from "./MenuLinks";
import {MenuSvg} from "../../../icons";
import {merge} from "../../../../utils/js/merge";
import {useMediaQuery} from 'react-responsive';


interface IMenuProps {
    postId?: string
    onDeletePost?: (postId: string) => void
}


export const Menu: React.FC<IMenuProps> = ({postId, onDeletePost}) => {
    const isDesktop = useMediaQuery({minWidth: 1024})

    const menuListMob = [
        // {text: <Comments/>},
        {text: <Hide/>, onClick: onDeletePost},
        // {text: <Share/>},
        {text: <Report/>, onClick: onDeletePost},
        // {text: <Save/>},
        {text: <Close styles={styles.closeButton}/>},
    ].map(generateId)

    const menuListDesk = [
        {text: <Comments/>},
        {text: <Share/>},
        {text: <Hide/>, onClick: onDeletePost},
        {text: <Save/>},
        {text: <Report/>, onClick: onDeletePost},
    ].map(generateId)


    const [isDropdownClose, setIsDropdownClose] = React.useState(true)

    return <div className={styles.menu}>
        <Dropdown btnStyles={styles.menuSvg}
                  button={<button className={styles.menuButton}><MenuSvg/></button>}>

            {isDropdownClose &&
                <div className={styles.dropdown}>
                    {isDesktop
                        ? <GenericList list={menuListDesk.map(item => ({
                            ...item, postId: postId,
                            onClick: () => item.onClick!(postId as string)
                        }))}/>

                        : <GenericList list={menuListMob.map(item => ({
                            ...item, postId: postId,
                            onClick: () => item.onClick!(postId as string)
                        }))}/>
                    }
                </div>}
        </Dropdown>
    </div>
}
