const pool = require('../modules/pool');
const table = 'input';
const table2 = 'user';

const input = {
    answer1 : async(user_idx,num1,num2,num3,num4,num5,num6,num7) => {
        const fields = 'user_idx,num1,num2,num3,num4,num5,num6,num7';
        const questions = `?,?,?,?,?,?,?,?`;
        const values = [user_idx,num1,num2,num3,num4,num5,num6,num7];
        const query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;
    
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('input answer1 error: ', err.errno, err.code);
                return -1;
            }
            console.log('input answer1 error: ', err);
            throw err;
        }
    },
    answer2 : async(user_idx,num8,num9,num10,num11,num12,num13,num14) => {
        const fields = 'num8=?,num9=?,num10=?,num11=?,num12=?,num13=?,num14=?';
        const query = `UPDATE ${table} SET ${fields} WHERE user_idx="${user_idx}"`;
        const values = [num8,num9,num10,num11,num12,num13,num14];

        try {
            const result = await pool.queryParamArr(query,values);
            return true;

        } catch (err) {
            console.log('input answer2 error: ', err);
            throw err;
        }
    },
    answer3 : async(user_idx,num15,num16,num17,num18,num19,num20,num21) => {
        const fields = 'num15=?,num16=?,num17=?,num18=?,num19=?,num20=?,num21=?';
        const query = `UPDATE ${table} SET ${fields} WHERE user_idx="${user_idx}"`;
        const values = [num15,num16,num17,num18,num19,num20,num21];

        try {
            const result = await pool.queryParamArr(query,values);
            return true;

        } catch (err) {
            console.log('input answer3 error: ', err);
            throw err;
        }
    },
    answer4 : async(user_idx,num22,num23,num24,num25,num26,num27,num28,type) => {
        const fields = 'num22=?,num23=?,num24=?,num25=?,num26=?,num27=?,num28=?';
        const query = `UPDATE ${table} SET ${fields} WHERE user_idx="${user_idx}"`;
        const values = [num22,num23,num24,num25,num26,num27,num28];

        try {
            const result = await pool.queryParamArr(query,values);
            //여기에 유형별로 t에 맞춘 -f+t해서 합산 알고리즘 구해가지고 t>0이면 t로 t<0이면 f로
            //t=0이면..? 제발 그렇게 안됐으면 좋겠다,,,,, 0점은 최대한 눌러주지 마세여~!~!!
            const f=`SELECT num1,num9,num17,num25 FROM ${table} WHERE user_idx="${user_idx}"`;
            const fresult = await pool.queryParamArr(f);
            const fscore=(fresult[0]['num1']+fresult[0]['num9']+fresult[0]['num17']+fresult[0]['num25']);
            const t=`SELECT num5,num13,num21 FROM ${table} WHERE user_idx="${user_idx}"`;
            const tresult = await pool.queryParamArr(t);
            const tscore=(tresult[0]['num5']+tresult[0]['num13']+tresult[0]['num21']);
            const e=`SELECT num2,num10,num18,num26 FROM ${table} WHERE user_idx="${user_idx}"`;
            const eresult = await pool.queryParamArr(e);
            const escore=(eresult[0]['num2']+eresult[0]['num10']+eresult[0]['num18']+eresult[0]['num26']);
            const i=`SELECT num6,num14,num22 FROM ${table}`;
            const iresult = await pool.queryParamArr(i);
            const iscore=(iresult[0]['num6']+iresult[0]['num14']+iresult[0]['num22']);
            const n=`SELECT num3,num11,num19,num27 FROM ${table} WHERE user_idx="${user_idx}"`;
            const nresult = await pool.queryParamArr(n);
            const nscore=(nresult[0]['num3']+nresult[0]['num11']+nresult[0]['num19']+nresult[0]['num27']);
            const s=`SELECT num7,num15,num23 FROM ${table} WHERE user_idx="${user_idx}"`;
            const sresult = await pool.queryParamArr(s);
            const sscore=(sresult[0]['num7']+sresult[0]['num15']+sresult[0]['num23']);
            const j=`SELECT num4,num12,num20,num28 FROM ${table} WHERE user_idx="${user_idx}"`;
            const jresult = await pool.queryParamArr(j);
            const jscore=(jresult[0]['num4']+jresult[0]['num12']+jresult[0]['num20']+jresult[0]['num28']);
            const p=`SELECT num8,num16,num24 FROM ${table} WHERE user_idx="${user_idx}"`;
            const presult = await pool.queryParamArr(p);
            const pscore=(presult[0]['num8']+presult[0]['num16']+presult[0]['num24']);
            var ft='f';
            if (-fscore+tscore>0){
                ft='t'
            }
            var ei='e';
            if (-escore+iscore>0){
                ei='i'
            }
            var sn='s';
            if (-sscore+nscore>0){
                sn='n'
            }
            var pj='p';
            if (-pscore+jscore>0){
                pj='j'
            }
            var type=0;
            if ((ft=='f' && ei=='e' && sn=='s' && pj=='p') || (ft=='t' && ei=='e' && sn=='s' && pj=='p')){
                type=3; //무지개떡
            } else if ((ft=='f' && ei=='e' && sn=='s' && pj=='j') || (ft=='t' && ei=='e' && sn=='s' && pj=='j')){
                type=4; //인절미떡
            } else if ((ft=='f' && ei=='e' && sn=='n' && pj=='p') || (ft=='f' && ei=='i' && sn=='n' && pj=='p' )|| (ft=='f' && ei=='e' && sn=='n' && pj=='j' )|| (ft=='f' && ei=='i' && sn=='n' && pj=='j' )){
                type=5; //호떡
            } else if ((ft=='t' && ei=='e' && sn=='n' && pj=='p') || (ft=='t' && ei=='i' && sn=='n' && pj=='p' )|| (ft=='t' && ei=='e' && sn=='n' && pj=='j' )|| (ft=='t' && ei=='i' && sn=='n' && pj=='j' )){
                type=2; //흑임자떡
            } else if ((ft=='t' && ei=='i' && sn=='s' && pj=='p') || (ft=='f' && ei=='i' && sn=='s' && pj=='p')){
                type=1; //가래떡
            } else if ((ft=='f' && ei=='i' && sn=='s' && pj=='j') || (ft=='t' && ei=='i' && sn=='s' && pj=='j' )){
                type=6; //쑥떡
            }

            //return type;
            if(type){
                const fields2 = 'type_idx=?';
                const query2 = `UPDATE ${table2} SET ${fields2} WHERE user_idx="${user_idx}"`;
                const values2 = [type];
                const result = await pool.queryParamArr(query2,values2);
            return true;
        
            }}catch (err) {
            console.log('input answer4 error: ', err);
            throw err;
        }}
}

module.exports = input;