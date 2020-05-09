import React, { PropsWithChildren, useRef } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import echarts from 'echarts';
import world from 'echarts/map/json/world.json';
import useDemo from '../../echarts/useDemo';
import useDemod from '../../echarts/useDemod';
import worldConfig from '../../echarts/config/worldConfig';
import languageConfig from '../../echarts/config/languageConfig';
import countContryConfig from '../../echarts/config/countContryConfig';
import moviceTypeConfig from '../../echarts/config/moviceTypeConfig';
import moviceScoreConfig from '../../echarts/config/moviceScoreConfig';
import './index.less';

echarts.registerMap('world', world); /* 注册world地图 */

interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const DataCenter = (props: Props) => {
    const chartWorldRef = useRef(null);
    const chartTypedRef = useRef(null);
    const chartLanuageRef = useRef(null);
    const chartCountRef = useRef(null);
    const chartScoreRef = useRef(null);
    useDemo(chartWorldRef, worldConfig());
    useDemo(chartTypedRef, moviceTypeConfig());
    useDemod(chartCountRef, countContryConfig());
    useDemo(chartLanuageRef, languageConfig());
    useDemo(chartScoreRef, moviceScoreConfig());
    return (
        <div>
            <h2 className="title">数据中心</h2>
            <div className="top">
                <div
                    style={{
                        width: '46%',
                        height: '300px',
                        margin: '30px',
                        display: 'inline-block',
                    }}
                    ref={chartTypedRef}
                ></div>
                <div
                    style={{
                        width: '46%',
                        height: '300px',
                        margin: '30px',
                        display: 'inline-block',
                    }}
                    ref={chartLanuageRef}
                ></div>
            </div>
            <div
                style={{ width: '80%', height: '460px', margin: '20px auto' }}
                ref={chartWorldRef}
            />
            <div
                style={{ width: '80%', height: '460px', margin: '50px auto' }}
                ref={chartCountRef}
            ></div>
            <div
                style={{ width: '80%', height: '430px', margin: '0 auto' }}
                ref={chartScoreRef}
            ></div>
        </div>
    );
};
export default connect()(DataCenter);
