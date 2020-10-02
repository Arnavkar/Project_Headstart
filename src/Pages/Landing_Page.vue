<template>
	<div class = "absolute-top background" style = "display:flex; flex-direction:column;"> 
        <img src="../assets/Logo.svg" class="logo"/>
        <div class="q-px-xl" style="position: absolute;top:70%;width:100vw;">
            <div class="text-h4"> Sustainable Living</div>
            <div class="text-h6 text-weight-light"> Make a difference today</div>
            <div class="q-pt-md content" >
                <!-- <q-btn  
                @click="toLogin()"
                color="white" 
                text-color="dark"
                label="Login" 
                class = "fixed-bottom login"/> -->

                <q-btn 
                @click="toSignUp()"
                color="white" 
                label="Signup" 
                text-color="dark"
                class = "fixed-bottom login q-mt-xl"/>
            </div>  
        </div>  
	</div>
</template>

<script>
export default {
    name:"landing",
    methods:{
        toLogin(){
            this.$router.push('/login')
        },
        toSignUp(){
            this.$router.push('/signup')
        }
    }
    
}
</script>


<style scoped>

.background{
	/* background-image:url("../assets/LoginPage.svg" ); */
	background-image:url("../assets/Background.png" );
    background-size:100vw auto;
    background-repeat: no-repeat;
	width:100vw;
    height:100vh;
}

.logo{
    position: relative;
    left:50%;
    top:40%;
    transform: translate(-50%, -50%) ;
    width: 70vw;
    height: auto;
}

.content{
    display:flex;
    flex-direction: column;
    align-items:center;
}

.login{
	width:100%;
	height:50px;
    margin-bottom:20px;
	font-size:20px;
	border-radius:15px;
	position:relative;
    box-shadow: 0 2px 4px 0 rgba(65, 184, 131, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}
</style>