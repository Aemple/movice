import axios from 'axios';
import { AUTH_SUCCESS, LOAD_DATA, ERROR_MSG, LOGOUT } from '../action-types';
function errorMsg(msg: string) {
    return { msg, type: ERROR_MSG };
}

function authSuccess(obj: any) {
    const { pwd, ...data } = obj;
    return { type: AUTH_SUCCESS, payload: data };
}

export function loadData(userinfo: any) {
    return { type: LOAD_DATA, payload: userinfo };
}

export function logoutSubmit() {
    return { type: LOGOUT };
}

export function update(data: any) {
    return dispatch => {
        axios.post('/user/update', data).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        });
    };
}

export function login({ user, pwd }: any) {
    return dispatch => {
        axios.post('/user/login', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        });
    };
}

export function regisger({ user, pwd, repeatpwd }: any) {
    if (pwd !== repeatpwd) {
        return errorMsg('两次密码不一致 ！！！');
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess({ user, pwd }));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        });
    };
}
