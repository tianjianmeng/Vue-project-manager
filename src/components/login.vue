<template>
  <div id="logins" >
	  <el-row type="flex" class="row-bg" justify="center">

	    <el-col :span="6"><div class="grid-content bg-purple-light">
		
			<p>{{message}}</p>
			<p>{{message2}}</p>
			<div id="login-section" >
				<el-input v-model="username" placeholder="username" ></el-input><br/>
				<el-input v-model="password" placeholder="password" show-password ></el-input><br/><br/>
				<el-button type="info" round v-on:click="login">login</el-button>
			</div>
			<router-view></router-view>	
		
		</div></el-col>

	  </el-row>
			
  </div>
</template>

<script>
export default {
  name: 'logins',
	data(){
  			return{
  				message:'please login ',
				message2:'username:1 password:1 ',
  				username: '',
  				password: ''
  			}
  		},methods:{
			login:function(){
				if(this.username==1 && this.password==1)
				this.$router.push({ path: '/success' });
			}
		}
}
</script>

<style>
	  #logins{
		  text-align: center;
		  height: 0;
	  }
	  #login-section {  
	      position: relative;
	      width: 100%;
	      height: 0;
	      padding-bottom: 35%;
	  }

</style>