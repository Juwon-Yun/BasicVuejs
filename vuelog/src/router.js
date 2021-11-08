import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import detail from './components/detail.vue';
import Hello from './components/HelloWorld.vue';


const routes = [
  // 여러개의 route에 같은 navigation guard를 추가하고 싶으면 router 변수에 .beforeEach()를 사용한다
  // ex) router.beforeEach((to, from)=>{}) 이러면 여러개의 route에 같은 guard를 실행한다.
  {
    path: "/list",
    component: List,

    //Navigation guards => /list 라는 경로를 들어가기전에 뭔가 검사를 해주고 싶으면 beforeEnter 항목을 만든다
    // 서버에서 /home 으로 가기전에 로그인을 했는지, 회원인지 검증하는 단계 => beforeEnter
    beforeEnter: () => {
      if(!isLogin){
        // return to.fullPath => 전체 경로 알림
        // return to.params.id => id 파라미터를 알려준다
        return false;
      }
      return '/home'
    }

  },
  {
    path: "/detail/:id",
    component: detail,  
  },
  {
    path: "/Hello",
    component: Hello,  
  },

];


// vue 파일 안에서도 페이지 이동시 lifehook안에 작성해서 실행할 수 있다
// ex) 특정 페이지로 접속햇을 때 ajax를 요청하고싶으면 밑의 함수를 사용할 수 있다.
// beforeRouteEnter(){}
// beforeRouteUpdate(){} 
const router = createRouter({
  // history: createWebHashHistory() => hash mode라고 하며, 입력 시에 URL에 전부 #이 붙은채로 시작한다
  // ex) codingapple.com/#/detail, codingapple.com/#/list, codingapple.com/#/home  
  history: createWebHistory(),
  routes,
});

// hashmode와 상반되는 html5 mode는 Vue router로 /detail을
// 보여주세요가 아닌 서버(boot)에 /detail 페이지를 요청한다.

// hash mode를 선택한 경우에는 모든 URL에 #이 붙는다 
// #을 붙이면 #뒤에있는 내용들은 절대 서버로 전달되지 않는다.
// 그렇게해서 서버가 routing을 가로채는 행위를 막고 Vue router에 온전히 라우팅을 맞길 수 있다.
export default router;