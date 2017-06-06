/**
 * Created by Administrator on 2017/6/6.
 */
class DateTimeUtil{
    constructor () {
    }

    static Date2String(date, fmt){
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

        return fmt;
    }

    static String2Date(dateStr){
        var date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
        return date;
    }

    static AddSeconds(date, num){
        date.setSeconds(date.getSeconds() + num);
        return date;
    }

    static AddMinutes(date, num){
        date.setMinutes(date.getMinutes() + num);
        return date;
    }

    static AddHours(date, num){
        date.setHours(date.getHours() + num);
        return date;
    }

    static AddDays(date, num){
        date.setDate(date.getDate() + num);
        return date;
    }
}

export default DateTimeUtil;
