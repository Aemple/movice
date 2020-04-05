import { useEffect } from 'react';
import echarts from 'echarts';

function useECharts(chartRef: any, config: any) {
    let chartInstance: any = null;

    function renderChart() {
        const renderedInstance = echarts.getInstanceByDom(chartRef.current);
        if (renderedInstance) {
            chartInstance = renderedInstance;
        } else {
            chartInstance = echarts.init(chartRef.current);
        }
        chartInstance.setOption(config);

        chartInstance.on('click', function(params: any) {
            console.log('params：', params);
        });
    }

    useEffect(() => {
        console.log('config--------', config);
        renderChart();
    }, [config]);

    useEffect(() => {
        return () => {
            console.log('config');
            chartInstance && chartInstance.dispose();
        };
    }, []);

    return;
}

export default useECharts;
