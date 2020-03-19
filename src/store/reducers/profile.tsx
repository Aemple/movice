import { AnyAction } from 'redux';
import { AUTH_SUCCESS, LOAD_DATA, ERROR_MSG, LOGOUT } from '../action-types';
export interface ProfileState {
    msg: string;
    user: string;
    age: string;
    desc: string;
    location: string;
    school: string;
    avatar: string;
    phone: string;
    gender: string;
    love: string[];
}
let initialState: ProfileState = {
    msg: '',
    user: '',
    age: '',
    desc: '',
    location: '',
    school: '',
    avatar: '',
    love: [],
    phone: '',
    gender: '男',
};
export default function(state: ProfileState = initialState, action: AnyAction): ProfileState {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                msg: '',
                ...action.payload,
            };
        // case LOAD_DATA:
        //     return { ...state, ...action.payload };
        case ERROR_MSG:
            return { ...state, msg: action.msg };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}
