import React, { PropsWithChildren, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { RouteComponentProps, Redirect } from 'react-router-dom';
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

const AdminLogin = (props: Props) => {
    const [errMsg, SeterrMsg] = useState<string>('');
    const onFinish = values => {
        if (values.user !== 'admin_test') {
            SeterrMsg('用户名或密码不正确');
        } else {
            props.login(values);
        }
    };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };
    return (
        <>
            {props.user ? <Redirect to="/profile" /> : null}
            <div className="header">管理员登陆</div>
            <Form
                {...layout}
                name="Register"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="user"
                    name="user"
                    className="testusernameadmin"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="pwd"
                    name="pwd"
                    className="testpwdadmin"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    {props.msg && <div className="errMsg">{props.msg}</div>}
                    {errMsg && <div className="errMsg">{errMsg}</div>}
                    <Button type="primary" htmlType="submit" className="testdengluadmin">
                        登陆
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default connect(state => state.profile, { login })(AdminLogin);
