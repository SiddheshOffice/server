import User from "../models/User.js";

export const getUser = async (req, res) => {
    
    try {
        const {id} = req.params;
        console.log(id)
        const user = await User.findById(id);
        console.log(user)
        const {_id, name, email, password, city, state, country, occupation, phoneNumber, transactions, role} = user;
        res.json({
            _id: _id,
            name: name,
            email: email,
            password: password,
            city: city,
            state: state,
            country: country,
            occupation: occupation,
            phoneNumber: phoneNumber,
            transactions: transactions,
            role: role
        });
        
    } catch (error) {
        res.sendStatus(400).json(error);
    }
   
}