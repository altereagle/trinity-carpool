var express = require('express');
var app = express();

// server the ./front_end folder files
app.use('/', express.static('./front_end'));
app.use('/modules', express.static('./node_modules'));
// serve the node_modules folder over the `/node_modules` route
app.listen(process.env.PORT, function() {
  console.log('server is online')
});
// <script type="text/javascript" src="../Js/jquery.js"></script>clear