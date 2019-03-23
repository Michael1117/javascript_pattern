var ICKT = {
    $ : function (id) {
        return document.getElementById(id)
    },
    /*
    * id: 绑定元素的名称 string
    * type: 事件的类别  string
    * fn: 回调函数 function
    * */
    on : function (id, type, fn) {
        ICKT.$(id)['on' + type] = fn;
    },

    /*
    * id: 绑定元素的名称 string
    * html: 插入文本的内容  string
    * */
    html : function(id, html) {
        ICKT.$(id).innerHTML = html
    },
    
    css: function () {
        
    }

}