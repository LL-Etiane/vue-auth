loader = document.querySelector('.loader')
const app = ({
    data(){
        return {
            email: '',
            password: '',
            passwordconfirm: '',
            firstname: '',
            lastname: '',
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            step5: false,
            error: '',
        }
    },
    methods: {
        next(){
            loader.classList.remove('d-none')
            if(this.step1){
                if (this.email !=""){
                    this.step1 = false
                    this.step2 = true
                    this.error = ''
                    loader.classList.add('d-none')
                }else{
                    this.error = "email must be filled"
                    loader.classList.add('d-none')
                }
            }else if(this.step2){
                if(this.password !=""){
                    this.step2 = false
                    this.step3 = true
                    this.error = ''
                }else{
                    this.error = "password must be filled"
                }
            }else if(this.step3){
                if(this.password !="" && this.password == this.passwordconfirm){
                    this.step3 = false
                    this.step4 = true
                    this.error = ''
                }else{
                    this.error = "password not match"
                }
            }else if(this.step4){
                if(this.firstname !=""){
                    this.step4 = false
                    this.step5 = true
                    this.error = ''
                }else{
                    this.error = "name must be filled"
                }
            }else if(this.step5){
                alert("you made it")
            }
            
        },

        back(){
            if(this.step2){
                this.step2 = false
                this.step1 = true
            }else if (this.step3){
                this.step3 = false
                this.step2 = true
            }
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