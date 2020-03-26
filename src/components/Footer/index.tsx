import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import './inedx.less';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <h3>这里是邓波的电影评价推荐网站</h3>
            <h4>© 2020 www.dengbo.com Theme by 邓波 （川ICP备13018740号-X）</h4>
        </div>
    );
};
export default connect()(Footer);
