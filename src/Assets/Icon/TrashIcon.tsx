import React from 'react'
import Svg, { Path } from 'react-native-svg'

const TrashIcon = () => {
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
                d="M31.5 8.97c-4.995-.495-10.02-.75-15.03-.75-2.97 0-5.94.15-8.91.45l-3.06.3M12.75 7.455l.33-1.965C13.32 4.065 13.5 3 16.035 3h3.93c2.535 0 2.73 1.125 2.955 2.505l.33 1.95M28.275 13.71L27.3 28.815C27.135 31.17 27 33 22.815 33h-9.63C9 33 8.865 31.17 8.7 28.815L7.725 13.71M15.495 24.75h4.995M14.25 18.75h7.5"
            />
        </Svg>
    )
}

export default TrashIcon
