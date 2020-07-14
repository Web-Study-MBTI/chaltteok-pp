const pool = require('../modules/pool');
const table = 'user';

const user = {
    signup : async(user_name,user_part) => {
        const fields = 'user_name,user_part';
        const questions = `?,?`;
        const values = [user_name,user_part];
        const query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;
    
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup error: ', err.errno, err.code);
                return -1;
            }
            console.log('signup error: ', err);
            throw err;
        }
    },
    checkUser : async (user_name) => {
        const query = `SELECT user_idx FROM ${table} where user_name="${user_name}"`;
        try {
            const result = await pool.queryParamArr(query);
            console.log(result[0])
            if (result[0] !== undefined){
            return result[0];
            }
            else{
                return 0
            }

        } catch (err) {
            console.log('checkUser error: ', err);
            throw err;
        }
    }
}

module.exports = user;