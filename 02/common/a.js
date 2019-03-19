(function () {
    var dom = $('msg_num')
    Observer.regist('addMsg', function () {
        dom.innerHTML = ++dom.innerHTML;
    })
    Observer.regist('deleteMsg', function () {
        dom.innerHTML = --dom.innerHTML < 0 ? 0 :dom.innerHTML
    })
})()