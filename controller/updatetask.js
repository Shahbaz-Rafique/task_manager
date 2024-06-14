const { connection } = require('../utils/connection');

async function UpdateTask(req, resp) {
    const {name, mood, date,id} = req.query;

    connection.query(`UPDATE task set name='${name}',mood='${mood}',date='${new Date(date).toISOString().slice(0, 10)}' WHERE taskId=${id}`,(err,res)=>{
        if(err) throw err;
        else{
            resp.status(200).json({ message: 'success' });
        }
    })
}

module.exports = {
    UpdateTask
};
