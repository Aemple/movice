import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import './index.less';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const Notfound = (props: Props) => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary">
                        <Link to="/">Back Home</Link>
                    </Button>
                }
            />
        </div>
    );
};
export default connect()(Notfound);
