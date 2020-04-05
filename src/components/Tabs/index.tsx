import React, { useEffect } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, FireTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getMoviceData } from '../../store/actions/movice';
import './index.less';
const Tabs = (props: any) => {
    useEffect(() => {
        props.getMoviceData();
    }, []);
    return (
        <header>
            <div className="headLeft">
                <NavLink exact to="/">
                    <HomeOutlined></HomeOutlined>
                    <span className="text">首页</span>
                </NavLink>
                <NavLink to="/mine">
                    <FireTwoTone twoToneColor="#eb2f96" />
                    <span className="text">热播榜单</span>
                </NavLink>
            </div>
            <NavLink to="/profile">
                <UserOutlined />
                <span className="text">个人中心</span>
            </NavLink>
        </header>
    );
};
export default connect(state => state.movice, { getMoviceData })(withRouter(Tabs));
