import React from 'react';
import styles from '../card.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateId} from "../../../../utils/js/generateRandomIndex";
import {Close, Comments, Hide, Report, Save, Share} from "./MenuLinks";
import {MenuSvg} from "../../../icons";

const menuList = [
    // {text: <Comments/>},
    // {text: <Share/>},
    {text: <Hide/>},
    // {text: <Save/>},
    {text: <Report/>},
    {text: <Close styles={styles.closeButton}/>},
].map(item => ({...item, id:'1234'}))

export const Menu: React.FC = () => {
    const [isDropdownClose, setIsDropdownClose] = React.useState(true)

    return (
        <div className={styles.menu}>
            <Dropdown btnStyles={styles.menuSvg}
                      button={<button className={styles.menuButton}><MenuSvg/></button>}>
                {isDropdownClose &&
                    <div className={styles.dropdown}>
                        <GenericList list={menuList}/>
                    </div>}
            </Dropdown>
        </div>
    )
}
