const pool = require('../modules/pool');
const table = 'type';

const type = {
    readResult: async (type_idx) => {
        const query = `SELECT * FROM ${table} WHERE type_idx = ${type_idx}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
    },

    matchPeople : async (type_idx) => {
        const query = `SELECT user_name, user_part FROM user WHERE type_idx = ${type_idx}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
    }
}

module.exports = type;