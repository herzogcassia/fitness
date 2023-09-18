export const setUser = (user: any) => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};

export const clearUser = () => {
    return {
        type: 'CLEAR_USER',
    };
};

export const setModulos = () => {
    return {
        type: 'SET_MODULOS',
    };
};
