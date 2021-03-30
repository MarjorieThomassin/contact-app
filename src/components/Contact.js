import "./Contact.css";

const status = true;

function Contact(){
    return(
        <div className="Contact">
            <img className="avatar" alt="" src="https://avatars.githubusercontent.com/u/79426116?v=4" />
            <h3 className="name">Marjorie</h3>
            <div className="status">
                <div className= { status ? "status-online" : "status-offline"}></div>
            </div> {
                status ? <p className="status-text">Online</p> : <p className="status-text">Offline</p>
            }
        </div>
    );
}

export default Contact