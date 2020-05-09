function moviceTypeConfig(dataItem = 88.6) {
    const echartsData = {
        title: {
            text: '电影类型统计',
            subtext: '邓波电影网',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        // },
        series: [
            {
                name: '电影数量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 2376, name: '剧情' },
                    { value: 1245, name: '喜剧' },
                    { value: 1112, name: '动作' },
                    { value: 1025, name: '爱情' },
                    { value: 1018, name: '惊悚' },
                    { value: 668, name: '犯罪' },
                    { value: 636, name: '悬疑' },
                    { value: 786, name: '战争' },
                    { value: 1112, name: '科幻' },
                    { value: 1548, name: '动画' },
                    { value: 689, name: '恐怖' },
                    { value: 310, name: '历史' },
                    { value: 234, name: '音乐' },
                    { value: 135, name: '伦理' },
                    { value: 876, name: '记录' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };

    return echartsData;
}

export default moviceTypeConfig;
