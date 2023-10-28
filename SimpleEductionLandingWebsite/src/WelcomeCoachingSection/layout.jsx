import src from "../assets/4x/WelcomeCoachingimage.png"
import { Component } from "react";
export default function WelcomeCoachingSection (){
    return(
        <div className="w-[70%] self-center flex items-center">
<Image/>
<div className="w-[2rem]"></div>
<TextBox/>

        </div>
    );
}
class TextBox extends Component {
    render(){
        return(
            <div className="flex-1 flex flex-col p-10">
                <this.Title/>
                <div className="h-5"></div>
                <this.BulletPoints/>
            </div>
        );
    }
    Title(){
        return <p className="self-start font-semibold text-3xl">Welcome to the online centers</p>;
    }
    BulletPoints(){
        return(
            <ol className="list-disc ml-10 flex flex-col gap-2">
                <li className="text-md">Start learning from your experience</li>
                <li className="text-md">Enhance your skills with us now</li>
                <li className="text-md">Do your favorite course</li>
            </ol>
        );
    }
 }
 function Image(){
    return <img className="w-[23.6875rem]"src={src}/>;
 }