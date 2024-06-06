const { connection } = require('../utils/connection');

async function GetTasks(req, resp) {
    const {id} = req.query;
    connection.query(`SELECT * FROM task WHERE userid=${id}`,(err,res)=>{
        if(err) throw err;
        else{
            resp.status(200).json({ data:res });
        }
    })
}

module.exports = {
    GetTasks
};
