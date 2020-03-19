import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Carousel } from 'antd';
import './index.less';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const Home = (props: Props) => {
    return (
        <div>
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
        </div>
    );
};
export default connect()(Home);
