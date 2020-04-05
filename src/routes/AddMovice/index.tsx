import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Card, Input, Radio, Select, Button } from 'antd';
import { create } from '../../store/actions/movice';
import { MoviceState } from '../../store/reducers/movice';
const { Option } = Select;
const { TextArea } = Input;
import './index.less';
interface Props {}
interface State extends MoviceState {}
class AddMovice extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            pic:
                'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c', // 图片
            video:
                'http://preview.ewang.com/movie/videos/854x4800e1f7602b5a5408192f799f950125901.mp4', // 预告片地址
            name: '战狼 2', // 影片名字
            director: '吴京', // 导演
            directorPic:
                'https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c', // 导演
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
            type: ['战争', '科幻'], // 类型
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
        };
    }

    onChange(key: string, val: string | string[]) {
        // @ts-ignore
        this.setState({
            [key]: val,
        });
    }
    onChangeActor(key: number, name: string, val: string | string[]) {
        const actorCopy = this.state.actor;
        actorCopy[key][name] = val;
        // @ts-ignore
        this.setState({
            actor: actorCopy,
        });
    }
    render() {
        const loveStyletData = '剧情,喜剧,动作,爱情,惊悚,犯罪,悬疑,战争,科幻,动画,恐怖,家庭,传记,冒险,奇幻,武侠,历史,运动,歌舞,音乐,纪录,伦理,西部'
            .split(',')
            .map(style => {
                return <Option key={style}>{style}</Option>;
            });
        return (
            <div className="addMovice">
                <h1>电影数据录入</h1>
                <div className="detail">
                    <div className="textAreaParent">
                        <div className="textArea">
                            <span>电影名字</span>
                            <TextArea
                                onChange={e => this.onChange('name', e.target.value)}
                                value={this.state.name}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="love">
                            <span className="loveText">电影类型 : </span>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                value={this.state.type}
                                onChange={value => this.onChange('type', value)}
                            >
                                {loveStyletData}
                            </Select>
                        </div>
                        <div className="textArea">
                            <span>电影宣传图</span>
                            <TextArea
                                onChange={e => this.onChange('pic', e.target.value)}
                                value={this.state.pic}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>电影预告片</span>
                            <TextArea
                                onChange={e => this.onChange('video', e.target.value)}
                                value={this.state.video}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>电影导演</span>
                            <TextArea
                                onChange={e => this.onChange('director', e.target.value)}
                                value={this.state.director}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>导演海报</span>
                            <TextArea
                                onChange={e => this.onChange('directorPic', e.target.value)}
                                value={this.state.directorPic}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>演员（-）</span>
                            <TextArea
                                onChange={e => this.onChangeActor(0, 'actorName', e.target.value)}
                                value={this.state.actor[0].actorName}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>演员（-）海报</span>
                            <TextArea
                                onChange={e => this.onChangeActor(0, 'actorPic', e.target.value)}
                                value={this.state.actor[0].actorPic}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>演员（二）</span>
                            <TextArea
                                onChange={e => this.onChangeActor(1, 'actorName', e.target.value)}
                                value={this.state.actor[1].actorName}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>演员（二）海报</span>
                            <TextArea
                                onChange={e => this.onChangeActor(1, 'actorPic', e.target.value)}
                                value={this.state.actor[1].actorPic}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>演员（三）</span>
                            <TextArea
                                onChange={e => this.onChangeActor(2, 'actorName', e.target.value)}
                                value={this.state.actor[2].actorName}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>演员（三）海报</span>
                            <TextArea
                                onChange={e => this.onChangeActor(2, 'actorPic', e.target.value)}
                                value={this.state.actor[2].actorPic}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>电影语言</span>
                            <TextArea
                                onChange={e => this.onChange('language', e.target.value)}
                                value={this.state.language}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>电影时长</span>
                            <TextArea
                                onChange={e => this.onChange('duration', e.target.value)}
                                value={this.state.duration}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>上映地点</span>
                            <TextArea
                                onChange={e => this.onChange('location', e.target.value)}
                                value={this.state.location}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>上映时间</span>
                            <TextArea
                                onChange={e => this.onChange('releaseTime', e.target.value)}
                                value={this.state.releaseTime}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>电影累计票房</span>
                            <TextArea
                                onChange={e => this.onChange('boxOffice', e.target.value)}
                                value={this.state.boxOffice}
                                placeholder="Autosize height based on content lines"
                                autoSize
                            />
                        </div>
                        <div className="textArea">
                            <span>电影简介</span>
                            <TextArea
                                onChange={e => this.onChange('desc', e.target.value)}
                                value={this.state.desc}
                                placeholder="Autosize height based on content lines"
                                autoSize={{ minRows: 3, maxRows: 18 }}
                                className="testdesc"
                            />
                        </div>
                        <Button
                            type="primary"
                            onClick={() => {
                                this.props.create(this.state);
                                // this.props.history.push('/profile');
                            }}
                        >
                            提交
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state.profile, { create })(AddMovice);
