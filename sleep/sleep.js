/**
 * Created by Administrator on 2017/5/26.
 */
function sleepDataOneDay(date, gg_deep, gg_shallow, zdt_deep, zdt_shallow)
{
    var chart_day_bar = echarts.init(document.getElementById('gzt_sleep_one_day_bar'));

    option_day_bar = {
        title : {
            text: '当日睡眠',
            subtext:date
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + (params[1].value + params[0].value).toFixed(2) + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value).toFixed(2);
            }
        },
        legend: {
            selectedMode:false,
            data:['总睡眠', '浅睡眠']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['GG','ZDT']
            }
        ],
        yAxis : [
            {
                type : 'value',
                boundaryGap: [0, 0.05]
            }
        ],
        series : [
            {
                name:'总睡眠',
                type:'bar',
                stack: 'sum',
                barCategoryGap: '60%',
                itemStyle: {
                    normal: {
                        color: 'tomato',
                        barBorderColor: 'tomato',
                        barBorderWidth: 2,
                        barBorderRadius:0,
                        label : {
                            show: true, position: 'insideTop',
                            formatter: function (params) {
                                for (var i = 0, l = option_day_bar.xAxis[0].data.length; i < l; i++) {
                                    if (option_day_bar.xAxis[0].data[i] == params.name) {
                                        return (option_day_bar.series[0].data[i]).toFixed(2);
                                    }
                                }
                            },
                        }
                    }
                },
                data:[gg_deep, zdt_deep]
            },
            {
                name:'浅睡眠',
                type:'bar',
                stack: 'sum',
                itemStyle: {
                    normal: {
                        color: '#fff',
                        barBorderColor: 'tomato',
                        barBorderWidth: 6,
                        barBorderRadius:0,
                        label : {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'tomato'
                            },
                            formatter: function (params) {
                                for (var i = 0, l = option_day_bar.xAxis[0].data.length; i < l; i++) {
                                    if (option_day_bar.xAxis[0].data[i] == params.name) {
                                        return (option_day_bar.series[0].data[i] + params.value).toFixed(2);
                                    }
                                }
                            },
                        }
                    }
                },
                data:[gg_shallow, zdt_shallow]
            }
        ]
    };
    // 为echarts对象加载数据
    chart_day_bar.setOption(option_day_bar);

    var chart_day_pie = echarts.init(document.getElementById('gzt_sleep_one_day_pie'));

    // 指定图表的配置项和数据
    var option_day_pie = {
        title : {
            text: '当日睡眠',
            subtext: date,
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : ({d}%)",
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 600
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'睡眠数据',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:gg_shallow, name:'GG浅睡眠'},
                    {value:gg_deep, name:'GG深睡眠'},
                    {value:zdt_deep, name:'ZD深睡眠'},
                    {value:zdt_shallow, name:'ZDT浅睡眠'},
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart_day_pie.setOption(option_day_pie);

    var chart_day_line = echarts.init(document.getElementById('gzt_sleep_one_day_line'));

    option_day_line = {
        title: {
            text: '当日睡眠',
            subtext: date
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                // for text color
                var res = '<strong>' + params[0].name + '</strong>'
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + params[i].value.toFixed(2)
                }
                res += '</div>';
                return res;
            }
        },
        legend: {
            x: 'right',
            data:['GG','ZDT']
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        grid: {
            y: 50,
            y2: 25,
            x2: 6
        },
        xAxis: [
            {
                type: 'category',
                data: ['总睡眠', '深睡眠']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'GG',
                type: 'bar',
                data: [gg_deep + gg_shallow, gg_deep]
            },
            {
                name: 'ZDT',
                type: 'bar',
                data: [zdt_deep + zdt_shallow, zdt_deep]
            }
        ]
    };

            // 为echarts对象加载数据
    chart_day_line.setOption(option_day_line);
}

