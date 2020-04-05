import axios from 'axios';
import { AUTH_SUCCESS, LOAD_DATA, ERROR_MSG, LOGOUT } from '../action-types';
function errorMsg(msg: string) {
    return { msg, type: ERROR_MSG };
}

function authSuccess(obj: any) {
    return { type: AUTH_SUCCESS, payload: obj };
}

export function loadData(userinfo: any) {
    return { type: LOAD_DATA, payload: userinfo };
}

export function logoutSubmit() {
    return { type: LOGOUT };
}

export function create(data: any) {
    return dispatch => {
        axios.post('/user/create', data).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        });
    };
}

export function getMoviceData() {
    return dispatch => {
        axios.get('/user/getMoviceData').then(res => {
            if (res.status === 200 && res.data.code === 0) {
                console.log('data-======', res.data.data);

                dispatch(authSuccess({ moviceState: res.data.data, msg: res.data.msg }));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        });
    };
}

export function evaluationUpdate(data: any) {
    return dispatch => {
        axios.post('/user/evaluationUpdate', data).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess({ moviceState: res.data.data, msg: res.data.msg }));
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
                dispatch(authSuccess({ moviceState: res.data.data, msg: res.data.msg }));
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
