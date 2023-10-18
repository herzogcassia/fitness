import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View } from 'react-native';
import WalletIcon from '../Assets/Icon/WalletIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const WalletStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Wallet">
            <Stack.Screen name="Wallet" component={Wallet} />
        </Stack.Navigator>
    )
}



const GraphicsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Graphics">
            <Stack.Screen name="Graphics" component={Graphics} />
        </Stack.Navigator>
    )
};


const NotificationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Notification">
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
};


const SetupStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Setup">
            <Stack.Screen name="Setup" component={Setup} />
        </Stack.Navigator>
    )
};



const TabNavigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                tabBarOptions={{
                    keyboardHidesTabBar: true,
                }}
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: barStyle
                }}
            >
                <Tab.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabContainer}>
                                <WalletIcon color={focused ? '#130138' : '#C3C3C3'} />
                                <Text style={{ color: focused ? '#213045' : '#C3C3C3' }}>Início</Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>

        </View>
    );
}