function sleepDataOneWeek(date, gg_deep, gg_shallow, zdt_deep, zdt_shallow)
{
    var chart_week_bar = echarts.init(document.getElementById('gzt_sleep_one_week_bar'));

    option_week_bar = {
        title : {
            text: '当周睡眠',
            subtext:date
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + (params[1].value + params[0].value).toFixed(2) + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value).toFixed(2);
            }
        },
        legend: {
            selectedMode:false,
            data:['总睡眠', '浅睡眠']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['GG','ZDT']
            }
        ],
        yAxis : [
            {
                type : 'value',
                boundaryGap: [0, 0.05]
            }
        ],
        series : [
            {
                name:'总睡眠',
                type:'bar',
                stack: 'sum',
                barCategoryGap: '60%',
                itemStyle: {
                    normal: {
                        color: 'tomato',
                        barBorderColor: 'tomato',
                        barBorderWidth: 2,
                        barBorderRadius:0,
                        label : {
                            show: true,
                            position: 'insideTop',
                            formatter: function (params) {
                                for (var i = 0, l = option_week_bar.xAxis[0].data.length; i < l; i++) {
                                    if (option_week_bar.xAxis[0].data[i] == params.name) {
                                        return (params.value).toFixed(2);
                                    }
                                }
                            },
                        }
                    }
                },
                data:[gg_deep, zdt_deep]
            },
            {
                name:'浅睡眠',
                type:'bar',
                stack: 'sum',
                itemStyle: {
                    normal: {
                        color: '#fff',
                        barBorderColor: 'tomato',
                        barBorderWidth: 6,
                        barBorderRadius:0,
                        label : {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'tomato'
                            },
                            formatter: function (params) {
                                for (var i = 0, l = option_week_bar.xAxis[0].data.length; i < l; i++) {
                                    if (option_week_bar.xAxis[0].data[i] == params.name) {
                                        return (option_week_bar.series[0].data[i] + params.value).toFixed(2);
                                    }
                                }
                            },
                        }
                    }
                },
                data:[gg_shallow, zdt_shallow]
            }
        ]
    };
    // 为echarts对象加载数据
    chart_week_bar.setOption(option_week_bar);

    var chart_week_pie = echarts.init(document.getElementById('gzt_sleep_one_week_pie'));

    // 指定图表的配置项和数据
    var option_week_pie = {
        title : {
            text: '当周睡眠',
            subtext: date,
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : ({d}%)",
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 600
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'睡眠数据',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:gg_shallow, name:'GG浅睡眠'},
                    {value:gg_deep, name:'GG深睡眠'},
                    {value:zdt_deep, name:'ZD深睡眠'},
                    {value:zdt_shallow, name:'ZDT浅睡眠'},
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart_week_pie.setOption(option_week_pie);

    var chart_week_line = echarts.init(document.getElementById('gzt_sleep_one_week_line'));

    option_week_line = {
        title: {
            text: '当周睡眠',
            subtext: date
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                // for text color
                var res = '<strong>' + params[0].name + '</strong>'
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + params[i].value.toFixed(2)
                }
                res += '</div>';
                return res;
            }
        },
        legend: {
            x: 'right',
            data:['GG','ZDT']
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        grid: {
            y: 50,
            y2: 25,
            x2: 6
        },
        xAxis: [
            {
                type: 'category',
                data: ['总睡眠', '深睡眠']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'GG',
                type: 'bar',
                data: [gg_deep + gg_shallow, gg_deep]
            },
            {
                name: 'ZDT',
                type: 'bar',
                data: [zdt_deep + zdt_shallow, zdt_deep]
            }
        ]
    };

    // 为echarts对象加载数据
    chart_week_line.setOption(option_week_line);
}

