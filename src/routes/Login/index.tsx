import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { RouteComponentProps, Redirect, Link } from 'react-router-dom';
import { login } from '../../store/actions/profile';
import './index.less';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

const Login = (props: Props) => {
    const onFinish = values => {
        props.login(values);
    };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };
    return (
        <>
            {props.user ? <Redirect to="/profile" /> : null}
            <div className="header">登 录</div>
            <Form
                {...layout}
                name="Register"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="user"
                    name="user"
                    className="testusername"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="pwd"
                    name="pwd"
                    className="testpwd"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <div className="other">
                        <Link to="/adminlogin">管理员登录</Link>
                        <Link to="/register">去注册 >></Link>
                    </div>
                    {props.msg && <div className="errMsg">{props.msg}</div>}
                    <Button type="primary" htmlType="submit" className="testdenglu">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default connect(state => state.profile, { login })(Login);
