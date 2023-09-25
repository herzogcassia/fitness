// store.ts
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userReducer';


export const rootReducer = combineReducers({
    user: userReducer,
});


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'], // Coloque os nomes dos reducers que deseja persistir aqui
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // Adicione quaisquer outros middleware ou configurações necessárias aqui
});

export const persistor = persistStore(store)
;