import './pad.css'
import { useSelector, useDispatch } from 'react-redux'
import { currentBtn, updateResult, clear } from '../features/display/displaySlice'

function Pad({ padProperties, num, id }) {
    const isFinished = useSelector(state => state.display.isFinished)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        if (e.target.id === 'clear') {
            dispatch(clear())
        } else if (isFinished === true) {
            dispatch(clear())
            dispatch(currentBtn(e.target.value))
            dispatch(updateResult(e.target.value))
        } else {
            dispatch(currentBtn(e.target.value))
            dispatch(updateResult(e.target.value))
        }
    }
    return (
        <button
            onClick={handleClick}
            className='pad'
            id={id}
            style={{
                width: padProperties.width,
                height: padProperties.height,
                lineHeight: padProperties.lineHeight,
                backgroundColor: padProperties.backgroundColor
            }}
            value={num}
        >
            {num}
        </button>
    )
}

export default Pad