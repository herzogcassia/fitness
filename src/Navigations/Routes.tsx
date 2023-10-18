import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import React, { useReducer } from 'react'
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import userReducer from '../Redux/user/reducer';

const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const LoginStackScreen = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
        />
    </LoginStack.Navigator>

)

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
        />
    </HomeStack.Navigator>
)


const Routes = () => {

    const { currentUser } = useSelector((rootReducer: any )=> rootReducer.userReducer)
    console.log("🚀 ~ file: Routes.tsx:37 ~ Routes ~ currentUser:", currentUser)


    return (
        <NavigationContainer>
            {currentUser ? <HomeStackScreen /> : <LoginStackScreen />}
        </NavigationContainer>
    )
}

export default Routes
