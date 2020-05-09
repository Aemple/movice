import React, { useEffect } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, VideoCameraTwoTone, ProjectTwoTone } from '@ant-design/icons';
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
                <NavLink to="/moviceall">
                    <VideoCameraTwoTone twoToneColor="#eb2f96" />
                    <span className="text">电影片库</span>
                </NavLink>
                <NavLink to="/datacenter">
                    <ProjectTwoTone twoToneColor="#1890ff" />
                    <span className="text">数据中心</span>
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
