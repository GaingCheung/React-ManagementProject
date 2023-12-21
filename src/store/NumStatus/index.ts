interface Obj{
    [key: string]: any;
}

const state:Obj = {
    num : 20
}

const actions: Obj = {
    add: (newState: {num: number}) => {
        newState.num++
    },
    minus: (newState: {num: number}, action:{type: string, val: number}) => {
        newState.num -= action.val
    },
    add1: (newState: {num: number}, action: {type: string, val: number}) =>{
        newState.num += action.val
    }
}

const asyncActions: Obj = {
    asyncAdd: (dis: Function) => {
        setTimeout(() => {
            dis({type: 'add'})
        }, 1000)
    }
}

const actionsName:Obj = {}

for(let key in actions){
    actionsName[key] = key
}

export default {
    state,
    actions,
    asyncActions,
    actionsName
}