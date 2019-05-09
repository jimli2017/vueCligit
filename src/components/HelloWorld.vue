<template>
  <div class="m-box">
    <p>{{msg}}</p>
		<h1>{{this.$store.state.count}}</h1>
		<h2>这是getters中获取到的数据,{{this.$store.getters.getStateCount}}</h2>
		<button @click="addfun">+</button>
		<button @click="reductfun">-</button>
		<h3>computed:{{count1}}</h3>
  </div>
</template>

<script>
	import{mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	computed: {
		...mapState({
			count1:state=>state.count
		})
	},
	methods: {
		addfun() {
			// 	this.$store.commit("add")
			this.$store.dispatch("addfun")
		},
		reductfun() {
			// 	this.$store.commit("reduction")
			this.$store.dispatch("reductfun")
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,h2{
		color: #fff;
	}
</style>
