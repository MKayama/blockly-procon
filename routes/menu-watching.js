var express = require('express');
var router = express.Router();

var fs = require('fs');
var server_list = JSON.parse(fs.readFileSync('./load_data/game_server_data/server_data.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu-watching', { title: 'ルーム選択' ,list:server_list});
});

module.exports = router;