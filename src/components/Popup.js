export default function Contactus(props) {
    
    return (props.trigger) ? (
        <div className='popup'> 
            <div className='popup_inner'>
                <button className="close_btn" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
        ) : "";
}