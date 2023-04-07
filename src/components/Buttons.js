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
                    <Pad padProperties={acCss} num='AC' id='clear' />
                    <Pad padProperties={symbolCss} num='/' id='divide' />
                </section>
                <section className="row">
                    <Pad padProperties={regularSizeCss} num='7' id='seven' />
                    <Pad padProperties={regularSizeCss} num='8' id='eight' />
                    <Pad padProperties={regularSizeCss} num='9' id='nine' />
                </section>
                <section className="row">
                    <Pad padProperties={regularSizeCss} num='4' id='four' />
                    <Pad padProperties={regularSizeCss} num='5' id='five' />
                    <Pad padProperties={regularSizeCss} num='6' id='six' />
                </section>
                <section className="row">
                    <Pad padProperties={regularSizeCss} num='1' id='one' />
                    <Pad padProperties={regularSizeCss} num='2' id='two' />
                    <Pad padProperties={regularSizeCss} num='3' id='three' />
                </section>
                <section className="row">
                    <Pad padProperties={zeroCss} num='0' id='zero' />
                    <Pad padProperties={regularSizeCss} num='.' id='decimal' />
                </section>
            </section>
            <section className="last-col">
                <Pad padProperties={symbolCss} num='x' id='multiply' />
                <Pad padProperties={symbolCss} num='-' id='subtract' />
                <Pad padProperties={symbolCss} num='+' id='add' />
                <Pad padProperties={equalCss} num='=' id='equals' />
            </section>
        </div>
    )
}
export default Buttons