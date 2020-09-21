<template>
	<div class="page">
		<el-tree
			ref="tree"
			:check-strictly="true"
			node-key="id"
			highlight-current
			:props="props"
			show-checkbox
			:data="authList"
		></el-tree>
		<el-button @click="getIds">获取id</el-button>
	</div>
</template>
<script>
import authList from "../utils/auth.json";
export default {
	name: "AuthTree",
	data() {
		return {
			authList: authList.list,
			props: {
				label: "label",
				children: "children",
			},
		};
	},
	created() {
    console.log(this.authList)
  },
	methods: {
		getIds(val) {
			console.log(this.$refs.tree.getCheckedKeys());
		},
	},
};
</script>