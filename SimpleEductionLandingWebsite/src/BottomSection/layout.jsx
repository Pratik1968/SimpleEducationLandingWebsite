import { Component } from "react";
import logo from "../assets/4x/logo.png";
import SocialMedia from "./SocialMedia";
import UsefulLinks from "./UsefulLinks";
import Contact from "./Contact";
import Copyright from "./Copyright";
export default function BottomSection(){
    return(
    <div className="flex flex-col bg-[#F9E0AE] w-full h-[27.625rem]">
    <div className="self-center w-[70%] h-full flex flex-row items-center justify-between ">
<LogoAndTitle/>
<SocialMedia/>
<UsefulLinks/>
<Contact/>
        </div>
<Copyright/>
<div className="h-[3.5rem]"></div>
        </div>
    );
}

function LogoAndTitle(){
    return(
        <div className="flex items-center justify-center gap-4">
<img src={logo} className="w-[3.5rem]"/>
<p className="font-bold text-2xl">Educare</p>
        </div>
    );
}

