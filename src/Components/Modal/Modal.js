
import '../UX/styles.css'

const Modal = (props) =>{


    return(
        <div className="modal-background">
            <div className="modal">
                {props.children}
            </div>
        </div>
    )

}

export default Modal