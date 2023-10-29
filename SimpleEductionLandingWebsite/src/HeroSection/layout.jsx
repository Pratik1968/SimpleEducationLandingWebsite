import { Component } from "react";
import StudyIllstration from "../assets/4x/StudyIllustration.png";
export default function HeroSection(){
    return(
        <div className="w-[70%] h-[30.43rem] self-center flex">
<TextBox/>
<ImageContainer/>
        </div>
    );
}
class TextBox extends Component{
    render(){
return(
    <div className="flex-1 flex flex-col items-start justify-center p-30 ">
      <this.Title/>
      <div className="mb-[1rem]"></div>
      <this.Discription/>
      <div className="mb-[1rem]"></div>

      <this.StartLearningButton/>  
    </div>
)
    }
    Title(){
return <p className="text-[2rem] font-bold ">Start learning with us now</p>
    }
    Discription(){
return <p style={{
    color: "rgba(0, 0, 0, 0.46)",
}} className="font-normal text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?</p>
    }
    StartLearningButton(){
return <button className="w-[12.5rem] h-[2.75rem] bg-[#682C0E] rounded-xl p-2 text-white font-bold text-sm">Start Learning</button>
    }
}
class ImageContainer extends Component{
    render(){
        return <img style={{maxWidth:"30.4375rem"}} src={StudyIllstration}/>
    }
}
