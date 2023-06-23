import userModel from "../models/userMode.js"
import { hashPassword } from "./../helpers/authHelper.js";

export const registerController = async (req,res) => {
    try {
        const {name,email,password,phone,address} =req.body;
        // validation
        if(!name) {
        return res.send({error:'Name is Required'});
        }

        if(!email){
            return res.send({error:'Email is Required'});
        }

        if(!password){
        return res.send({error:'Password is Required'});
        }

        if(!phone){
            return res.send({error:'phone is Required'});
        }

        if(!address){
            return res.send({error:'Address is Required'});
            
        }   
            
        
        //Check User
        const existingUser = await userModel.findOne({email});

        //Existing User
        if(existingUser){
            return res.status(200).send({
                Success:true,
                message:'Already Register Please Login'
            });
        }
        //register user
        const hashedpassword = await hashPassword(password);

        //save
        const user = await new userModel({
            name,
            email,
            password: hashedpassword,
            phone,
            address
        }).save();

        res.status(201).send({
            Success:true,
            message:'User Register successfully',
            user,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            Success:false,
            message:'Error in Registration',
            error,
        });
    }
};
