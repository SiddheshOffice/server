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

