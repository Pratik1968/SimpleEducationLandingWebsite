export default function UsefulLinks(){
    return(
        <div>
<Title/>
<List/>
        </div>
    );
}
function  Title(){
    return <p className="font-semibold text-[1.25rem]">Useful Links</p>
}
function List(){
    return(
        <ol className="list-disc text-[#6C6C6C]">
            <li>Our Projects</li>
            <li>FAQs</li>
            <li>News and Updates</li>
        </ol>
    );
}