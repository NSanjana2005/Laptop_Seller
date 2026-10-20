const express=require('express');
const config=require('config');
const cors=require('cors');
const mysql=require('mysql');

const app=express();
app.use(cors());
app.use(express.json());

//connection creation
const connection=config.get("connection");
const excutequery=(querytext,respons)=>{
    const conn=mysql.createConnection(connection);
    conn.query(querytext,(error,result)=>{
       if(error==null){
         respons.send(result);
       }else{
        respons.send(error);
       }
       conn.end();
    })

}

//methos
app.get("/",(request,respons)=>{
    let querytext=`select * from lap`;
    excutequery(querytext,respons);
})

app.post("/",(request,respons)=>{
    let querytext=`insert into lap values('${request.body.sname}','${request.body.lbrand}','${request.body.lmodel}','${request.body.ptype}','${request.body.rcap}','${request.body.stype}','${request.body.lcolor}','${request.body.sprice}','${request.body.cno}','${request.body.nego}')`;
    excutequery(querytext,respons);
})
app.put("/:sname",(request,respons)=>{
    
    let querytext=`update lap set lbrand='${request.body.lbrand}',lmodel='${request.body.lmodel}',ptype='${request.body.ptype}',rcap='${request.body.rcap}',stype='${request.body.stype}',lcolor='${request.body.lcolor}',sprice='${request.body.sprice}',cno='${request.body.cno}',nego='${request.body.nego}' where sname='${request.params.sname}'`
   
    excutequery(querytext,respons);
})
app.delete("/:sname",(request,respons)=>{
    let querytext=`delete from lap where sname='${request.params.sname}'`;
    excutequery(querytext,respons);
})


const port=config.get("applicationport");
app.listen(port,()=>{console.log("server started at 9999")});