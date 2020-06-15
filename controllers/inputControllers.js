const Input = require('../models/input');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
module.exports={

    //survey1 점수 insert
answer1 : async (req, res) => {
    const {num1,num2,num3,num4,num5,num6,num7} = req.body;
    console.log(num1,num2,num3,num4,num5,num6,num7); // num1 = req.nSum1; 와 num1 = req.body.num1; -> undefined로 나옴
    // console.log(num1,num2,num3,num4,num5,num6,num7)
    // const idx = await Input.answer1(num1,num2,num3,num4,num5,num6,num7);
    // if (idx === -1) {
    //     return res.status(statusCode.DB_ERROR)
    //         .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    // }
    return res.redirect('/survey2');
}
}