function sleepDataOneMonth(date, gg_deep, gg_shallow, zdt_deep, zdt_shallow)
{
    var chart_month_bar = echarts.init(document.getElementById('gzt_sleep_one_month_bar'));

    option_month_bar = {
        title : {
            text: '当月睡眠',
            subtext:date
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + (params[1].value + params[0].value).toFixed(2) + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value).toFixed(2);
            }
        },
        legend: {
            selectedMode:false,
            data:['总睡眠', '浅睡眠']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['GG','ZDT']
            }
        ],
        yAxis : [
            {
                type : 'value',
                boundaryGap: [0, 0.05]
            }
        ],
        series : [
            {
                name:'总睡眠',
                type:'bar',
                stack: 'sum',
                barCategoryGap: '60%',
                itemStyle: {
                    normal: {
                        color: 'tomato',
                        barBorderColor: 'tomato',
                        barBorderWidth: 2,
                        barBorderRadius:0,
                        label : {
                            show: true,
                            position: 'insideTop',
                            formatter: function (params) {
                                for (var i = 0, l = option_month_bar.xAxis[0].data.length; i < l; i++) {
                                    if (option_month_bar.xAxis[0].data[i] == params.name) {
                                        return (params.value).toFixed(2);
                                    }
                                }
                            },
                        }
                    }
                },
                data:[gg_deep, zdt_deep]
            },
            {
                name:'浅睡眠',
                type:'bar',
                stack: 'sum',
                itemStyle: {
                    normal: {
                        color: '#fff',
                        barBorderColor: 'tomato',
                        barBorderWidth: 6,
                        barBorderRadius:0,
                        label : {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'tomato'
                            },
                            formatter: function (params) {
                                for (var i = 0, l = option_month_bar.xAxis[0].data.length; i < l; i++) {
                                    if (option_month_bar.xAxis[0].data[i] == params.name) {
                                        return (option_month_bar.series[0].data[i] + params.value).toFixed(2);
                                    }
                                }
                            },
                        }
                    }
                },
                data:[gg_shallow, zdt_shallow]
            }
        ]
    };
    // 为echarts对象加载数据
    chart_month_bar.setOption(option_month_bar);

    var chart_month_pie = echarts.init(document.getElementById('gzt_sleep_one_month_pie'));

    // 指定图表的配置项和数据
    var option_month_pie = {
        title : {
            text: '当月睡眠',
            subtext: date,
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : ({d}%)",
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 600
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'睡眠数据',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:gg_shallow, name:'GG浅睡眠'},
                    {value:gg_deep, name:'GG深睡眠'},
                    {value:zdt_deep, name:'ZD深睡眠'},
                    {value:zdt_shallow, name:'ZDT浅睡眠'},
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart_month_pie.setOption(option_month_pie);

    var chart_month_line = echarts.init(document.getElementById('gzt_sleep_one_month_line'));

    option_month_line = {
        title: {
            text: '当月睡眠',
            subtext: date
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                // for text color
                var res = '<strong>' + params[0].name + '</strong>'
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + params[i].value.toFixed(2)
                }
                res += '</div>';
                return res;
            }
        },
        legend: {
            x: 'right',
            data:['GG','ZDT']
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        grid: {
            y: 50,
            y2: 25,
            x2: 6
        },
        xAxis: [
            {
                type: 'category',
                data: ['总睡眠', '深睡眠']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'GG',
                type: 'bar',
                data: [gg_deep + gg_shallow, gg_deep]
            },
            {
                name: 'ZDT',
                type: 'bar',
                data: [zdt_deep + zdt_shallow, zdt_deep]
            }
        ]
    };

    // 为echarts对象加载数据
    chart_month_line.setOption(option_month_line);
}

