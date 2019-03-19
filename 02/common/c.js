// c工程师 发布消息的数据接口

/*
* data.msg: 文本框的内容
*
* */

(function () {
    var btn = $('msg_submit');
    var text = $('msg_text');

    // 为button绑定click 事件
    btn.onclick = function () {
        var value = text.value;
        if(/^\s*$/.test(value)) {
            console.log('请输入内容');
        }
        Observer.fire('addMsg', {
            msg: value
        })

        text.value = ''
        //console.log(value);
    }
    // 判断text 的内容是否为空 为空的话 提示并返回

    // 发布添加信息消息
    // 将text 的内容清空

})()