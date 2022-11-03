const mongoose= require('mongoose')

const StorageSchema= mongoose.Schema({

    Url:{
        type:String
    },

    filenime:{
        type:String
    }
    },

    {
     timestamps:true,
     versionkey:false
    }

);

module.exports = mongoose.model('storege',StorageSchema)