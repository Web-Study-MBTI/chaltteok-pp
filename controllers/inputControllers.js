const Input = require('../models/input');
let User = require('../models/user');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const table = 'user'
module.exports={

    //survey1 점수 insert
answer1 : async (req, res) => {
    const {user_name,num1,num2,num3,num4,num5,num6,num7} = req.body;
    const user_idx = await User.checkUserIdx(user_name);
    console.log(user_name);
    console.log(user_idx,num1,num2,num3,num4,num5,num6,num7); 
    const idx = await Input.answer1(user_idx,num1,num2,num3,num4,num5,num6,num7);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    return res.redirect('/survey2');
},

    //survey2 점수 insert
    answer2 : async (req, res) => {
        const {user_name,num8,num9,num10,num11,num12,num13,num14} = req.body;
        const user_idx = await User.checkUserIdx(user_name);
        console.log(user_idx,num8,num9,num10,num11,num12,num13,num14); 
        const idx = await Input.answer2(user_idx,num8,num9,num10,num11,num12,num13,num14);
        if (idx === -1) {
            return res.status(statusCode.DB_ERROR)
                .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
        }
        return res.redirect('/survey3');
    },
        //survey3 점수 insert
answer3 : async (req, res) => {
    const {user_name,num15,num16,num17,num18,num19,num20,num21} = req.body;
    const user_idx = await User.checkUserIdx(user_name);
    console.log(user_idx,num15,num16,num17,num18,num19,num20,num21); 
    const idx = await Input.answer3(user_idx,num15,num16,num17,num18,num19,num20,num21);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    return res.redirect('/survey4');
},

    //survey4 점수 insert
    answer4 : async (req, res) => {
        const {user_name,num22,num23,num24,num25,num26,num27,num28} = req.body;
        const user_idx = await User.checkUserIdx(user_name);
        console.log(user_idx,num22,num23,num24,num25,num26,num27,num28); 
        const idx = await Input.answer4(user_idx,num22,num23,num24,num25,num26,num27,num28);
        console.log(idx);
        if (idx === -1) {
            return res.status(statusCode.DB_ERROR)
                .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
        }
        
        return res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POSTING_SUCCESS, {type: idx}));
    }
        
}
