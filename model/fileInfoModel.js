const { Schema ,ObjectId, default: mongoose} = require("mongoose")

const fileSchema = Schema ({
    fileName : {type : String ,  required:true , unique:true},
    uploadedOn : {type : Date , default:Date.now().toLocaleString()},
    uploadedBy : {type: ObjectId,ref : 'User' ,unique:true }


})

mongoose.exports = mongoose.model("files", fileSchema)