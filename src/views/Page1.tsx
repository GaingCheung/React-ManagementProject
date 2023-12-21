import { useSelector, useDispatch } from "react-redux"
import NumStatus from "@/store/NumStatus"

function Page1 (){
    
    const num = useSelector((state: RootState) => (state.NumReducer.num))
    const arr = useSelector((state: RootState) => state.ArrReducer.arr)

    const dispatch = useDispatch()
    const addNum = () => {
        dispatch({type: 'add'})
    }
    const minusNum = () => {
        dispatch({type: 'minus', val: 2})
    }
    const addNumSycn = () => {
        dispatch(NumStatus.asyncActions.asyncAdd)
    }
    const pushArr = () => {
        dispatch({type: 'pushNum', val: 100})
    }

    return (
        <div>
            this is page1
            <hr />
            <p>{num}</p>
            <hr />
            <button onClick={addNum}>add</button>
            <button onClick={minusNum}>minus</button>
            <button onClick={addNumSycn}>addNumSycn</button>
            <hr />
            <h1>{arr}</h1>
            <button onClick={pushArr}>push Arr</button>
        </div>
    )
}

export default Page1