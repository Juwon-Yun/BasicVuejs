import { createStore } from "vuex";

// vuex 의 셋팅법

//data라고 부르지않고 state라고 부른다 
const store = createStore({
    state () {
        return {
            name : 'kim'
        }
    },
})

export default store;