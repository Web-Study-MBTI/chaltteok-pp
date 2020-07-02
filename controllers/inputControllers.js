const Input = require('../models/input');
const User = require('../models/user');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
module.exports={

    //survey1 점수 insert
answer1 : async (req, res) => {
    const {user_name,num1,num2,num3,num4,num5,num6,num7} = req.body;
    console.log(user_name);
    var user_idx = await User.checkUser(user_name);
    user_idx = user_idx.user_idx;
    console.log(user_idx);
    const idx = await Input.answer1(user_idx,num1,num2,num3,num4,num5,num6,num7);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    return res.redirect('/survey2');
},
answer2 : async (req, res) => {
    const {user_name,num8,num9,num10,num11,num12,num13,num14} = req.body;
    console.log(user_name);
    var user_idx = await User.checkUser(user_name);
    user_idx = user_idx.user_idx;
    console.log(user_idx);
    const idx = await Input.answer2(user_idx,num8,num9,num10,num11,num12,num13,num14);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    return res.redirect('/survey3');
},
answer3 : async (req, res) => {
    const {user_name,num15,num16,num17,num18,num19,num20,num21} = req.body;
    console.log(user_name);
    var user_idx = await User.checkUser(user_name);
    user_idx = user_idx.user_idx;
    console.log(user_idx);
    const idx = await Input.answer3(user_idx,num15,num16,num17,num18,num19,num20,num21);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    return res.redirect('/survey4');
},
answer4 : async (req, res) => {
    const {user_name,num22,num23,num24,num25,num26,num27,num28} = req.body;
    console.log(user_name);
    var user_idx = await User.checkUser(user_name);
    user_idx = user_idx.user_idx;
    console.log(user_idx);
    const idx = await Input.answer4(user_idx,num22,num23,num24,num25,num26,num27,num28);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    res.render("result",idx); //여기안됨
}
}
