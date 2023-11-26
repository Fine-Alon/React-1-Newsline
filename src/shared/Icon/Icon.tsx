import React from "react";
import {AnonSvg, CommentsSvg, HideSvg, MenuSvg, ReportSvg, SaveSvg, ShareSvg} from "../icons";

enum EName {
    HideSvg = 'HideSvg',
    CommentsSvg = 'CommentsSvg',
    MenuSvg = 'MenuSvg',
    ReportSvg = 'ReportSvg',
    SaveSvg = 'SaveSvg',
    ShareSvg = 'ShareSvg',
    AnonSvg = 'AnonSvg',
}

type IconsName = keyof typeof EName

const iconComponent = {
    HideSvg: <HideSvg/>,
    CommentsSvg: <CommentsSvg/>,
    MenuSvg: <MenuSvg/>,
    ReportSvg: <ReportSvg/>,
    SaveSvg: <SaveSvg/>,
    ShareSvg: <ShareSvg/>,
    AnonSvg: <AnonSvg/>,
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