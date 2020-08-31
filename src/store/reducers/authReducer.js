
const initState = {
    isAuthUser: false,
    authError: null,
    isLoading: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                isAuthUser: true,
                authError: null
            }
        case 'SET_LOADER':
            return {
                ...state,
                isLoading: true
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return {
                ...state,
                isAuthUser: false,
            };
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
}

export default authReducer