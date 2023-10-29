export default function LoginForm(){
    return(
        <div className="self-center w-[70%] h-[8.75rem] bg-[#F9E0AE] flex items-center p-10 gap-10">
<InputBox placeholder={"Your Name"}/>
<InputBox placeholder={"Your Email Addresses"}/>
<SubmitButton/>
        </div>
    );
}
function InputBox({placeholder}){
    return <input placeholder={placeholder} className={`h-[3.9375rem] flex-1 text-center text-md font-semibold`}/>;
}
function SubmitButton(){
    return <button className="h-[3.9375rem]  bg-[#C24914] flex-1 text-md font-semibold text-white">Subscribe</button>;
}