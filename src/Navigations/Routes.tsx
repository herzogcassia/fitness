import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import React from 'react'
import Login from '../Pages/Login';
import Home from '../Pages/Home';

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

    const user = useSelector((state: any) => state.user)

    return (
        <NavigationContainer>
            {user.token ? <HomeStackScreen /> : <LoginStackScreen />}
        </NavigationContainer>
    )
}

export default Routes
