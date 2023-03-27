import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Popup(props) {
    
    return (props.trigger) ? (
        <div className='popup'> 
            <div className='popup_inner'>
                <div className={'close_btn'}>
                <FontAwesomeIcon icon={faClose} onClick={() => props.setTrigger(false)}></FontAwesomeIcon>
                </div>
                { props.children }
            </div>
        </div>
        ) : "";
}