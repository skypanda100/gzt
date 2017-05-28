/**
 * Created by Administrator on 2017/5/26.
 */

function sleepDataDay(date_r, gg_deep_r, gg_shallow_r, zdt_deep_r, zdt_shallow_r) {
    var echartsA = echarts.init(document.getElementById('gzt_sleep_day'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['gg深睡','gg浅睡','zdt深睡','zdt浅睡']
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : date_r
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'gg深睡',
                type:'bar',
                stack: 'gg',
                data:gg_deep_r
            },
            {
                name:'gg浅睡',
                type:'bar',
                stack: 'gg',
                data:gg_shallow_r
            },
            {
                name:'zdt深睡',
                type:'bar',
                stack: 'zdt',
                data:zdt_deep_r
            },
            {
                name:'zdt浅睡',
                type:'bar',
                stack: 'zdt',
                data:zdt_shallow_r
            }
        ]
    };

    echartsA.setOption(option);
}

function sleepDataWeek(date_r, gg_deep_r, gg_shallow_r, zdt_deep_r, zdt_shallow_r) {
    var echartsA = echarts.init(document.getElementById('gzt_sleep_week'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['gg深睡','gg浅睡','zdt深睡','zdt浅睡']
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : date_r
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'gg深睡',
                type:'bar',
                stack: 'gg',
                data:gg_deep_r
            },
            {
                name:'gg浅睡',
                type:'bar',
                stack: 'gg',
                data:gg_shallow_r
            },
            {
                name:'zdt深睡',
                type:'bar',
                stack: 'zdt',
                data:zdt_deep_r
            },
            {
                name:'zdt浅睡',
                type:'bar',
                stack: 'zdt',
                data:zdt_shallow_r
            }
        ]
    };

    echartsA.setOption(option);
}

function sleepDataMonth(date_r, gg_deep_r, gg_shallow_r, zdt_deep_r, zdt_shallow_r) {
    var echartsA = echarts.init(document.getElementById('gzt_sleep_month'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['gg深睡','gg浅睡','zdt深睡','zdt浅睡']
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : date_r
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'gg深睡',
                type:'bar',
                stack: 'gg',
                data:gg_deep_r
            },
            {
                name:'gg浅睡',
                type:'bar',
                stack: 'gg',
                data:gg_shallow_r
            },
            {
                name:'zdt深睡',
                type:'bar',
                stack: 'zdt',
                data:zdt_deep_r
            },
            {
                name:'zdt浅睡',
                type:'bar',
                stack: 'zdt',
                data:zdt_shallow_r
            }
        ]
    };

    echartsA.setOption(option);
}