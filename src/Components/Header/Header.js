import "../UX/styles.css"
import ScoreDisplay from "./ScoreDisplay"

const Header = (props) =>{

return(
    <div className="header-main">
        <h3>Memory Game -- How long can you go?</h3>
        <ScoreDisplay maxScore={props.maxScore}/>
    </div>
)



}

export default Header