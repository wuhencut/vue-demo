<template>
	<div class="page">
		<el-tree
			ref="tree"
			draggable
			:check-strictly="true"
			default-expand-all
			node-key="id"
			:default-checked-keys="['id5']"
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
			authList: authList,
			props: {
				label: "label",
				children: "children",
			},
		};
	},
	created() {},
	methods: {
		getIds(val) {
			console.log(this.$refs.tree.getCheckedKeys());
		},
	},
};
</script>