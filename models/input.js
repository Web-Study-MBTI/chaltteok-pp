const pool = require('../modules/pool');
const table = 'input';

const input = {
    answer1 : async(num1,num2,num3,num4,num5,num6,num7) => {
        const fields = 'num1,num2,num3,num4,num5,num6,num7';
        const questions = `?,?,?,?,?,?,?`;
        const values = [num1,num2,num3,num4,num5,num6,num7];
        const query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;
    
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('input answer error: ', err.errno, err.code);
                return -1;
            }
            console.log('input answer error: ', err);
            throw err;
        }
    }
}

module.exports = input;