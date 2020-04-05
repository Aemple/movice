function gaugeConfig(dataItem = 88.6) {
    console.log('______', dataItem);

    const echartsData = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%',
        },
        toolbox: {
            showTitle: false,
            feature: {
                saveAsImage: {},
            },
        },
        series: [
            {
                name: '电影好评百分比',
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: dataItem, name: '电影好评度' }],
            },
        ],
    };

    return echartsData;
}

export default gaugeConfig;
