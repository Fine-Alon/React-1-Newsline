import React from 'react';
import styles from '../card.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateId} from "../../../../utils/js/generateRandomIndex";
import {Comments, Hide, Report, Save, Share} from "./MenuLinks";

const menuSvg = <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
    <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
    <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
</svg>

const menuList = [
    {text: <Comments/>},
    {text: <Share/>},
    {text: <Hide/>},
    {text: <Save/>},
    {text: <Report/>},
].map(item => ({...generateId(item)}))

export const Menu: React.FC = () => {
    const [isDropdownClose, setIsDropdownClose] = React.useState(true)

    return (
        <div className={styles.menu}>
            <div className={styles.menuButton}>
                <Dropdown btnStyles={styles.menuSvg} button={menuSvg}>
                    {isDropdownClose &&
                        <div className={styles.dropdown}>
                            <GenericList list={menuList}/>
{/*
                            <div>{comentsSvg}Coments</div>
                            <div>{shareSvg}Share</div>
                            <div >{hideSvg}Hide</div>
                            <div>{saveSvg}Save</div>
                            <div>{reportSvg} Report</div>*/}
                        </div>}
                </Dropdown>
            </div>
        </div>
    )
}
