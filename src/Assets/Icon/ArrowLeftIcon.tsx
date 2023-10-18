import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ArrowLeftIcon = () => {
    return (
        <Svg
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
        >
            <Path
                stroke="#45197D"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M18 33c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15z"
            ></Path>
            <Path
                stroke="#45197D"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.89 23.295L14.61 18l5.28-5.295"
            ></Path>
        </Svg>
    )
}

export default ArrowLeftIcon
