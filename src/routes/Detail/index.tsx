import React, { PropsWithChildren, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Tag, Modal, Rate, Input, Divider, Card } from 'antd';
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
    const [scoreVisible, setScoreVisible] = useState<boolean>(false);
    const [videoVisible, setVideoVisible] = useState<boolean>(false);
    const [scoreHover, setScoreHover] = useState<number>(3);
    const [score, setScore] = useState<number>(3);
    const [text, setText] = useState<string>('');
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
export default connect()(Detail);
