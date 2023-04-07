import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from 'mathjs'

const initialState = {
    results: '',
    currentBtn: '0',
    isFinished: false,
}

const cal = (equation) => {
    return evaluate(equation.replace('x','*'))
}


const calculation = (equation) => {
    let arr = equation.split('')
    let finalResult = ''
    const operate = (arr) => {
        if (!(arr.includes('+') || arr.includes('-') || arr.includes('x') || arr.includes('/'))) {
            finalResult = arr[0].toString()
        } else if ((arr.includes('x') || arr.includes('/'))) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === 'x') {
                    arr = [...arr.slice(0, i - 1), parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]), ...arr.slice(i + 2, arr.length)]
                    break
                } else if (arr[i] === '/') {
                    arr = [...arr.slice(0, i - 1), parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]), ...arr.slice(i + 2, arr.length)]
                    break
                }
            }
            operate(arr)
        } else if ((arr.includes('+') || arr.includes('-'))) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === '+') {
                    arr = [...arr.slice(0, i - 1), parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]), ...arr.slice(i + 2, arr.length)]
                    break
                } else if (arr[i] === '-') {
                    arr = [...arr.slice(0, i - 1), parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]), ...arr.slice(i + 2, arr.length)]
                    break
                }
            }
            operate(arr)
        }
        return finalResult
    }
    console.log('result here', operate(arr))
    return operate(arr)
}

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        currentBtn: (state, action) => {
            state.currentBtn = action.payload
        },
        updateResult: (state, action) => {
            if (action.payload === '=') {
                if (state.isFinished === false) {
                    state.results = cal(state.results)
                    state.isFinished = true
                } else {
                    state.results = '0'
                }
            } else {
                if (state.results.length === 0) {
                    action.payload !== '0' ? state.results += action.payload : state.results = ''
                    state.isFinished = false
                } else {
                    state.results += action.payload
                    state.isFinished = false
                }
            }
        },
        clear: (state) => {
            state.currentBtn = '0'
            state.results = ''
            state.isFinished = true
        }
    }
})

export const { currentBtn, updateResult, clear } = displaySlice.actions
export default displaySlice.reducer