import axios from 'axios';

// 拦截请求
axios.interceptors.request.use(function(config) {
    message.loading({ content: 'Loading...', key: 'updatable' });
    return config;
});

// 拦截相应

axios.interceptors.response.use(function(config) {
    message.success({ content: '加载完成!', key: 'updatable', duration: 1 });
    return config;
});
