import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SetupIcon = () => {
    return (
        <Svg
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 28 28"
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.5 10.628v6.732c0 2.473 0 2.473 2.333 4.048l6.417 3.71c.968.56 2.543.56 3.5 0l6.417-3.71c2.333-1.575 2.333-1.575 2.333-4.036v-6.744c0-2.461 0-2.461-2.333-4.036l-6.417-3.71c-.957-.56-2.532-.56-3.5 0l-6.417 3.71C3.5 8.167 3.5 8.167 3.5 10.628z"
            ></Path>
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 17.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
            ></Path>
        </Svg>
    )
}

export default SetupIcon
