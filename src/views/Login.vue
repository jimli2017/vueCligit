<template>
	<div class="g-login">
		<div class="m-login">
			<img alt="Vue logo" src="../static/img/logo.png">
			<cube-input class='u-text' v-model="value" type='text' placeholder='请输入账号'></cube-input>
			<cube-input class='u-text' v-model="password" type='password' placeholder='请输入密码' :eye="eye"></cube-input>
			<cube-button @click="goback" type="submit">登录</cube-button>
			<HelloWorld class='u-bttext' msg="Welcome to Your Vue.js App" />
			<p>{{mc}}</p>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	export default {
		name: 'login',
		components: {
			HelloWorld
		},
		data() {
			return {
				value: '',
				password: '',
				mc: '863893033046990',
				eye: {
					open: false,
					reverse: false
				}
			}
		},
		created() {
			
		},
		methods: {
			// 获取uuid
			uuid() {

			},
			goback() {
				let postData = {
					userCode: this.value,
					password: this.password,
					machineCode: this.mc
				}
				// 发送一个 POST 请求
				this.$axios.post('/app/login.action', postData)
					.then(res=>{
						console.log(res);
					})
					.catch(function(error) {
						console.log(error);
					});
					sessionStorage.setItem("datas",true)
				this.$router.push({name:'index'});
			}
		}
	}
</script>
<style scoped>
	.g-login {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 12px;
		position: relative;
		background-size: cover;
		background-image: url(../static/img/login_bg.jpg);
	}

	.m-login {
		width: 80%;
		margin: 0 auto;
	}

	.m-login img {
		width: 136px;
		height: 136px;
		border-radius: 68px;
		margin-top: 60px;
		margin-bottom: 60px;
	}

	.u-text {
		margin-bottom: 26px;
	}

	.u-bttext {
		margin-top: 10px;
	}
</style>
