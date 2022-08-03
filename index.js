var express = require('express');
var app = express();

var today = () => {
    var date = new Date();
    return date.toLocaleString('en-US')
};

var formatDate = (date) => {
    var template = `<h2 style="color:red">${date.toLocaleString('en-US')}</h2>`;
    return template
};

var hbs = require('express-handlebars');

app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialDir: __dirname + '/views/partials',
    helpers: {
        today: today,
        formatDate: formatDate
    }
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.locals.date = '07/30/2018';
    res.render('index');
});

/* app.get('/test', (req, res) => {
    // res.locals. name = "John";  // --> sử dụng biến toàn cục local
    // res.locals.location = "Canada";
    var context = {
        name: '<b>Mary</b>',
        location: '<span style="color: blue">Chicago</span>',
        user: {
            isLogin: false,
            adress: {
                city: 'HCM',
                street: '227 Nguyen Van Cu'
            }
        }, 
        languages: ['VietNamese', 'English', 'Japanese'],
        links: [
            {
                title: 'Home',
                url: '/'
            },
            {
                title: 'Products',
                url: '/products'
            }
        ]
    };
    res.render('index', context);
}); */

app.listen(5000, function(){
    console.log('Server is listening in port 5000...');
});