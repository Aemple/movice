import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { Card, Col, Row, Button } from 'antd';
import { logoutSubmit } from '../../store/actions/profile';
import './index.less';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const Profile = (props: Props) => {
    console.log(props);

    return (
        <>
            {!props.user ? <Redirect to="/login" /> : null}
            <div className="profile">
                <h1>个 人 中 心</h1>
                <div className="detail">
                    <img src={props.avatar} />
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="性 别" bordered={false}>
                                {props.gender
                                    ? `我是一个小${props.gender}孩`
                                    : '您还没有填写信息哦'}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="年 龄" bordered={false}>
                                {props.age ? `我今年 ${props.age} 岁` : '您还没有填写信息哦'}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="联 系 方 式" bordered={false}>
                                {props.phone ? `${props.phone}` : '您还没有填写信息哦'}
                            </Card>
                        </Col>
                    </Row>
                    <div className="line"></div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="毕业/就读学校" bordered={false}>
                                {props.school ? `${props.school}` : '您还没有填写信息哦'}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="喜欢的电影类型" bordered={false}>
                                {props.love.length > 0
                                    ? `${props.love.join('、')}`
                                    : '您还没有填写信息哦'}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="联系地址" bordered={false}>
                                {props.location ? `${props.location}` : '您还没有填写信息哦'}
                            </Card>
                        </Col>
                    </Row>
                    <div className="line"></div>
                    <Card title="联系地址" bordered={false}>
                        {props.desc ? `${props.desc}` : '您还没有填写信息哦'}
                    </Card>
                    <div className="line"></div>
                    <div className="button">
                        <Button
                            type="primary"
                            onClick={() => {
                                props.history.push('/setInfo');
                            }}
                        >
                            编辑资料
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => {
                                props.logoutSubmit();
                                props.history.push('/login');
                            }}
                        >
                            退出登陆
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default connect(state => state.profile, { logoutSubmit })(Profile);
