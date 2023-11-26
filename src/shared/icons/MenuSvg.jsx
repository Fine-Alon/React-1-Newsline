import React, {useEffect} from "react";

export const MenuSvg = (props) => {
    const [dimensions, setDimensions] = React.useState({width: 5, height: 20})

    useEffect(() => {
        setDimensions({
            height: props.height ? props.height : 5,
            width: props.width  ? props.width : 20
        })
    }, [props.height, props.width])

    return <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
    </svg>
}