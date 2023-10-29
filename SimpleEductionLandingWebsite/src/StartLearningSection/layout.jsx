import src from "../assets/4x/StartLearningSection.png"
export default function StartLearningSection(){
    return(
        <div className="w-[70%] flex items-center self-center">
<TextBox/>
<Image/>
        </div>
    );
}
function TextBox(){
return(
    <div className=" h-full p-10 flex items-center">
    <p className="text-[2rem] font-semibold">Start learning by creating free account and get register</p>
    </div>
)
}

function Image(){
    return <img className="w-[23.6875rem]"src={src}/>;
 }