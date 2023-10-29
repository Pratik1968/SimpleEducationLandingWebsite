export default function Contact(){
    return(
        <div>
            <Title/>
<Info label={"Address :"} value={"4-5 Main road , Delhi"}/>
        <Info label={"Email : "} value={"educare@gmail.com"}/>
        <Info label={"Phone no :"} value={"+91 4533433265"}/>

        <Info/>

        </div>
        
    );
}

function Info({label,value}){
    return(
        <div className="flex " style={{color:"rgba(0, 0, 0, 0.50)"}}>
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );

}
function    Title(){
    return <p className="font-semibold text-[1.25rem]">Contact</p>
}