import mongoose from "mongoose";
const schema=new mongoose.Schema({
    task:{type:String}
})
export default mongoose.model.Task||mongoose.model("task",schema)