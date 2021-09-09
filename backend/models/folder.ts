import mongoose, {Document} from "mongoose";

const folderSchema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true,
    },
    
    parent: {
        type: String, 
        required: true,
    },
    
    owner: {
        type: String, 
        required: false
    },

    parentList: {
        type: Array,
        required:true
    },
    personalFolder: Boolean
    
}, {
    timestamps: true
})

export interface FolderInterface extends Document {
    name: string,
    parent: string,
    owner: string|null,
    createdAt: Date,
    updatedAt: Date,
    parentList: string[],
    _doc?: any,
    personalFolder?: boolean
}

const Folder = mongoose.model<FolderInterface>("Folder", folderSchema);

export default Folder;