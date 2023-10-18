import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import UserActionTypes from '../../Redux/user/action-types'
import themeActionsTypes from '../../Redux/theme/actions-types'
import { useState } from 'react'

const Home = () => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch({ type: UserActionTypes.LOGOUT })
    }


    const [teste, setTeste] = useState(false)

    const { currentMode } = useSelector((rootReducer: any) => rootReducer.themeReducer)
    console.log("🚀 ~ file: index.tsx:9 ~ Login ~ currentTheme:", currentMode)

    const bg = () => {
        switch (currentMode) {
            case 'LIGHT':
                return '#fff'
            case 'DARK':
                return '#000'
            default:
                return '#fff'
        }
    }


    const changeTheme = () => {
        setTeste(!teste)
        if (teste) {
            dispatch({
                type: themeActionsTypes.DARK_MODE, payload: {
                    darkMode: false
                }
            })
        } else {
            dispatch({
                type: themeActionsTypes.LIGHT_MODE, payload: {
                    darkMode: true
                }
            })
        }

    }

    // const testBG = () => {
    //     dispatch({
    //         type: themeActionsTypes.LIGHT_MODE, payload: {
    //             darkMode: true
    //         }
    //     })
    // }


    return (
        <View style={{ backgroundColor: bg(), flex: 1, justifyContent: 'center', alignItems: 'center', gap: 40, padding: 16 }}>
            <TouchableOpacity
                onPress={() => logout()}
                style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8, height: 60, width: '100%', backgroundColor: currentMode === 'DARK' ? 'white' : null }} >
                <Text>LOGOUT</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => changeTheme()}
                style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8, height: 60, width: '100%', backgroundColor: currentMode === 'DARK' ? 'white' : null }} >
                <Text>CHANGE THEME</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
                onPress={() => testBG()}
                style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8, height: 60, width: '100%', backgroundColor: currentMode === 'DARK' ? 'white' : null }} >
                <Text>CHANGE THEME</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default Home
