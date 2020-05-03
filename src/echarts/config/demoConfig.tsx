function demoConfig(dataItem = 0.3) {
    console.log('______', dataItem);

    const echartsData = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['10岁-20岁', '20岁-30岁', '30岁-40岁', '40岁-50岁', '50岁以上'],
        },
        series: [
            {
                name: '评价来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 30,
                            fontWeight: 'bold',
                        },
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    { value: 300 * dataItem, name: '10岁-20岁' },
                    { value: 310, name: '20岁-30岁' },
                    { value: 234, name: '30岁-40岁' },
                    { value: 135, name: '40岁-50岁' },
                    { value: 1548, name: '50岁以上' },
                ],
            },
        ],
    };

    return echartsData;
}

export default demoConfig;
