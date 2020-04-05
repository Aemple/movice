import { AnyAction } from 'redux';
import { AUTH_SUCCESS, LOAD_DATA, ERROR_MSG, LOGOUT } from '../action-types';
export interface MoviceState {
    pic: string; // 图片
    video: string; // 预告片地址
    name: string; // 影片名字
    director: string; // 导演
    directorPic: string;
    actor: any[]; // 演员
    language: string; // 语言
    duration: string; // 时长
    type: any[]; // 类型
    location: string; // 上映地点
    releaseTime: string; // 上映时间
    boxOffice: string; // 累计票房
    desc: string; // 剧情简介
    evaluation: any[];
}
interface State {
    moviceState: MoviceState[];
    msg: string;
}
let initialState: State = {
    moviceState: [
        {
            pic:
                'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c', // 图片
            video:
                'http://preview.ewang.com/movie/videos/854x4800e1f7602b5a5408192f799f950125901.mp4', // 预告片地址
            name: '战狼 2', // 影片名字
            director: '吴京', // 导演
            directorPic:
                'https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c',
            actor: [
                {
                    actorName: '吴京', // 演员名字
                    actorPic:
                        'https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c', // 演员图片
                },
                {
                    actorName: '吴刚', // 演员名字
                    actorPic:
                        'https://p1.meituan.net/moviemachine/be4dda3cbbdd868f653e0a3256a8c6d0172681.jpg@128w_170h_1e_1c', // 演员图片
                },
                {
                    actorName: '张瀚', // 演员名字
                    actorPic:
                        'https://p0.meituan.net/moviemachine/dfce8c0cadf9b5439113cfac9b5717f1189629.jpg@128w_170h_1e_1c', // 演员图片
                },
            ], // 演员
            language: '中文 & 英文', // 语言
            duration: '123分钟', // 时长
            type: ['动作', '战争'], // 类型
            location: '中国大陆', // 上映地点
            releaseTime: '2017-07-27', // 上映时间
            boxOffice: '56.83亿', // 累计票房
            desc:
                '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。', // 剧情简介
            evaluation: [
                {
                    uid: '5e738f3089832b779ed8dca2', // 评价用户id
                    uage: '18',
                    ugender: '男',
                    upic:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACJQAAAiUBweyXgQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUCSURBVFiFrZVrUJRVGMeP2uQwgILcEYqcxsmBhiYN4r4LCV4gmdQYsomioMlbIamTY2WZAQYsFxHCCcuEIcCBiMtyvy20tlvmAPmlGWYY1C4fGJQ7C//OOfAuu+yu7xJ8+M97Oc/zf37vcy4vAUDMlcSVPCNxJqn0+lOIM7ktcSHDIS5khF576bWWvk+XOBGv5XiaFSR1Ir60SDsVzJRC6koCVgWAmr1ONbmM4ly0I1MUIn5FAFJn8sZyCy+V1IUk/i+AYCfyFDV4sFIA2omxsM1k67IBaOKNlRbXgahdFkC4E7GkiROrBUB3x7TEg9iYDUDnbf+qFV/UIbMBghzJ76sNEORE+s0C8CTEih4yc6sNQD3xnI3hNBh+vR3Zt1zzeD83VHwai8HqC8hODMVL7uuMxgU7kFdFAQIdyPvGkmO87XAq0guZb0uQdzgc3yRFokWWiL/kFzGrvqKnvuIz2Pu0heE0OJKT4h2wJxeXJn774cv4t1mGjoJkDFSnGBQUNFibhvb8E/i7KRPqomQDAPpxWeYAfK+b9FmMDze/XfIJlEWnUS87ivGeywbFJ5UFqKNjLOZW8Vn+Lt7fTb8DDqRUHMCBNAgJoZvX4s8b57RF+n84h1FFnskOTN0soKAfQ6Mq5M81KXFLp6BFHMCRKIWE/Z4bteb35Ol4LSIIGUejTQLUZCUhyt8biisn+TPrlNR1jW4H1KIAAfakU0h4y8dZ7+u+TNgL9bUzJgHY+vg8fhdfL8I73R0R7LRGKQrgb0t+FBLeDXTXGml+/tpk4aXSKGmsav5+l8fjWoCATaROFMDXhhQJCXu2rOcmMw25mCrLwExjrnjx9ss8dro6iz+HP/GYFuBFW3JdFGCHtf42HKg6j+n6nHkAuQ7AzXxoOjO5ZpWLu2KmNW8eoCoL/zSl6y1C3w0kWxTgeUvyAV2I2qTzsQG8nRpFgbatol1gsb8UIiM+TGf+CZi3OIA1iaTTgMWtuB4POnL0i9AFOSO/QKckZV70flaZrxczqriEne4Wuu0H8xYHsCLbtlvN/zwWTi8kBGzFhJHDZ5bt94U9r3ce0EPpiNST5wo/IubJvEUBttuSjSyYEQv0dF3gvZBtGKj8QrT9QzWpSIrw5jlCvt+meQDmLQpAf5kePJjK307f4IUNa3H6WDRUNWmYYYtwoQPsvlf+Fc6eOAhfm3U8luXwrWe/UNyK/449HgngR4gFDSwUEphYG9kCevZJW1inJYHU5COksYDvgtnubGi6ZNB0pONU8yU+ZpWeDK8t9jyH5ep6MW9WwygAHbxDNbckAcJ0uB2PgUN9EfwaK9BcVoexxlJMNhdjuuM7TLQWQ1Fei8CmCjjSGOeP3uQ5xrwWatwxANhhRUpNJMDHwQKB9SXwbylDVEslRnKbMNN5dXHbdRVhJKeRj7GYQHkJfBwtTQGA1TIAoFskiA6OLw2O2ilFSncvDna3cnOmvLo2jGbWYbyoHONXy/BQVoP82sVxFpva0499eyKMAYyzWkbXACWT0IBhITg2Lg6ZfUOQ/XEfmVRHVL8irL2KF7nW0IWxMhUelqtwXd7J34W2VeGwSs1jeU7fXRxKSNAtPsxqiP0NrdmJFR21e1C2YKSrjP57OK6+hbC2StTXd0NOFUrvj6l/o2N3DeKZDhx4ZYh5Mm/RbShI1n9fbsxMUGrfIN5RtCOxs32O3T8qlqrHVJ3/AD4ZN8/sIA7uAAAAAElFTkSuQmCC', // 评价用户头像
                    uscore: '8.8', // 评分
                    utext:
                        '真的是让人血脉贲张，久久不能平息的一部片子…尤其是开篇水下长镜头，看得快窒息了，太紧张了，还有非洲工厂坦克漂移的那场…很燃很大片，比第一部更好看！感受到了导演的认真劲和所有的付出。张翰的角色也超惊喜，好感+1+1+1+1。出了影院马上想搜 风去云不回 这首歌，被深深的戳中，马上和《战狼1》的情绪衔接在一起，真的被打动了。结尾彩蛋以及配乐也很燃，很有大片的气质，觉得中国也能有这样系列的大片，特别给力。期待《战狼3》', // 评论
                },
            ],
        },
    ],
    msg: '',
};
export default function(state: State = initialState, action: AnyAction): State {
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
