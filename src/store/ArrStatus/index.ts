interface Obj {
    [key: string]: any
}

const state:Obj = {
    arr: [1,2,3,100]
}

const actions:Obj = {
    pushNum: (state : {arr: number[]}, action : {type: string, val: number}) =>{
        console.log('pushNum')
        state.arr.push(action.val)
    }
}

const actionName:Obj = {}

for(let key in actions){
    actionName[key] = key
}

export default{
    state,
    actions,
    actionName
}