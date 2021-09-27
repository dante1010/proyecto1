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


async function getNosotrosById(id) {
    var query = "select * from nosotros where id=? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}


async function modificarNosotrosById(obj, id) {
    try {
        var query = "update nosotros set ? where id=? ";
        var rows = await pool.query(query,[obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function buscarNosotros(busqueda) {
    var query = "select * from nosotros where proyecto like ? OR descripcion like ? OR responsable like ?";
    var rows = await pool.query(query, ['%' + busqueda + '%' , '%' + busqueda + '%', '%' + busqueda + '%']);
    return rows;
}


module.exports = { getNosotros, deleteNosotrosById, insertNosotros, getNosotrosById, modificarNosotrosById, buscarNosotros }