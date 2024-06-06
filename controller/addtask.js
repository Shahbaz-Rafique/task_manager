const { connection } = require('../utils/connection');

async function AddTask(req, resp) {
    const { taskName, category, dueDate } = req.body;
    const {id} = req.query;

    const data={
        userid:id,
        name:taskName,
        date:new Date(dueDate),
        mood:category,
        status:'Pending',
    }
    
    connection.query('INSERT INTO task SET ?',data,(err,res)=>{
        if(err) throw err;
        else{
            resp.status(200).json({ message: 'success' });
        }
    })
}

module.exports = {
    AddTask
};
