const Course = require('../models/Course');
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose');
class NewsController {
    // [GET] / 
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);          
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController;
