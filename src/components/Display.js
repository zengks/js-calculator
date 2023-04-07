import { useSelector } from 'react-redux'


import './display.css'

function Display() {
  const currentBtn = useSelector(state => state.display.currentBtn)
  const results = useSelector(state => state.display.results)

  return (
    <div className='display'>
      <section className='inputs'>
        {results}
      </section>
      <section className='current-input' id='display'>
        {currentBtn}
      </section>
    </div>
  )
}

export default Display