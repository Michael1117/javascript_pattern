var Student = function (name, answer) {
    this.name = name;
    this.answer = answer;

    // 学生回答问题的一个私有方法
    var that = this
    that.replay = function () {
        console.log(that.name + that.answer);
        //this.
    }
}

Student.prototype.listen = function (question) {
    // 学生是一个订阅者 因此调用 regist
    Observer.regist(question, this.replay)
}

Student.prototype.sleep = function (question) {
    Observer.remove(question, this.replay)
}