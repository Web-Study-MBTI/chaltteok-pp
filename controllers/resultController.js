let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let Type = require('../models/type');

exports.readResult = async (req,res)=>{
    const type_idx = req.params.type_idx;

    try{
        const type = await Type.readResult(type_idx);
        const matchPP = await Type.matchPeople(type[0].type_partner);
        return res.status(statusCode.OK).send(res.render("result",{data: type[0], matchPP: matchPP}));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};

exports.readDetail = async (req,res)=>{
    const type_idx = req.params.type_idx;

    try{
        const type = await Type.readResult(type_idx);
        return res.status(statusCode.OK).send(res.render("detail",{data: type[0]}));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};