import express from "express";


const app = express();
const port= 3000;


app.get("/", (req, res) => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    if(dayOfWeek==="0" || dayOfWeek==="6"){
        res.render('index.ejs',{ dayofweek:"weekend", todo:"have fun!"});
    }else{
        res.render('index.ejs',{ dayofweek:"weekday", todo:"work hard!"});
    }
});

app.listen(port ,() => {
    console.log(`server running on port ${port}`);
});