function sleepDataDay(date_r, gg_deep_r, gg_shallow_r, zdt_deep_r, zdt_shallow_r) {
    var echartsA = echarts.init(document.getElementById('gzt_sleep_day'));
    option = {
        title : {
            text: '每日睡眠',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + (params[0].value).toFixed(2) + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value).toFixed(2) + '<br/>'
                    + params[2].seriesName + ' : ' + (params[2].value).toFixed(2) + '<br/>'
                    + params[3].seriesName + ' : ' + (params[3].value).toFixed(2);
            }
        },
        legend: {
            data:['gg深睡','gg浅睡','zdt深睡','zdt浅睡']
        },
        dataZoom : {
            show : true,
            realtime : true,
            start : 80,
            end : 100
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
        title : {
            text: '每周睡眠',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + (params[0].value).toFixed(2) + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value).toFixed(2) + '<br/>'
                    + params[2].seriesName + ' : ' + (params[2].value).toFixed(2) + '<br/>'
                    + params[3].seriesName + ' : ' + (params[3].value).toFixed(2);
            }
        },
        legend: {
            data:['gg深睡','gg浅睡','zdt深睡','zdt浅睡']
        },
        dataZoom : {
            show : true,
            realtime : true,
            start : 20,
            end : 100
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
        title : {
            text: '每月睡眠',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params){
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + (params[0].value).toFixed(2) + '<br/>'
                    + params[1].seriesName + ' : ' + (params[1].value).toFixed(2) + '<br/>'
                    + params[2].seriesName + ' : ' + (params[2].value).toFixed(2) + '<br/>'
                    + params[3].seriesName + ' : ' + (params[3].value).toFixed(2);
            }
        },
        legend: {
            data:['gg深睡','gg浅睡','zdt深睡','zdt浅睡']
        },
        dataZoom : {
            show : true,
            realtime : true,
            start : 20,
            end : 100
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

function sleepDataScatter(gg_sleep_start_r_r, gg_sleep_end_r_r, zdt_sleep_start_r_r, zdt_sleep_end_r_r){;
    //start
    var sleepStartScatter = echarts.init(document.getElementById('gzt_sleep_start_scatter'));
    sleepStartOption = {
        title : {
            text: '睡觉开始时间分布',
        },
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            formatter : function (params) {
                if (params.length > 1) {
                    var seriesName1 = params[0].seriesName;
                    var x1 = params[0].value[0];
                    var y1 = params[0].value[1];
                    var seriesName2 = params[1].seriesName;
                    var x2 = params[1].value[0];
                    var y2 = params[1].value[1];

                    var date1 = new Date(x1 * 1000).toLocaleString().substr(0,10);
                    var date2 = new Date(x2 * 1000).toLocaleString().substr(0,10);

                    var hour1 = Math.floor(y1 / 60);
                    if(hour1 >= 24){
                        hour1 -= 24;
                    }
                    var minute1 = y1 % 60;
                    var time1 = hour1 + ":" + minute1;

                    var hour2 = Math.floor(y2 / 60);
                    if(hour2 >= 24){
                        hour2 -= 24;
                    }
                    var minute2 = y2 % 60;
                    var time2 = hour2 + ":" + minute2;

                    return  seriesName1 + ' :<br>' + date1 + " " + time1 + "<br>" +
                    seriesName2 + ' :<br>' + date2 + " " + time2;
                }
                else {
                    var seriesName1 = params[0].seriesName;
                    var x1 = params[0].value[0];
                    var y1 = params[0].value[1];

                    var date1 = new Date(x1 * 1000).toLocaleString().substr(0,10);

                    var hour1 = Math.floor(y1 / 60);
                    if(hour1 >= 24){
                        hour1 -= 24;
                    }
                    var minute1 = y1 % 60;
                    var time1 = hour1 + ":" + minute1;

                    return  seriesName1 + ' :<br>' + date1 + " " + time1;
                }
            },
            axisPointer:{
                show: true,
                type : 'none',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }
        },
        legend: {
            data:['GG','ZDT']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataZoom : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter:  function(v) {
                        var date = new Date(v * 1000).toLocaleString().substr(0,10);
                        return date;
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter:  function(v) {
                        var hour = Math.floor(v / 60);
                        if(hour >= 24){
                            hour -= 24;
                        }
                        var minute = v % 60;
                        return (hour + ":" + minute);
                    }
                }
            }
        ],
        series : [
            {
                name:'GG',
                type:'scatter',
                data: gg_sleep_start_r_r,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'ZDT',
                type:'scatter',
                data: zdt_sleep_start_r_r,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    sleepStartScatter.setOption(sleepStartOption);

    //end
    var sleepEndScatter = echarts.init(document.getElementById('gzt_sleep_end_scatter'));
    sleepEndOption = {
        title : {
            text: '睡觉结束时间分布',
        },
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            formatter : function (params) {
                if (params.length > 1) {
                    var seriesName1 = params[0].seriesName;
                    var x1 = params[0].value[0];
                    var y1 = params[0].value[1];
                    var seriesName2 = params[1].seriesName;
                    var x2 = params[1].value[0];
                    var y2 = params[1].value[1];

                    var date1 = new Date(x1 * 1000).toLocaleString().substr(0,10);
                    var date2 = new Date(x2 * 1000).toLocaleString().substr(0,10);

                    var hour1 = Math.floor(y1 / 60);
                    if(hour1 >= 24){
                        hour1 -= 24;
                    }
                    var minute1 = y1 % 60;
                    var time1 = hour1 + ":" + minute1;

                    var hour2 = Math.floor(y2 / 60);
                    if(hour2 >= 24){
                        hour2 -= 24;
                    }
                    var minute2 = y2 % 60;
                    var time2 = hour2 + ":" + minute2;

                    return  seriesName1 + ' :<br>' + date1 + " " + time1 + "<br>" +
                        seriesName2 + ' :<br>' + date2 + " " + time2;
                }
                else {
                    var seriesName1 = params[0].seriesName;
                    var x1 = params[0].value[0];
                    var y1 = params[0].value[1];

                    var date1 = new Date(x1 * 1000).toLocaleString().substr(0,10);

                    var hour1 = Math.floor(y1 / 60);
                    if(hour1 >= 24){
                        hour1 -= 24;
                    }
                    var minute1 = y1 % 60;
                    var time1 = hour1 + ":" + minute1;

                    return  seriesName1 + ' :<br>' + date1 + " " + time1;
                }
            },
            axisPointer:{
                show: true,
                type : 'none',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }
        },
        legend: {
            data:['GG','ZDT']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataZoom : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter:  function(v) {
                        var date = new Date(v * 1000).toLocaleString().substr(0,10);
                        return date;
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter:  function(v) {
                        var hour = Math.floor(v / 60);
                        if(hour >= 24){
                            hour -= 24;
                        }
                        var minute = v % 60;
                        return (hour + ":" + minute);
                    }
                }
            }
        ],
        series : [
            {
                name:'GG',
                type:'scatter',
                data: gg_sleep_end_r_r,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'ZDT',
                type:'scatter',
                data: zdt_sleep_end_r_r,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    sleepEndScatter.setOption(sleepEndOption);
}