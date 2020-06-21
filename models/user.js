const pool = require('../modules/pool');
const table = 'user';

const user = {
    signup : async(user_name, user_part) => {
        const fields = 'user_name, user_part';
        const questions = `?,?`;
        const values = [user_name, user_part];
        const query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;
    
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            console.log(insertId);
            // return insertId;
            if(insertId){
                const query2 = `SELECT * FROM ${table} where user_idx="${insertId}"`;
                const result2 = await pool.queryParamArr(query2);
                console.log(result2[0].user_name);
                console.log(result2[0].user_idx);
                console.log("호출됨");
                if (insertId === result2[0].user_idx){
                    return result2[0].user_idx;
                }
            }
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup error: ', err.errno, err.code);
                return -1;
            }
            console.log('signup error: ', err);
            throw err;
        }
    },
    checkUser : async(user_name) => {
        const query = `SELECT * FROM ${table} where user_name="${user_name}"`;
        try {
            const result = await pool.queryParamArr(query);

            if (result.length>0){
                return true;
            } else{
                return false;
            }

        } catch (err) {
            console.log('checkUser error: ', err);
            throw err;
        }
    },
    checkUserIdx : async(user_name) => {
        const query = `SELECT * FROM ${table} where user_name="${user_name}"`;
        try {
            const result = await pool.queryParamArr(query);

            return result[0].user_idx;

        } catch (err) {
            console.log('checkUser error: ', err);
            throw err;
        }
    }
}

module.exports = user;