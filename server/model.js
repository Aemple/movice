const mongoose = require('mongoose');
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/movice';
mongoose.connect(DB_URL);

const models = {
    user: {
        user: {
            type: String,
            require: true,
        },
        pwd: {
            type: String,
            require: true,
        },
        //头像
        avatar: {
            type: String,
        },
        love: {
            type: Array,
        },
        // 个人简介
        desc: {
            type: String,
        },
        age: {
            type: String,
        },
        location: {
            type: String,
        },
        school: {
            type: String,
        },
        phone: {
            type: String,
        },
        gender: {
            type: String,
        },
    },
};

//批量生成
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]));
}

//读取
module.exports = {
    getModel: function(name) {
        return mongoose.model(name);
    },
};
