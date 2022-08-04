import mongoose, { Document, Schema } from 'mongoose';

// You can edit name of Schema Variable up to your project. 
const DataSchema: Schema = new Schema({

});

// You can edit type "any" to be the type of your schema.
export default mongoose.model<any>('Data', DataSchema);