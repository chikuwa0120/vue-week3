const url = 'https://vue3-course-api.hexschool.io/v2/';
const {createApp} = Vue;
const app = {
    data(){
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login() {
            axios.post(`${url}admin/signin`,this.user)
            .then((res) => {
                const { expired,token,message } = res.data;
                document.cookie = `chikuwa = ${token}; expires = ${expired}`;
                alert(message);
                window.location = 'index.html';
            })
            .catch((err) => {
                alert(err.data.message);
            })
        }
    },
    mounted(){

    }
}

createApp(app).mount('#app');