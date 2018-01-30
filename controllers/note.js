// Controll for notes
// var Note = require('../models/Note');
=================
            _headlineId: data._id

//var makeDate= require('../scripts/date');

module.exports = {
    get: function (data, cb) {
        Note.find({
        }, cb);
    save: function (data, cb) {
    },
        var newNote = {
            _headlineId: data._id,
            data: makeData(),
            noteText: data.noteText
        };

        Note.create(newNote, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(doc);
                cb(doc);
            }
        });
    },
    delete: function (data, cb) {
        Note.remove({
            _id: data._id
        }, cb);
    }
};