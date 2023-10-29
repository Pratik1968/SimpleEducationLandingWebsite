import twitter from "../assets/4x/twitter.png";
import linkedIn from "../assets/4x/linkedin.png";
import facebook from "../assets/4x/facebook.png";
import instagram from "../assets/4x/instagram.png";
export default function SocialMedia(){
        return(
            <div className="self-center flex flex-col">
        <Title/>
        <div className="h-[1rem]"></div>
        <IconGroup/>
            </div>
        );
            }
function    Title(){
        return <p className="font-semibold text-[1.25rem]">Follow us</p>
    }
   function Icon({src,width,height}){
   
    return <img src={src} className={`${width} ${height}`} />
    }
 function   IconGroup(){
        return(
            <div className="self-center flex flex-row gap-2 items-center">
                <Icon src={twitter} width="w-[2.0625rem] h-[2.0625rem]"/>

                <Icon src={linkedIn} width="w-[2rem] h-[2.0625rem]"/>
                <Icon src={facebook} width="w-[2.3125rem] h-[2.3125rem]"/>
                <Icon src={instagram} width="w-[2.375rem] h-[ 2.3125rem]"/>

            </div>
        );}

