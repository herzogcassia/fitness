import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

const PasswordIcon = () => {
    return (
        <Svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                stroke="#828282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
            />
            <Path
                stroke="#828282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M16.28 13.61a4.147 4.147 0 01-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88zM10.45 16.28l-.85-.86"
            />
            <Path
                stroke="#828282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.395 10.7h.008"
            />
        </Svg>
    )
}

export default PasswordIcon
