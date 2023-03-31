import Pad from "./Pad"
import './buttons.css'

function Buttons() {
    const regularSizeCss = { width: '120px', height: '104px', lineHeight: '100px', backgroundColor: '#4d4747' }
    const zeroCss = { width: '240px', height: '104px', lineHeight: '100px', backgroundColor: '#4d4747' }
    const acCss = { width: '240px', height: '104px', lineHeight: '100px', backgroundColor: '#cf4242' }
    const equalCss = { width: '120px', height: '208px', lineHeight: '200px', backgroundColor: '#46479c' }
    const symbolCss = { width: '120px', height: '104px', lineHeight: '100px', backgroundColor: '#8f8d8d' }

    return (
        <div className="buttons">
            <section className="first-three-cols">
                <section className="row">
                    <Pad padProperties={acCss} num='AC' />
                    <Pad padProperties={symbolCss} num='/' />
                </section>
                <section className="row">
                    <Pad padProperties={regularSizeCss} num='7' />
                    <Pad padProperties={regularSizeCss} num='8' />
                    <Pad padProperties={regularSizeCss} num='9' />
                </section>
                <section className="row">
                    <Pad padProperties={regularSizeCss} num='4' />
                    <Pad padProperties={regularSizeCss} num='5' />
                    <Pad padProperties={regularSizeCss} num='6' />
                </section>
                <section className="row">
                    <Pad padProperties={regularSizeCss} num='1' />
                    <Pad padProperties={regularSizeCss} num='2' />
                    <Pad padProperties={regularSizeCss} num='3' />
                </section>
                <section className="row">
                    <Pad padProperties={zeroCss} num='0' />
                    <Pad padProperties={regularSizeCss} num='.' />
                </section>
            </section>
            <section className="last-col">
                <Pad padProperties={symbolCss} num='x' />
                <Pad padProperties={symbolCss} num='-' />
                <Pad padProperties={symbolCss} num='+' />
                <Pad padProperties={equalCss} num='=' />
            </section>
        </div>
    )
}
export default Buttons