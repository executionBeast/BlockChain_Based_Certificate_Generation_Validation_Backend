import mongoose, { mongo } from "mongoose";

const issuerSchema = new mongoose.Schema({
    
});

const Issuer = mongoose.model("Issuer",issuerSchema);

export default Issuer;