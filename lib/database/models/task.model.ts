import { Schema, models, model } from "mongoose";


const taskSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    clerkId: {
        type: String
    },
    title: String,
    description: String,
    priority: String,
    isPending: {
        type: Boolean,
        default: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isOutDated: {
        type: Boolean,
        default: false
    }
})


const Task = models?.Task || model("Task", taskSchema);

export default Task;