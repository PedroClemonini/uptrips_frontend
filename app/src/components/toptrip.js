import 

import "../styles/components/toptrip.css";

export default function TopTrip({img, trip, price, time}){
    return (
        <div className="TopTrip">
            <div class="trip">
                <img src="" alt=""/>
            </div>
            <div class="info">
                <h1>{trip}</h1>
                <h2>R${price}</h2>
            </div>
            <span><img src="" alt=""/>{time}</span>
        </div>
    );
}