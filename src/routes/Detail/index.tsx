import React, { PropsWithChildren, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Tag, Modal, Rate, Input, Divider, Card } from 'antd';
import { evaluationUpdate } from '../../store/actions/movice';
import useDemo from '../../echarts/useDemo';
import demoConfig from '../../echarts/config/demoConfig';
import gaugeConfig from '../../echarts/config/gaugeConfig';
import './index.less';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;

const { TextArea } = Input;
const { Meta } = Card;
const scoreObj = {
    0.5: '1分，超烂啊',
    1: '2分，超烂啊',
    1.5: '3分，比较差',
    2: '4分，比较差',
    2.5: '5分，一般般',
    3: '6分，一般般',
    3.5: '7分，比较好',
    4: '8分，比较好',
    4.5: '9分，棒极了',
    5: '10分，简直完美',
};

const Detail = (props: Props) => {
    console.log(props, '1111');
    const [scoreVisible, setScoreVisible] = useState<boolean>(false);
    const [videoVisible, setVideoVisible] = useState<boolean>(false);
    const [scoreHover, setScoreHover] = useState<number>(3);
    const [score, setScore] = useState<number>(3);
    const [text, setText] = useState<string>('');
    const chartRef = useRef(null);
    const chartGaugeRef = useRef(null);
    useDemo(chartRef, demoConfig(0.2));
    useDemo(chartGaugeRef, gaugeConfig(66.6));

    const moviceData = props.movice.moviceState[0];
    const start = (arr: any, obj: any) => {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]['uid'] == obj['uid']) {
                arr[i] = {};
                arr[i] = obj;
                return arr;
            }
        }
        arr.push(obj);
    };

    const scoreText = () => {
        const result = scoreObj[scoreHover] ? scoreObj[scoreHover] : scoreObj[score];
        const resultArr = result.split('，');
        return (
            <div className="scoreText">
                <span className="score">{resultArr[0]}</span>
                <span className="text">{resultArr[1]}</span>
            </div>
        );
    };
    return (
        <div>
            <div className="banner">
                <div className="inner">
                    <img
                        className="moviceImg"
                        src="https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c"
                    ></img>
                    <div className="detail">
                        <div className="left">
                            <div className="top">
                                <h3>战狼</h3>
                                <h4>zhanglang</h4>
                                <span className="item">
                                    <Tag color="magenta">magenta</Tag>
                                    <Tag color="orange">orange</Tag>
                                    <Tag color="gold">gold</Tag>
                                </span>
                                <span className="item">
                                    <Tag color="magenta">中国大陆</Tag>
                                    <Tag color="orange">123分钟</Tag>
                                </span>
                                <span className="item">
                                    <Tag color="magenta">2015-04-02</Tag>
                                    <Tag color="orange">大陆上映</Tag>
                                </span>
                            </div>
                            <div className="bottom">
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        setVideoVisible(true);
                                    }}
                                    className="button"
                                >
                                    播放预告片
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        setScoreVisible(true);
                                    }}
                                    className="button"
                                >
                                    评分/评价
                                </Button>
                            </div>
                        </div>
                        <div className="right">
                            <span className="rightPiao">52.35亿</span>
                            <span className="rightTitle">累计票房</span>
                            <span className="rightScore">9.6</span>
                            <span className="rightTitle">用户评分</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailAll">
                <div className="detailLeft">
                    <h2>战狼2</h2>
                    <Divider orientation="right">详细信息</Divider>
                    <h3>剧情简介</h3>
                    <span>
                        故事发生在非洲附近的大海上，主人公冷锋遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。
                    </span>
                    <h3>演职人员</h3>
                    <div className="actor">
                        <Card
                            hoverable
                            className="actorCard"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="actorCard"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="actorCard"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="actorCard"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="actorCard"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                    </div>
                    <h3>影片评价</h3>
                    <div className="pingjia">
                        <img src="https://img.meituan.net/avatar/348222bc705e33efabeb3d5d13ec56f147331.jpg@100w_100h_1e_1c" />
                        <div className="pingjiaRight">
                            <span className="name">邓 波</span>
                            <span>9分，棒极了</span>
                            <p>
                                绝对是电影版的麒麟，绝对是电影版的麒麟，绝对是电影版的麒麟！！重要的话说三遍！就是中队长换成女性略坑，而且总感觉太脱离了，感情戏铺垫有点欠缺。很喜欢吴京，腿真好看舔舔舔！！最后能不能告诉我，那个雷怎么排的？？
                                变成热评了科普下，麒麟是桔子树大大的小说，非常优秀的军事文，节选一段与诸君共赏。
                                “这就是平民，他们是软弱无力的，他们没见过血，十里之外一声枪响就能让他们望风而逃，所以我们要保护他们。没有军队保护的平民是可悲的，让平民变成难民甚至拿起枪自卫的军队是可耻的。我们是麒麟，我们不能让世界都和平，但是我们至少要保卫这个国家，我们的职责是永远都不让任何一个中国平民，在自己家里，看到真实的战争！
                            </p>
                        </div>
                    </div>
                </div>
                <div className="detailRight">
                    <h3>可视化数据</h3>
                    <div style={{ width: '100%', height: '430px' }} ref={chartRef} />
                    <h3>可视化数据2</h3>
                    <div style={{ width: '100%', height: '430px' }} ref={chartGaugeRef} />
                    <h3>电影推荐</h3>
                    <div className="moviceTui">
                        <Card
                            hoverable
                            className="moviceTuijian"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="moviceTuijian"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="moviceTuijian"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="moviceTuijian"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                        <Card
                            hoverable
                            className="moviceTuijian"
                            cover={
                                <img
                                    alt="actor"
                                    src="https://p1.meituan.net/movie/feea9fdcf930fe52f7c2a075db90bc77195799.jpg@128w_170h_1e_1c"
                                />
                            }
                        >
                            <Meta title="吴 京" description="导演" />
                        </Card>
                    </div>
                </div>
            </div>
            <Modal
                title="填写评价"
                visible={scoreVisible}
                width={600}
                onOk={() => {
                    const obj = {
                        uscore: score,
                        uid: '5e738f3089832b779ed8dca3',
                        utext: text,
                        upic:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACJQAAAiUBweyXgQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUCSURBVFiFrZVrUJRVGMeP2uQwgILcEYqcxsmBhiYN4r4LCV4gmdQYsomioMlbIamTY2WZAQYsFxHCCcuEIcCBiMtyvy20tlvmAPmlGWYY1C4fGJQ7C//OOfAuu+yu7xJ8+M97Oc/zf37vcy4vAUDMlcSVPCNxJqn0+lOIM7ktcSHDIS5khF576bWWvk+XOBGv5XiaFSR1Ir60SDsVzJRC6koCVgWAmr1ONbmM4ly0I1MUIn5FAFJn8sZyCy+V1IUk/i+AYCfyFDV4sFIA2omxsM1k67IBaOKNlRbXgahdFkC4E7GkiROrBUB3x7TEg9iYDUDnbf+qFV/UIbMBghzJ76sNEORE+s0C8CTEih4yc6sNQD3xnI3hNBh+vR3Zt1zzeD83VHwai8HqC8hODMVL7uuMxgU7kFdFAQIdyPvGkmO87XAq0guZb0uQdzgc3yRFokWWiL/kFzGrvqKnvuIz2Pu0heE0OJKT4h2wJxeXJn774cv4t1mGjoJkDFSnGBQUNFibhvb8E/i7KRPqomQDAPpxWeYAfK+b9FmMDze/XfIJlEWnUS87ivGeywbFJ5UFqKNjLOZW8Vn+Lt7fTb8DDqRUHMCBNAgJoZvX4s8b57RF+n84h1FFnskOTN0soKAfQ6Mq5M81KXFLp6BFHMCRKIWE/Z4bteb35Ol4LSIIGUejTQLUZCUhyt8biisn+TPrlNR1jW4H1KIAAfakU0h4y8dZ7+u+TNgL9bUzJgHY+vg8fhdfL8I73R0R7LRGKQrgb0t+FBLeDXTXGml+/tpk4aXSKGmsav5+l8fjWoCATaROFMDXhhQJCXu2rOcmMw25mCrLwExjrnjx9ss8dro6iz+HP/GYFuBFW3JdFGCHtf42HKg6j+n6nHkAuQ7AzXxoOjO5ZpWLu2KmNW8eoCoL/zSl6y1C3w0kWxTgeUvyAV2I2qTzsQG8nRpFgbatol1gsb8UIiM+TGf+CZi3OIA1iaTTgMWtuB4POnL0i9AFOSO/QKckZV70flaZrxczqriEne4Wuu0H8xYHsCLbtlvN/zwWTi8kBGzFhJHDZ5bt94U9r3ce0EPpiNST5wo/IubJvEUBttuSjSyYEQv0dF3gvZBtGKj8QrT9QzWpSIrw5jlCvt+meQDmLQpAf5kePJjK307f4IUNa3H6WDRUNWmYYYtwoQPsvlf+Fc6eOAhfm3U8luXwrWe/UNyK/449HgngR4gFDSwUEphYG9kCevZJW1inJYHU5COksYDvgtnubGi6ZNB0pONU8yU+ZpWeDK8t9jyH5ep6MW9WwygAHbxDNbckAcJ0uB2PgUN9EfwaK9BcVoexxlJMNhdjuuM7TLQWQ1Fei8CmCjjSGOeP3uQ5xrwWatwxANhhRUpNJMDHwQKB9SXwbylDVEslRnKbMNN5dXHbdRVhJKeRj7GYQHkJfBwtTQGA1TIAoFskiA6OLw2O2ilFSncvDna3cnOmvLo2jGbWYbyoHONXy/BQVoP82sVxFpva0499eyKMAYyzWkbXACWT0IBhITg2Lg6ZfUOQ/XEfmVRHVL8irL2KF7nW0IWxMhUelqtwXd7J34W2VeGwSs1jeU7fXRxKSNAtPsxqiP0NrdmJFR21e1C2YKSrjP57OK6+hbC2StTXd0NOFUrvj6l/o2N3DeKZDhx4ZYh5Mm/RbShI1n9fbsxMUGrfIN5RtCOxs32O3T8qlqrHVJ3/AD4ZN8/sIA7uAAAAAElFTkSuQmCC',
                    };
                    start(moviceData.evaluation, obj);
                    console.log(moviceData.evaluation, '11113243');
                    evaluationUpdate({ evaluation: moviceData.evaluation, moviceId: '111' });
                    setScoreVisible(false);
                }}
                onCancel={() => {
                    setScoreVisible(false);
                }}
            >
                <div className="scoreParent">
                    {scoreText()}
                    <Rate
                        allowHalf
                        onChange={value => {
                            if (value !== 0) {
                                setScore(value);
                            }
                        }}
                        onHoverChange={value => {
                            setScoreHover(value);
                        }}
                        value={score}
                    ></Rate>
                    <TextArea
                        onChange={e => setText(e.target.value)}
                        placeholder="来说说你对这部影片的看法吧"
                        autoSize={{ minRows: 6, maxRows: 12 }}
                    />
                </div>
            </Modal>
            <Modal
                title="预告片播放"
                visible={videoVisible}
                onCancel={() => {
                    setVideoVisible(false);
                }}
                width={848}
                footer={null}
                centered={true}
            >
                <video
                    src="http://preview.ewang.com/movie/videos/854x4800e1f7602b5a5408192f799f950125901.mp4"
                    controls={true}
                    className="video"
                ></video>
            </Modal>
        </div>
    );
};
export default connect(state => state, { evaluationUpdate })(Detail);
