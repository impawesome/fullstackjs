var express = require('express');
var router = express.Router();

router.get('/userlist', (req, res) => {
	var db = req.db;
	var collection = db.get('userlist');
	collection.find({}, {}, (e, docs) => {
		res.json(docs);
	});
});

router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
