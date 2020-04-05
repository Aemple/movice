import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Card, Input, Radio, Select, Button } from 'antd';
import { update } from '../../store/actions/profile';
const { Option } = Select;
const { TextArea } = Input;
import './index.less';
interface Props {}
interface State {}
class SetInfo extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            desc: '',
            location: '',
            school: '',
            avatar: '',
            love: ['战争', '科幻'],
            phone: '',
            gender: '男',
        };
    }

    onChange(key: string, val: string | string[]) {
        this.setState({
            [key]: val,
        });
    }
    render() {
        const headData = 'boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
            .split(',')
            .map(s => {
                return {
                    avatar: require(`../../images/${s}.png`),
                    text: `${s}`,
                };
            });
        const loveStyletData = '剧情,喜剧,动作,爱情,惊悚,犯罪,悬疑,战争,科幻,动画,恐怖,家庭,传记,冒险,奇幻,武侠,历史,运动,歌舞,音乐,纪录,伦理,西部'
            .split(',')
            .map(style => {
                return <Option key={style}>{style}</Option>;
            });
        const gridHeader = this.state.avatar ? (
            <div className="chooseImg">
                <span>已选择头像: </span>
                <img style={{ width: 50, height: 50 }} src={this.state.avatar} alt="" />
            </div>
        ) : (
            '请选择头像'
        );
        return (
            <div className="setInfo">
                <h1>个人信息更改</h1>
                <div className="detail">
                    <Card title={gridHeader}>
                        {headData.map(item => {
                            return (
                                <Card.Grid className="cardItem">
                                    <div
                                        className={`cardImg test${item.text}`}
                                        onClick={() => this.onChange('avatar', item.avatar)}
                                    >
                                        <img src={item.avatar} />
                                        <span>{item.text}</span>
                                    </div>
                                </Card.Grid>
                            );
                        })}
                    </Card>
                    <div className="textAreaParent">
                        <div className="radio">
                            <div>
                                <span className="genderText">性别 : </span>
                                <Radio.Group
                                    onChange={e => this.onChange('gender', e.target.value)}
                                    value={this.state.gender}
                                >
                                    <Radio value={'男'}>男</Radio>
                                    <Radio value={'女'}>女</Radio>
                                </Radio.Group>
                            </div>
                            <div>
                                <span className="ageText">年龄 : </span>
                                <Input
                                    onChange={e => this.onChange('age', e.target.value)}
                                    placeholder="请输入年龄"
                                    className="testage"
                                />
                            </div>
                        </div>
                        <div className="love">
                            <span className="loveText">喜欢的电影类型 : </span>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                defaultValue={['战争', '科幻']}
                                onChange={value => this.onChange('love', value)}
                            >
                                {loveStyletData}
                            </Select>
                        </div>
                        <div className="textArea">
                            <span>联系方式</span>
                            <TextArea
                                onChange={e => this.onChange('phone', e.target.value)}
                                placeholder="Autosize height based on content lines"
                                autoSize
                                className="testphone"
                            />
                        </div>
                        <div className="textArea">
                            <span>毕业/就读学校</span>
                            <TextArea
                                onChange={e => this.onChange('school', e.target.value)}
                                placeholder="Autosize height based on content lines"
                                autoSize
                                className="testschool"
                            />
                        </div>
                        <div className="textArea">
                            <span>联系地址</span>
                            <TextArea
                                onChange={e => this.onChange('location', e.target.value)}
                                placeholder="Autosize height based on content lines"
                                autoSize
                                className="testlocation"
                            />
                        </div>
                        <div className="textArea">
                            <span>自我简介</span>
                            <TextArea
                                onChange={e => this.onChange('desc', e.target.value)}
                                placeholder="Autosize height based on content lines"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                                className="testdesc"
                            />
                        </div>
                        <Button
                            type="primary"
                            onClick={() => {
                                this.props.update(this.state);
                                this.props.history.push('/profile');
                            }}
                            className="testtijiao"
                        >
                            提交
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state.profile, { update })(SetInfo);
// const SetInfo = (props: Props) => {
//     const headData = 'boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
//         .split(',')
//         .map(s => {
//             return {
//                 icon: require(`../../images/${s}.png`),
//                 text: `${s}`,
//             };
//         });
//     return (
//         <div className="setInfo">
//             <h1>个人信息更改</h1>
//             <div className="detail">
//                 <Card title="Card Title">
//                     {headData.map(item => {
//                         return (
//                             <Card.Grid className="cardItem">
//                                 <div className="cardImg">
//                                     <img src={item.icon} />
//                                     <span>{item.text}</span>
//                                 </div>
//                             </Card.Grid>
//                         );
//                     })}
//                 </Card>
//             </div>
//         </div>
//     );
// };
