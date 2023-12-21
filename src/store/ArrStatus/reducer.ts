import ArrStatus from "./index";

export default (state = {...ArrStatus.state}, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state))

    for(let key in ArrStatus.actionName){
        if(ArrStatus.actionName[key] === action.type){
            ArrStatus.actions[ArrStatus.actionName[key]](newState, action)
            break
        }
    }
    
    return newState
}