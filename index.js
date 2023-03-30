import pg from 'pg';
const {Client} = pg;
const cliente = new Client({
    host: "localhost",
    user: "susanamunoz",
    database: "diurno",
    password:"",
    port:5432
})
cliente.connect();

cliente.query('select * from usuario',(err, res)=>{
    if(err){
        console.log(err);
    }else{
        console.table(res.rows)
    }
})
cliente.end