import React from "react";
import Table from "../Table";
// import {Button,Table} from 'react-bootstarp';
// import "bootstrap/dist/css/bootstarp.min.css";
import Employees from "./Empolyee";


export default function Home() {
  return (
    <>
      <div style={{margin:"10 rem"}}>
        <Table striped bordered hover size="sm">
<thead>
    <tr>
        <th>
            Name
        </th>
        <th>Age</th>
    </tr>
</thead>
<tbody>
   {Employees && Employees.length>0
   ?

   Employees.map((item)=>{
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.Age}</td>

        </tr>
    )

   })
:
"No Data Available"}
</tbody>
        </Table>
      </div></>

  );
}
