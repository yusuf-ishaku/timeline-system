import "./App"
export const Onevent = (props) => {
    return (
        <div className="an-instance" id={props.value} key={props.value}>
            <div className="pointer"></div>
            <span className="circle"></span>
            <div className="tag"><span className="event">{props.event}</span><span className="time">{props.time}</span></div>
            <div className="whathappened">{props.whathappened}</div>
            <div className="date">{props.date}</div>
        </div>
    )
}