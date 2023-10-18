import { View } from 'react-native'
import InputComponent from '../../Components/InputComponent/InputComponent'
import { useSelector } from 'react-redux'

const Login = () => {

    const { currentMode } = useSelector((rootReducer: any) => rootReducer.themeReducer)
    // console.log("🚀 ~ file: index.tsx:9 ~ Login ~ currentTheme:", currentMode)

    const bg = () => {
        switch (currentMode) {
            case 'LIGHT_MODE':
                return '#fff'
            case 'DARK_MODE':
                return '#000'
            default:
                return '#fff'
        }
    }

    return (
        <View style={{ backgroundColor: bg(), flex: 1 }}>
            <InputComponent />
        </View>
    )
}

export default Login
