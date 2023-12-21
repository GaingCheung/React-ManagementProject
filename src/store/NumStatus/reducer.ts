import NumStatus from "./index"

export default (state = {...NumStatus.state}, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state))
    
    for(let key in NumStatus.actionsName){
        if(NumStatus.actionsName[key] === action.type){
            NumStatus.actions[NumStatus.actionsName[key]](newState, action)
            break
        }
    }
    
    return newState
}