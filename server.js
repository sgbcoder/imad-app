var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles{
    article-one : {
    title:'Article One | Shreeghanesh',
    heading:'Article One',
    date:'21 August 2017',
    content:`       <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>
                    <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>
                    <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>`
},
    article-two : {
    title:'Article Two | Shreeghanesh',
    heading:'Article One',
    date:'22 August 2017',
    content:`       <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>
                    <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>
                    <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>`
},
    article-three : {
    title:'Article One | Shreeghanesh',
    heading:'Article Three',
    date:'21 August 2017',
    content:`       <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>
                    <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>
                    <p>
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    This is the content of my Article This is the content of my Article This is the content of my Article
                    </p>`
}
};
function createTemplate(data){
    var title= data.title;
    var heading = data.heading;
    var date= data.date;
    var body=data.content;
    var htmltemplate = `<html>
    <head>
        <title>
            ARTICLE ONE | SHREEGHANESH
        </title>
        
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
            
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
                <div>
                    <p>
                        ${body}
                    </p>
                </div>
        </div>    
    </body>
    </html>
    `;
return htmltemplate;}

    app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;//to extract article name this is provided by the express framework
    res.send(createTemplate(articles[articleName]));
    });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
