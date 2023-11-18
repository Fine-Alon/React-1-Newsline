import React from 'react';
import {Icon} from "../../../../Icon";


export const Comments: React.FC = () => {
    return <>{<Icon name={'CommentsSvg'} height={15} width={15}/>}Comments </>
}
export const Share: React.FC = () => {
    return <>{<Icon name={'ShareSvg'}/>}Share </>
}
export const Hide: React.FC = () => {
    return <>{<Icon name={'HideSvg'}/>}Hide </>
}
export const Save: React.FC = () => {
    return <>{<Icon name={'SaveSvg'}/>}Save </>
}
export const Report: React.FC = () => {
    return <>{<Icon name={'ReportSvg'}/>} Report </>
}

interface CloseProps {
    styles?: string
}

export const Close: React.FC<CloseProps> = (props) => {
    return <>
        <button className={props.styles}> Close</button>
    </>
}