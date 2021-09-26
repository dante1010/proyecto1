var pool = require('./bd');


async function getNosotros() {
    var query = 'select * from nosotros ';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNosotrosById(id) {
    var query = 'delete from nosotros where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNosotros(obj) {
    try {
        var query = "insert into nosotros set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { getNosotros, deleteNosotrosById, insertNosotros }