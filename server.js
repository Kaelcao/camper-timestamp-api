var express = require("express");
var app = express();
var path = require("path");

var timeHelper = require("./utils/timeHelper");

app.set('view engine','jade');
app.set('views', path.join(__dirname,"templates"));
app.set('port', (process.env.PORT || 5000));


app.get('/:time?', (req,res) => {
    var timeStr = req.params.time;
    if (timeStr){
        var unixTime = (+timeStr)*1000;
        var time = new Date(timeStr);
        if (unixTime){
            time = new Date(+timeStr);
        }
        
        res.json({
           unix: time.getTime(),
           natural:timeHelper.formatDate(time,"MMMM d, yyyy")
        });
    } else {
        res.render('index',{unix:new Date().getTime(),natural:timeHelper.formatDate(new Date(),"MMMM d, yyyy")});
    }
});

app.listen(app.get('port'),() => {
    console.log('App is listen at port '+app.get('port'));
});