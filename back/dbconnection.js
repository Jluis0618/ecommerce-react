import mongoose from "mongoose";

const host = '127.0.0.1'
const port = '27017'
const dbName = 'e-commerce'

mongoose.connect(`mongodb://${host}:${port}/${dbName}`);

