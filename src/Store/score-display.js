import React from 'react'

const ScoreContext = React.createContext({
    currentScore:0,
    updateScore:() =>{},
    resetScore: ()=>{}

})

export default ScoreContext