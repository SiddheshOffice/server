import User from "../models/User.js";

export const getUser = async (req, res) => {
    
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.send(200).json(user);
        
    } catch (error) {
        res.send(400).json(error);
    }
   
}