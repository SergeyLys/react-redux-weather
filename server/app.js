var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var server = app.listen(8080, ()=> {
    console.log(`Server is up and running on port 8080`)
});


// Database options

var modelSchema = mongoose.Schema({
    city: {type: String, required: true},
});

var Model = mongoose.model('Model', modelSchema);

function setupConnection() {
    mongoose.connect(`mongodb://localhost/models`);
}

function modelList() {
    return Model.find();
}

function modelCreate(data) {
    var model = new Model({
        city: data.name
    });

    return model.save();
}

function modelRemove(id) {
    return Model.findById(id).remove();
}

setupConnection();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.get('/models', (req, res)=> {
    modelList().then(data => res.send(data));
});
