import logo from "../assets/4x/logo.png"
export default function Navbar(){
    return(
        <div className="flex flex-row  items-center w-full h-20 bg-[#F9E0AE]">
<IconAndTitle/>
        </div>
    );
}
function IconAndTitle(){
    return(
    <div className="flex ml-[7.7rem] ">
        <img className="w-[2rem] h-[2rem] mr-[1.31rem] " src={logo}/>
    <p className="text-2xl font-bold">Educare</p>
    </div>
    );
}
