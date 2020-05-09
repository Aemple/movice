function countContryConfig(dataItem = 88.6) {
    const echartsData = {
        title: {
            text: '近六年TOP4国家电影增速',
            subtext: '邓波电影网',
            left: 'left',
        },
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false,
        },
        dataset: {
            source: [
                ['product', '2015', '2016', '2017', '2018', '2019', '2020'],
                ['美 国', 687, 876, 1067, 1489, 1659, 1891],
                ['中 国', 496, 686, 723, 885, 965, 1162],
                ['日 本', 498, 510, 542, 563, 636, 687],
                ['韩 国', 369, 408, 436, 496, 510, 527],
            ],
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)',
                },
                encode: {
                    itemName: 'product',
                    value: '2015',
                    tooltip: '2015',
                },
            },
        ],
    };

    return echartsData;
}

export default countContryConfig;
