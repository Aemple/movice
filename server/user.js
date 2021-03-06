const express = require('express');
const utils = require('utility');

const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const Movice = model.getModel('movice');
const _filter = { pwd: 0, __v: 0 };

// User.create({ user: 'TEST1', pwd: '123456' }, function(err, doc) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(doc);
// });

Router.post('/update', function(req, res) {
    const userid = req.cookies.userid;
    if (!userid) {
        return res.json({ code: 1 });
    }
    console.log(userid, '===userid===');
    const body = req.body;
    // User.findOne({ _id: userid }, function(err, doc) {
    //     console.log(doc, '===findOne====');
    //     return res.json({ code: 0, data: doc });
    // });
    User.findOneAndUpdate({ _id: userid }, body, function(err, doc) {
        if (err) {
            console.log(err, 'err');
        }
        const data = Object.assign(
            {},
            {
                user: doc.user,
            },
            body
        );
        return res.json({ code: 0, data });
    });
});

Router.post('/evaluationUpdate', function(req, res) {
    const { moviceId, evaluation } = req.body;
    Movice.findOneAndUpdate({ _id: moviceId }, { evaluation: evaluation }, function(err, doc) {
        if (err) {
            console.log(err, 'err');
        }
        Movice.find({}, function(err, doc) {
            // console.log(doc, '===doc===');
            return res.json({ code: 0, data: doc, msg: '' });
        });
    });
});

Router.get('/test', function(req, res) {
    User.find({}, function(err, doc) {
        return res.json({ code: 0, data: doc });
    });
});
Router.get('/getMoviceData', function(req, res) {
    Movice.find({}, function(err, doc) {
        return res.json({ code: 0, data: doc, msg: '' });
    });
});

Router.post('/login', function(req, res) {
    const { user, pwd } = req.body;
    User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function(err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '用户名或者密码错误' });
        }
        const { _id } = doc;
        res.cookie('userid', _id);
        return res.json({ code: 0, data: doc });
    });
});

Router.post('/register', function(req, res) {
    const { user, pwd } = req.body;
    User.findOne({ user }, function(err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' });
        }

        // User.create ({user, pwd:md5Pwd(pwd), type},function (err,doc) {
        //     if (err) {
        //         return res.json({code:1,msg:'后端出错了'})
        //     }
        //     return res.json({code:0})
        // })
        const userModel = new User({ user, pwd: md5Pwd(pwd) });
        userModel.save(function(e, d) {
            if (e) {
                return res.json({ code: 1, msg: '后端出错了' });
            }
            const { user, _id } = d;
            res.cookie('userid', _id);
            return res.json({ code: 0, data: { user, _id } });
        });
    });
});

Router.get('/info', function(req, res) {
    const { userid } = req.cookies;
    if (!userid) {
        return res.json({ code: 1 });
    }
    User.findOne({ _id: userid }, _filter, function(err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错了' });
        }
        if (doc) {
            return res.json({ code: 0, data: doc });
        }
    });
    // 用户有没有cookie
});

function md5Pwd(pwd) {
    const salt = 'money_is_good_3957x8yza6!@#IUHJh~~';
    return utils.md5(utils.md5(pwd + salt));
}

// movice
Router.post('/create', function(req, res) {
    const { name } = req.body;
    const body = req.body;
    Movice.findOne({ name }, function(err, doc) {
        if (err) {
            console.log(err, 'err1');
            return res.json({ code: 1, moviceState: [], msg: '后端出错了' });
        }
        if (doc) {
            return res.json({ code: 1, moviceState: [], msg: '电影名重复' });
        }

        Movice.create(body, function(err, doc) {
            if (err) {
                console.log(err, 'err2');
                return res.json({ code: 1, moviceState: [], msg: '后端出错了' });
            }
            Movice.find({}, function(err, doc) {
                if (err) {
                    console.log(err, 'err3');
                    return res.json({ code: 1, moviceState: [], msg: '后端出错了' });
                }
                console.log(doc, '所有数据');
                return res.json({ code: 0, data: doc, msg: '' });
            });
        });
    });
});

module.exports = Router;
