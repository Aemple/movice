import React, { PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Carousel, Card, Divider } from 'antd';
import { getMoviceData } from '../../store/actions/movice';
import './index.less';
interface Params {}
const { Meta } = Card;
const arr = [
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 1',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 2',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 3',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 4',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 5',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 6',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 7',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 8',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 9',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 10',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 11',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
    {
        pic:
            'https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c',
        name: '战狼 12',
        desc:
            '故事发生在非洲附近的大海上，主人公冷锋（吴京 饰）遭遇人生滑铁卢，被“开除军籍”，本想漂泊一生的他，正当他打算这么做的时候，一场突如其来的意外打破了他的计划，突然被卷入了一场非洲国家叛乱，本可以安全撤离，却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域，为同胞而战斗。',
    },
];
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const Home = (props: Props) => {
    useEffect(() => {
        props.getMoviceData();
    }, []);
    return (
        <div className="home">
            <div className="homeChild">
                <div className="carousel">
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
                <h3 className="huanying">欢迎来到邓波的电影推荐网站</h3>
                <div className="new">
                    <h2>最新电影</h2>
                    <Divider orientation="right">查看更多</Divider>
                    <div className="newAll">
                        {props.movice.moviceState.slice(0, 12).map(item => (
                            <div className="newItem">
                                <Link to={`/detail/${item._id}`}>
                                    <Card
                                        hoverable
                                        className="newCard"
                                        cover={<img alt="example" src={item.pic} />}
                                    >
                                        <Meta title={item.name} description={item.desc} />
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="type">
                    <h2>动 作</h2>
                    <Divider orientation="right">查看更多</Divider>
                    <div className="typeAll">
                        <div className="left">
                            <div className="swiper">
                                <Carousel autoplay>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                </Carousel>
                            </div>
                            <h4>近期热播</h4>
                            <div className="bottom">
                                <div className="topOne">
                                    <img src="https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c" />
                                </div>
                                <div className="topAll"></div>
                            </div>
                        </div>
                        <div className="right">
                            {props.movice.moviceState
                                .filter(item => item.type.includes('动作'))
                                .slice(0, 8)
                                .map(item => (
                                    <div className="rightItem">
                                        <Link to={`/detail/${item._id}`}>
                                            <Card
                                                hoverable
                                                className="rightCard"
                                                cover={<img alt="example" src={item.pic} />}
                                            >
                                                <Meta title={item.name} description={item.desc} />
                                            </Card>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="type">
                    <h2>喜 剧</h2>
                    <Divider orientation="right">查看更多</Divider>
                    <div className="typeAll">
                        <div className="left">
                            <div className="swiper">
                                <Carousel autoplay>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                </Carousel>
                            </div>
                            <h4>近期热播</h4>
                            <div className="bottom">
                                <div className="topOne">
                                    <img src="https://p0.meituan.net/movie/0355f74de087b699b85b7daa3d7881ec365712.jpg@464w_644h_1e_1c" />
                                </div>
                                <div className="topAll">
                                    <div className="topItem">
                                        <span>
                                            <span className="one other">1</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                    <div className="topItem">
                                        <span>
                                            <span className="two other">2</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                    <div className="topItem">
                                        <span>
                                            <span className="three other">3</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                    <div className="topItem">
                                        <span>
                                            <span className="other">4</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                    <div className="topItem">
                                        <span>
                                            <span className="other">5</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                    <div className="topItem">
                                        <span>
                                            <span className="other">6</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                    <div className="topItem">
                                        <span>
                                            <span className="other">7</span>
                                            <span className="text">战狼 2</span>
                                        </span>
                                        <span className="topRight">997</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            {props.movice.moviceState
                                .filter(item => item.type.includes('喜剧'))
                                .slice(0, 8)
                                .map(item => (
                                    <div className="rightItem">
                                        <Link to={`/detail/${item._id}`}>
                                            <Card
                                                hoverable
                                                className="rightCard"
                                                cover={<img alt="example" src={item.pic} />}
                                            >
                                                <Meta title={item.name} description={item.desc} />
                                            </Card>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default connect(state => state, { getMoviceData })(Home);
