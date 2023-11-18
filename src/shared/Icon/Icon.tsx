import React from "react";
import styles from "./icon.css";
import {CommentsSvg, HideSvg, MenuSvg, ReportSvg, SaveSvg, ShareSvg} from "../icons";

enum EName {
    HideSvg = 'HideSvg',
    CommentsSvg = 'CommentsSvg',
    MenuSvg = 'MenuSvg',
    ReportSvg = 'ReportSvg',
    SaveSvg = 'SaveSvg',
    ShareSvg = 'ShareSvg',
}

type IconsName = keyof typeof EName

const iconComponent = {
    HideSvg: <HideSvg/>,
    CommentsSvg: <CommentsSvg/>,
    MenuSvg: <MenuSvg/>,
    ReportSvg: <ReportSvg/>,
    SaveSvg: <SaveSvg/>,
    ShareSvg: <ShareSvg/>,
}

interface IIcon {
    name: IconsName
    width?: number
    height?: number
}

export const Icon: React.FC<IIcon> = ({
                                          name, width,
                                          height
                                      }) => {
    if (!(name in iconComponent)) {
        console.error('there is not such svgComponent')
        return null
    }

    const svgElement = React.cloneElement(iconComponent[name], {
        width: width,
        height: height,
    })

    return <>{svgElement}</>
}