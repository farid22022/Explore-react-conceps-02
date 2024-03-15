import { useEffect, useState } from "react";
import People from "./People";

export default function Peoples(){
    const [peoples, setPeoples] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPeoples(data))
    },[])

    return(
        <div className="box">
            {
                peoples.map(people => <People people={people}> </People>)
            }
        </div>
    )
}