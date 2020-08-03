const User = require('../models/user');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');

module.exports={
    //회원가입
signup : async (req, res) => {
    const {  
        user_name,
        user_part
    } = req.body;
    // request data 확인 - 없다면 Bad Request 반환
    if (!user_name || !user_part) {
        // res.status(statusCode.BAD_REQUEST)
        //     .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        res.send('<script type="text/javascript">alert("파트(직업) 또는 닉네임을 입력해주세요.");location.href="./user";</script>');
        return;
    }
    //already ID
    const idx1 = await User.checkUser(user_name);
    if (idx1 > 0) {
        res.send('<script type="text/javascript">alert("이미 존재하는 닉네임입니다.");location.href="./user";</script>');
        return;
    } 
    if (idx1 == 0) {
    const idx = await User.signup(user_name,user_part);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
}

    res.redirect("/survey1");
}
}