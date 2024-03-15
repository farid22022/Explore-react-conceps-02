export default function People({people}){
    const {name, email} = people;
    return(
        <div className="box">
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
        </div>
    )
}