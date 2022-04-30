const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

router.post('/', async(req, res)=>{
    const user = await User.create(req.body);
    console.log(user);
    return res.status(200).json({user});
});

router.get('/', async(req,res)=>{
    const users = await User.find().lean().exec();
    console.log("users in get");
    return res.status(200).json({users});
});

module.exports = router;
