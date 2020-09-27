<template>
	<div class="page">
		<el-dropdown type="primary" @command="handleChange">
			<el-button type="primary">
				更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item :command="11">11</el-dropdown-item>
				<el-dropdown-item>22</el-dropdown-item>
				<el-dropdown-item>33</el-dropdown-item>
				<el-dropdown-item>44</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>
<script>
export default {
	data() {
		return {
			menu: "",
		};
	},
	watch: {
		menu(val) {
			console.log(val);
		},
	},
	methods: {
    handleChange(val){
      console.log(val)
    }
  },
};
</script>