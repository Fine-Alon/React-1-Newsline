import React, {useEffect} from "react";

export const ReportSvg = (props) => {
    const [dimensions, setDimensions] = React.useState({width: 16, height: 14})

    useEffect(() => {
        setDimensions({
            height: props.height ? props.height : 16,
            width: props.width ? props.width : 14
        })
    }, [props.height, props.width])

    return <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 16 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z"
            fill="#999999"/>
    </svg>
}