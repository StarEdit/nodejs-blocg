const Course = require('../models/Course');

class NewsController {
    // [GET] / 
    index(req, res) {
        Course.find({}, function (err, courses) {
            if(!err){
                res.json(courses);
            }else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });          
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController;
