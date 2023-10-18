import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LogoutIcon = () => {
    return (
        <Svg
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
        >
            <Path
                stroke="#5B259F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.35 11.34c.465-5.4 3.24-7.605 9.315-7.605h.195c6.705 0 9.39 2.685 9.39 9.39v9.78c0 6.705-2.685 9.39-9.39 9.39h-.195c-6.03 0-8.805-2.175-9.3-7.485M3 18h19.32"
            ></Path>
            <Path
                stroke="#5B259F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.975 12.975L24 18l-5.025 5.025"
            ></Path>
        </Svg>
    )
}

export default LogoutIcon
