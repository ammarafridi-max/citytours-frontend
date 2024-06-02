import "./ActivityCardLong.css"

function ActivityCardLong(props){
    return(
        <div className="activity-card-long col-12 row">
            <div className="activity-card-long-img col-5">
                <img src={props.image} className="activity-card-long-img w-100" />
            </div>
            <div className="activity-card-long-content col-7">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default ActivityCardLong