import { useState } from "react"

export default function Team(){

    const [team , setTeam] = useState(11);

    const teamStyle = {
        border:'2px solid yellow', 
        borderRadius:'2px',
        margin:'15px',
        borderRadius:'15px'
    }

    const teamAdd = () =>{
        const newTeam = team+1;
        setTeam(newTeam);
    }
    const teamReduce = () =>{
        const newTeam = team-1;
        setTeam(newTeam);
    }

    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={teamAdd}>Add</button>
            <button onClick={teamReduce}>Reduce</button>
        </div>
    )
}