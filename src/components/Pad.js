import './pad.css'

function Pad({ padProperties, num }) {
    return (
        <button className='pad' style={{ width: padProperties.width, height: padProperties.height, lineHeight: padProperties.lineHeight, backgroundColor: padProperties.backgroundColor }}>
            {num}
        </button>
    )
}
export default Pad