import User from "../models/User.js";

export const getUser = async (req, res) => {
    
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.json(user);
        
    } catch (error) {
        res.json(error);
    }
   
}

export const getAllUser = async (req, res) => {
    
    try {
        const users = await User.find({});
        res.json(users);
        
    } catch (error) {
        res.json(error);
    }
   
}