import logo from "../assets/4x/logo.png"
export default function Navbar(){
    return(
        <div className="flex flex-row  items-center w-full h-20 bg-[#F9E0AE]">
<IconAndTitle/>
<NavOption/>
<ContactButton/>
        </div>
    )
}
function IconAndTitle(){
    return(
    <div className="flex ml-[7.7rem]  ">
        <img className="w-[2rem] h-[2rem] mr-[1.31rem] " src={logo}/>
    <p className="text-2xl font-bold">Educare</p>
    </div>
    );
}
function NavOption(){
    return(
        <div className="flex-1">
            <ul className="flex flex-row  items-center justify-center gap-14 ">
                <li className=" text-[.85rem] font-semibold">Home</li>
                <li className=" text-[.85rem] font-semibold">About</li>
                <li className="flex items-center text-[.85rem] font-semibold">Course <span class="material-symbols-outlined">expand_more</span></li>
                <li className="flex items-center text-[.85rem] font-semibold"> Blog <span class="material-symbols-outlined">expand_more</span></li>
            </ul>
       </div>
    )
}
function ContactButton(){
    return(
        <button className=" h-[2rem] w-[9rem] rounded-lg text-white bg-[#C24914] font-bold text-[1rem] mr-[7.7rem] ">
            Contact us
        </button>
    );
}