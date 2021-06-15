<template>
	<div class="is-success">
	  <p>{{message}}</p>
	  
	  <!-- <button v-on:click='toHome' v-trigger>click here to homepage or be waiting for 1 second</button> -->
	  <!-- <div @click="toHome()" v-trigger>click here to homepage or be waiting for 1 second</div>  -->
	  
      <!-- instantly jump to home without click -->
	  <div id="toH" >
		{{message2}}  
	  	{{toHome()}}
	  </div>
	   
	</div>
</template>

<script>
	export default {
	  name: 'success',
		data(){
	  			return{
	  				message:'login success',
					message2:'be waiting for 1 second'
	  			}
	  		},methods:{
			toHome:function(){
					setTimeout(() =>{
					    this.$router.push({ path: '/home' });
					},1000);
			}
			},directives:{
				trigger:{
					inserted(el,binging){
						el.click()
					}
				}
			}
	}
</script>
<style>
	.is-success{
		text-align: center;
		font-size: 64px;
	}
</style>
