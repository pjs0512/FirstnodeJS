var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGO_DB);

var db = mongoose.connection;

db.once("open",function () {
    console.log("DB connected!!");
});
db.on("error",function (err) {
    console.log("DB ERROR :",err);
});

var dataSchema = mongoose.Schema({
    name:String,
    count:Number
});

var Data = mongoose.model('data', dataSchema);


app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // public 을 사용하겠다.

app.get('/',function (req,res) {
    res.render('my_first_ejs');
});
app.listen(3000,function () { // 서버 실행

    console.log('Server On!'); // 서버 실행시 보내는 메세지

});