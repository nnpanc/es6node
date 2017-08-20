import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String
    },
    author: {
        type: String,
        required: true,
        trim: true
        // type: Schema.ObjectId,
        // ref: 'User'
    },
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Post', PostSchema);