import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Carousel, Card, Divider } from 'antd';
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
const typeArr = [
    '全部',
    '动作片',
    '喜剧片',
    '爱情片',
    '科幻片',
    '恐怖片',
    '剧情片',
    '战争片',
    '动画片',
];
const timeArr = ['全部', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'];
const locationArr = [
    '全部',
    '大陆',
    '香港',
    '台湾',
    '美国',
    '法国',
    '英国',
    '日本',
    '韩国',
    '泰国',
];
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const MoviceAll = (props: Props) => {
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
                <div className="typeSelect">
                    <div className="base">
                        <span className="name">分类</span>
                        <span className="typeMovice">
                            {typeArr.map(item => (
                                <span className="typeItem">{item}</span>
                            ))}
                        </span>
                    </div>
                    <div className="base">
                        <span className="name">年代</span>
                        <span className="typeMovice">
                            {timeArr.map(item => (
                                <span className="typeItem">{item}</span>
                            ))}
                        </span>
                    </div>
                    <div className="base">
                        <span className="name">地点</span>
                        <span className="typeMovice">
                            {locationArr.map(item => (
                                <span className="typeItem">{item}</span>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="new">
                    <h2>所有电影</h2>
                    <Divider orientation="right">邓波电影网</Divider>
                    <div className="newAll">
                        {arr.map(item => (
                            <div className="newItem">
                                <Card
                                    hoverable
                                    className="newCard"
                                    cover={<img alt="example" src={item.pic} />}
                                >
                                    <Meta title={item.name} description={item.desc} />
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default connect()(MoviceAll);
