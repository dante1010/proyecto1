var pool = require('./bd');


async function getNosotros() {
        var query = 'select * from nosotros ';
        var rows = await pool.query(query);
        return rows;

    } 
    


module.exports = { getNosotros }