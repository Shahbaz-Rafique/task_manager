const { connection } = require('../utils/connection');
const crypto = require('crypto');

async function Register(req, resp) {
    const { name, email, password } = req.body;
    const image=req.file.filename;

    connection.query(`SELECT * FROM users WHERE email='${email}'`,(err,res)=>{
        if(err) throw err;
        else{
            if(res.length>0){
                resp.status(200).json({ message: 'already' });
            }
            else{
                const HashedPassword = crypto.createHash('sha256').update(password).digest('hex');

                const data={
                    image:image,
                    level:1,
                    badge:'silver',
                    name:name,
                    email:email,
                    password:HashedPassword
                }
                
                connection.query('INSERT INTO users SET ?',data,(err,res)=>{
                    if(err) throw err;
                    else{
                        resp.status(200).json({ message: 'success' });
                    }
                })
            }
        }
    })
}

module.exports = {
    Register
};
