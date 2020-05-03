import React, { PropsWithChildren, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom';
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
    console.log(props.match.params.id, '====props.match.params.id====');
    const [scoreVisible, setScoreVisible] = useState<boolean>(false);
    const [videoVisible, setVideoVisible] = useState<boolean>(false);
    const [scoreHover, setScoreHover] = useState<number>(3);
    const [score, setScore] = useState<number>(3);
    const [text, setText] = useState<string>('');
    const chartRef = useRef(null);
    const chartGaugeRef = useRef(null);
    useDemo(chartRef, demoConfig(0.2));
    useDemo(chartGaugeRef, gaugeConfig(66.6));

    const moviceData = props.movice.moviceState.find(item => item._id === props.match.params.id);
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
                    <img className="moviceImg" src={moviceData.pic}></img>
                    <div className="detail">
                        <div className="left">
                            <div className="top">
                                <h3>{moviceData.name}</h3>
                                <h4>zhanglang</h4>
                                <span className="item">
                                    {moviceData.type[0] && (
                                        <Tag color="magenta">{moviceData.type[0]}</Tag>
                                    )}
                                    {moviceData.type[1] && (
                                        <Tag color="orange">{moviceData.type[1]}</Tag>
                                    )}
                                    {moviceData.type[2] && (
                                        <Tag color="gold">{moviceData.type[2]}</Tag>
                                    )}
                                </span>
                                <span className="item">
                                    <Tag color="magenta">{moviceData.language}</Tag>
                                    <Tag color="orange">{moviceData.duration}</Tag>
                                </span>
                                <span className="item">
                                    <Tag color="magenta">{moviceData.releaseTime}</Tag>
                                    <Tag color="orange">{moviceData.location}</Tag>
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
                            <span className="rightPiao">{moviceData.boxOffice}</span>
                            <span className="rightTitle">累计票房</span>
                            <span className="rightScore">
                                {(
                                    moviceData.evaluation.reduce(
                                        (pre, next) =>
                                            pre + Number(scoreObj[next.uscore].split('')[0]),
                                        0
                                    ) / moviceData.evaluation.length
                                ).toFixed(1)}
                            </span>
                            <span className="rightTitle">用户评分</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailAll">
                <div className="detailLeft">
                    <h2>{moviceData.name}</h2>
                    <Divider orientation="right">详细信息</Divider>
                    <h3>剧情简介</h3>
                    <span>{moviceData.desc}</span>
                    <h3>演职人员</h3>
                    <div className="actor">
                        <Card
                            hoverable
                            className="actorCard"
                            cover={<img alt="actor" src={moviceData.directorPic} />}
                        >
                            <Meta title={moviceData.director} description="导演" />
                        </Card>
                        {moviceData.actor.map(item => (
                            <Card
                                hoverable
                                className="actorCard"
                                cover={<img alt="actor" src={item.actorPic} />}
                            >
                                <Meta title={item.actorName} description="演员" />
                            </Card>
                        ))}
                        {/* <Card
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
                        </Card> */}
                    </div>
                    <h3>影片评价</h3>
                    {moviceData.evaluation.map(item => (
                        <div className="pingjia">
                            <img src={item.upic} />
                            <div className="pingjiaRight">
                                <span className="name">邓 波</span>
                                <span>{scoreObj[item.uscore]}</span>
                                <p>{item.utext}</p>
                            </div>
                        </div>
                    ))}
                    {/* <div className="pingjia">
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
                    </div> */}
                </div>
                <div className="detailRight">
                    <h3>总体评分</h3>
                    <div style={{ width: '100%', height: '330px' }} ref={chartGaugeRef} />
                    <h3>评价来源</h3>
                    <div style={{ width: '100%', height: '330px' }} ref={chartRef} />
                    <h3>电影推荐</h3>
                    <div className="moviceTui">
                        {props.movice.moviceState.slice(0, 6).map(item => (
                            <Link to={`/detail/${item._id}`} target="_blank">
                                <Card
                                    hoverable
                                    className="moviceTuijian"
                                    cover={<img alt="actor" src={item.pic} />}
                                >
                                    <Meta
                                        title={item.name}
                                        description={(
                                            item.evaluation.reduce(
                                                (pre, next) =>
                                                    pre +
                                                    Number(scoreObj[next.uscore].split('')[0]),
                                                0
                                            ) / moviceData.evaluation.length
                                        ).toFixed(1)}
                                    />
                                </Card>
                            </Link>
                        ))}
                        {/* <Card
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
                        </Card> */}
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
                        uid: props.profile._id,
                        utext: text,
                        upic: props.profile.avatar,
                    };
                    start(moviceData.evaluation, obj);
                    console.log(moviceData.evaluation, '11113243');
                    props.evaluationUpdate({
                        evaluation: moviceData.evaluation,
                        moviceId: props.match.params.id,
                    });
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
                <video src={moviceData.video} controls={true} className="video"></video>
            </Modal>
        </div>
    );
};
export default connect(state => state, { evaluationUpdate })(Detail);
