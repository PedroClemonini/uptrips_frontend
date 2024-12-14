import "../styles/components/feedback.css";

function Feedback({text, name, trip}){

    return(
        <div className="Feedback">
            <p class="text">{text}</p>
            <span class="name">{name}</span>
            <span class="trip">{trip}</span>
        </div>
    );
}

export default Feedback;