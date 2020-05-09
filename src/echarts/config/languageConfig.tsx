function languageConfig(dataItem = 88.6) {
    const echartsData = {
        title: {
            text: '电影语言统计',
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
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 2386, name: '英语' },
                    { value: 732, name: '汉语普通话' },
                    { value: 647, name: '日语' },
                    { value: 532, name: '韩语' },
                    { value: 481, name: '粤语' },
                    { value: 339, name: '法语' },
                    { value: 183, name: '西班牙语' },
                    { value: 182, name: '德语' },
                    { value: 142, name: '意大利语' },
                    { value: 86, name: '俄语' },
                    { value: 78, name: '泰语' },
                    { value: 68, name: '拉丁语' },
                    { value: 65, name: '葡萄牙语' },
                    { value: 56, name: '阿拉伯语' },
                    { value: 629, name: '其他' },
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

export default languageConfig;
