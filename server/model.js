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
    movice: {
        pic: String, // 图片
        video: String, // 预告片地址
        name: String, // 影片名字
        director: String, // 导演
        actor: [
            {
                actorName: String, // 演员名字
                actorPic: String, // 演员图片
            },
        ], // 演员
        language: String, // 语言
        duration: String, // 时长
        type: Array, // 类型
        location: String, // 上映地点
        releaseTime: String, // 上映时间
        boxOffice: String, // 累计票房
        desc: String, // 剧情简介
        evaluation: [
            {
                uid: String, // 评价用户id
                upic: String, // 评价用户头像
                uscore: String, // 评分
                utext: String, // 评论
            },
        ],
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
