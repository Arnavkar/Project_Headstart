<template>
	<div class = "absolute-top background" style = "display:flex; flex-direction:column;"> 
        <div class="absolute-bottom content" >
            <q-btn 
            :loading="loading1" 
            @click="toLogin()"
            color="white" 
            text-color="dark"
            label="Login" 
            class = "fixed-bottom login"/>

            <q-btn 
            :loading="loading1" 
            @click="toSignUp()"
            color="first" 
            label="Sign Up" 
            text-color="dark"
            class = "fixed-bottom login"/>
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
	background-image:url("../assets/LoginPage.svg" );
    background-size:100vw auto;
    background-repeat: no-repeat;
    background-color:#C3EFDB;
	width:100vw;
    height:100vh;
}

.content{
    display:flex;
    flex-direction: column;
    align-items:center;
}

.login{
	width:90vw;
	height:50px;
    margin-bottom:20px;
	font-size:20px;
	border-radius:10px;
	position:relative;
}
</style>