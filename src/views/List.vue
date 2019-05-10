<template>
	<div>
		<p>this is list page</p>
		<button v-on:click="show = !show">
			Toggle
		</button>
		<transition name="fade">
			<p v-if="show">hello</p>
		</transition>
		<transition name="slide-fade">
			<p v-if="show">hello</p>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				show: true
			}
		},
		sreated: function() {
			console.log("vue")
		},
		methods: {

		}
	}
</script>

<style>
	.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
