import "../styles/components/step.js";


export default function Step({icon, title, text}){
    return (
        <div className="Step">
            <div class="icon">
                <img src="" alt=""/>
            </div>

            <div class="info">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}