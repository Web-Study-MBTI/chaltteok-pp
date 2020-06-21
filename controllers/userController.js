let User = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');
module.exports={
    //회원가입
signup : async (req, res) => {
    const {
        user_name,
        user_part   
    } = req.body;
    const user_idx = `select user_idx from user where user_name='${user_name}'`;
    // request data 확인 - 없다면 Bad Request 반환
    if (!user_name ||!user_part) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    const idx1 = await User.checkUser(user_name);
    if (idx1===true) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
    }

    const idx = await User.signup(user_name, user_part);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    const idx2 = await User.checkUserIdx(user_name);
    console.log(idx2);
    return res.redirect('/survey1');

}
}