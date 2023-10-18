import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import UserActionTypes from '../../Redux/user/action-types'


const InputComponent = () => {

    const dispatch = useDispatch()

    const login = () => {
        dispatch({
            type: UserActionTypes.LOGIN,
            payload: {
                email: 'test@gmail.com',
                password: '123456'
            }
        })
    }


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <TouchableOpacity
                onPress={() => login()}
                style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8, height: 60, width: '100%' }} >
                <Text>login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputComponent
