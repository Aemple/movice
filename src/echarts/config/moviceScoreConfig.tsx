function moviceScoreConfig(dataItem = 88.6) {
    const echartsData = {
        title: {
            text: '电影平均评分走势图',
            subtext: '邓波电影网',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999',
                },
            },
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true },
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['评分'],
        },
        xAxis: [
            {
                type: 'category',
                data: ['1分', '2分', '3分', '4分', '5分', '6分', '7分', '8分', '9分', '10分'],
                axisPointer: {
                    type: 'shadow',
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: '数量',
                min: 100,
                max: 3000,
                interval: 380,
                axisLabel: {
                    formatter: '{value}',
                },
            },
        ],
        series: [
            {
                name: '评分人数',
                type: 'bar',
                data: [156, 367, 578, 689, 690, 980, 1300, 2300, 900, 500],
            },
        ],
    };

    return echartsData;
}

export default moviceScoreConfig;
