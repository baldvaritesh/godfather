var path = require('path')
var express = require('express'),
app = express();


app.use(express.static(path.join(__dirname, '/build/')));
//app.use(handleRouting);


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))