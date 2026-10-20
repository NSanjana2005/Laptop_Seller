import axios from 'axios'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

function Laptop() {

    const model = {
        "HP": ["1", "2", "3", "5"],
        "Dell": ["3", "5"],
        "Lenovo": ["2", "3", "5"],
        "Apple": ["1", "5"]
    }
    const protype = {
        "HP": ["i3", "i5", "i7", "Ryzen 5", "Ryzen 7"],
        "Dell": ["i3", "i5", "i7"],
        "Lenovo": ["Ryzen 5", "Ryzen 7"],
        "Apple": ["i7", "Ryzen 5"]
    }
    const [laps,setlaps]=useState([]);
    const [laptop, setlaptop] = useState({
        "sname": "",
        "lbrand": "",
        "lmodel": "",
        "ptype": "",
        "rcap": "",
        "stype": "",
        "lcolor": "",
        "sprice": "",
        "cno": "",
        "nego": ""
    })
  const url=`http://localhost:9999`;
    const getdata=()=>{
        
          axios.get(url).then((result)=>{
                setlaps(result.data);
          }).catch((err)=>{console.log(err)})
    } 
    useEffect(()=>{
        getdata();
    })
    const OnTextChange = (args) => {
        let copyoflap = { ...laptop };
        copyoflap[args.target.name] = args.target.value;
        if (args.target.name === "lbrand") {
            copyoflap.lmodel = "";
            copyoflap.ptype = "";
        }
        setlaptop(copyoflap);
    }

    const submit = () => {
        if (laptop.sname === "" || laptop.lbrand === "" || laptop.lmodel === "" || laptop.ptype === "" || laptop.rcap === 0 || laptop.stype === "" || laptop.lcolor === "" || laptop.sprice === 0 || laptop.cno === 0) {
            alert("please fill all fileds!!!");
        } else {
            insert();
            console.log(laptop);
            setlaptop({
                "sname": "",
                "lbrand": "",
                "lmodel": "",
                "ptype": "",
                "rcap": "",
                "stype": "",
                "lcolor": "",
                "sprice": "",
                "cno": "",
                "nego": ""
            })
        }
    }
    const Edit=(e)=>{
        console.log("Editing nego value:", e.nego);
        setlaptop(e);
    }
    const Delete=(e)=>{
       axios.delete(url+`/`+e.sname).then((result)=>{
              if(result.data.affectedRows>0){
                alert("deleted succesfully!!");
                
              }
            
       }).catch((erro)=>{
          console.log(erro);

       })
    }
    const update=()=>{
        axios.put(url+`/`+laptop.sname,laptop).then((result)=>{
            if(result.data.affectedRows>0){
                alert("updated succesfully");
                 console.log("Data sent:", laptop);
            console.log("Update response:", result.data);
                getdata();
                 setlaptop({
                "sname": "",
                "lbrand": "",
                "lmodel": "",
                "ptype": "",
                "rcap": "",
                "stype": "",
                "lcolor": "",
                "sprice": "",
                "cno": "",
                "nego": ""
            })
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    const  insert=()=>{
        axios.post(url,laptop).then((result)=>{
             if(result.data.affectedRows>0){
                alert("submitted succesfully");
             }

        })
    }
    return (
        <div className='container'>
            <div border="1">
                <table className='table table-responsive'>
                    <tbody>
                        <tr>
                            <td>Seller Name</td>
                            <td>
                                <input type="text" name="sname" value={laptop.sname} onChange={OnTextChange} />
                                {
                                    laptop.sname.length > 25 &&
                                    <span style={{ color: "red", marginleft: "10px" }}>
                                        SELLER NAME MUST BE 25 CHAR
                                    </span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Laptop Brand</td>
                            <td>
                                <select name="lbrand" value={laptop.lbrand} onChange={OnTextChange}>
                                    <option>select laptop brand</option>
                                    <option value="HP">HP</option>
                                    <option value="Dell">Dell</option>
                                    <option value="Lenovo">Lenovo</option>
                                    <option value="Apple">Apple</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Laptop Model</td>
                            <td>
                                <select name="lmodel" value={laptop.lmodel} onChange={OnTextChange} disabled={laptop.lbrand === ""}>
                                    <option>select lmodel</option>
                                    {model[laptop.lbrand]?.map((e) =>
                                        <option key={e} value={e}>{e}</option>
                                    )

                                    }
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>Seller Name</td>
                            <td>
                                <select name="ptype" value={laptop.ptype} onChange={OnTextChange} disabled={laptop.lbrand === ""}>
                                    <option>select Processor Type</option>
                                    {protype[laptop.lbrand]?.map((e) =>
                                        <option key={e} value={e}>{e}</option>
                                    )

                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>RAM Capacity</td>
                            <td>
                                <select name="rcap" value={laptop.rcap} onChange={OnTextChange} >
                                    <option>select ram capacity</option>
                                    <option value="4GB">4 GB</option>
                                    <option value="8GB">8 GB</option>
                                    <option value="16GB">16 GB</option>
                                    <option value="32GB">32 GB</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Storage Type </td>
                            <td>
                                <select name="stype" value={laptop.stype} onChange={OnTextChange}>
                                    <option>select Storage Type</option>
                                    <option value="HDD">HDD</option>
                                    <option value="SSD">SSD</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Laptop Color</td>
                            <td>
                                <input type="text" name="lcolor" value={laptop.lcolor} onChange={OnTextChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Selling Price</td>
                            <td>
                                <input type="number" name="sprice" value={laptop.sprice} onChange={OnTextChange} />
                                {
                                    laptop.sprice !== "" && laptop.sprice <= 0 &&
                                    <span style={{ color: "red", marginleft: "10px" }}>
                                        selling price is not negative
                                    </span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>
                                <input type="text" name="cno" value={laptop.cno} onChange={OnTextChange} />
                                {
                                    laptop.cno !== "" && !/^[0-9]{10}$/.test(laptop.cno) &&
                                    <span style={{ color: "red", marginLeft: "10px" }}>
                                        Number must be exactly 10 digits
                                    </span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Negotiable</td>
                            <td>
                                <input type="radio" name="nego" value="Yes" onChange={OnTextChange} checked={laptop.nego === "Yes"} />Yes
                                <input type="radio" name="nego" value="No" onChange={OnTextChange} checked={laptop.nego === "No"} />No
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <button className='btn btn-primary' onClick={submit}>Submit</button>
                            </td>
                             <td>
                                <button className='btn btn-primary' onClick={update}>update</button>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
             <hr />
             <div border="1">
                <table className='table table-responsive'>
                    <thead>
                        <tr>
                            <td>
                                Seller Name
                            </td>
                            <td>Laptop Brand</td>
                            <td>Laptop Model</td>
                            <td>Processor Type </td>
                            <td>RAM Capacity</td>
                            <td>Storage Type</td>
                            <td>Laptop Color</td>
                            <td>Selling Price</td>
                            <td>Contact Number</td>
                            <td>Negotiable</td>
                        </tr>
                    </thead>
                    <tbody>
                   {laps.map((e)=>{
                           return(
                            <tr key={e.sname}>
                            <td>{e.sname}</td>
                            <td>{e.lbrand}</td>
                            <td>{e.lmodel}</td>
                            <td>{e.ptype}</td>
                            <td>{e.rcap}</td>
                            <td>{e.stype}</td>
                            <td>{e.lcolor}</td>
                            <td>{e.sprice}</td>
                            <td>{e.cno}</td>
                            <td>{e.nego}</td>
                             <td>
                                <button className='btn btn-danger' onClick={()=>{Delete(e)}}>Delete</button>
                             </td>
                              <td>
                                <button className='btn btn-warning' onClick={()=>{Edit(e)}}>Edit</button>
                             </td>
                           </tr>
                           )
                   })

                   }
                    </tbody>

                </table>

             </div>
        </div>
    )

}

export default Laptop;