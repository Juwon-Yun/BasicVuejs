import axios from "axios";
import { createStore } from "vuex";

// vuex 의 셋팅법

//data라고 부르지않고 state라고 부른다 
const store = createStore({
    state () {
        return {
            name : '윤주원',
            age : 20,
            likes : 30,
            isClickLikes : false,
            more : {

            },
        }
    },
    // mutations에서 ajax를 해도되지만 시간이 오래걸릴수도있고 하면안된다.
    mutations : {
        changeStateName(state){
            //this.name 이랑 비슷한 문법이지만 state 파라미터를 추가해야 사용할 수 있다
            state.name = '팍주원';
        },
        increaseAge(state, num){
            state.age = state.age + num;
        },
        increaseLikes(state){
            if(!state.isClickLikes){
                state.likes++;
                state.isClickLikes = !state.isClickLikes;
            }else{
                state.likes--;
                state.isClickLikes = !state.isClickLikes;
            }
        },
        setMore(state, data){
            state.more = data
        },

    },
    // ajax 사용하는곳, 또는 오래걸리는 작업 하는곳
    actions : {
        // actions에 추가한 파라미터는 보통 $store를 뜻함
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((a)=>{
                console.log(a.data);
                context.commit('setMore', a.data)
            });
        }
    },

})

export default store;