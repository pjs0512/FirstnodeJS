var express = require('express');
var path = require('path');

var app = express();

app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // public 을 사용하겠다.

app.get('/',function (req,res) {
    res.render('my_first_ejs');
});
app.listen(3000,function () { // 서버 실행

    console.log('Server On!'); // 서버 실행시 보내는 메세지

});