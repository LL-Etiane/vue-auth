loader = document.querySelector('.loader')
const app = ({
    data(){
        return {
            email: '',
            password: '',
            step1: true,
            step2: false,
            error: '',
        }
    },
    methods: {
        nextPassword(){
            loader.classList.remove('d-none')
            if (this.email !=""){
                this.step1 = false
                this.step2 = true
                this.error = ''
                loader.classList.add('d-none')
            }else{
                this.error = "email must be filled"
                loader.classList.add('d-none')
            }
            
        },

        backtostep1(){
            console.log('step1')
            this.step1 = true
            this.step2 = false
        },
    },
    computed: {
        show(){
            return {
                dNone: true
            }
        }
    }
    
})

Vue.createApp(app).mount('#loginApp')