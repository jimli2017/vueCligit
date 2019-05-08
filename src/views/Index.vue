<template>
	<div class="about">
		
		<cube-slide :data="items" />
		
		<div class="g-bottom-bars">
			<template>
				<cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" @change="changeHandler">
				</cube-tab-bar>
			</template>
		</div>
	</div>

</template>
<script>
	export default {
		name: 'index',
		data() {
			return {
				items: [{
						url: 'http://www.didichuxing.com/',
						image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
					},
					{
						url: 'http://www.didichuxing.com/',
						image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
					},
					{
						url: 'http://www.didichuxing.com/',
						image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
					}
				],
				selectedLabelDefault: 'Home',
				tabs: [{
					label: 'Home',
					icon: 'cubeic-home'
				}, {
					label: 'Like',
					icon: 'cubeic-like'
				}, {
					label: 'Vip',
					icon: 'cubeic-vip'
				}, {
					label: 'Me',
					icon: 'cubeic-person'
				}]
			}
		},
		sreated: function() {
			console.log("hello");
		},
		methods: {
			clickHandler(label) {
				// if you clicked home tab, then print 'Home'
			},
			changeHandler(label) {
				// if you clicked different tab, this methods can be emitted
				if(label=='Like'){
					this.$router.push({name:'list'});
				}
				if(label=='Vip'){
					this.$router.push({name:'detail'});
				}
				if(label=='Me'){
					this.$router.push({name:'mine'});
				}
			}
		}
	}
</script>
<style scoped>
	.g-bottom-bars {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}
</style>
