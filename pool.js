import pg from 'pg';
const {Pool} = pg;
const pool = new Pool({
    host: "localhost",
    user: "susanamunoz",
    database: "diurno",
    password:"",
    port:5432
})
//cliente.connect();

pool.query('select * from usuario where nombre = $1 or apellido=$2', 
           ["Alan","Rojas"] ,
            (err, res)=>{
                if(err){
                    console.log(err);
                }else{
                    console.table(res.rows)
                }
            })
pool.release
