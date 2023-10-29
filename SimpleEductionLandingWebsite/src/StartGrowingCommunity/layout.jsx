import Person1 from "../assets/4x/Person1.png";
import Person2 from "../assets/4x/Person2.png";
import Person3 from "../assets/4x/Person3.png";
import Person4 from "../assets/4x/Person4.png";
import Person5BigImage from "../assets/4x/Person5BigImage.png"
export default function StartGrowingCommunity(){
    return(
<div className="self-center w-[100%] h-[48.75rem] relative">
<TextBox/>
<RoundedImage src={Person1} position={`absolute left-[3.5%] bottom-[36.4%]`}/>
<RoundedImage src={Person2} position={`absolute left-[28.3%] bottom-[19.3%]`}/>
<RoundedImage src={Person3} position={`absolute right-[9.31%] top-[21.1%]`}/>
<RoundedImage src={Person4} position={`absolute right-[36%] top-[10%]`}/>
<Person5Big src={Person5BigImage}/>
</div>
    );
}
function TextBox(){
    return (
        <div className="h-[19.5625rem] absolute  w-fit flex flex-col top-[25%] left-[13%] items-center gap-[1.37rem] p-3">
            <h1 className="text-4xl font-semibold">Start growing with our community</h1>
            <p style={{
                color:" rgba(0, 0, 0, 0.46)"
            }} className="">Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
        <button className="bg-[#FC8621] w-min-[3.375rem] font-semibold text-white p-3 rounded-lg">Join community</button>
        </div>
    );
}

function RoundedImage({src,position}){
    return<img src={src} className={`rounded-xl w-[5.875rem] ${position}`}/>;
}
function Person5Big({src}){
    return <img src={src} className="absolute right-0 bottom-0 z-[-1] w-[62.25rem] h-[41.5rem]"/>; 
}