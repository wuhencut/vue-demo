<template>
	<div class="page">
		<el-table ref="sort" :data="list">
      <el-table-column width="1"/>
			<el-table-column prop="name" label="name"></el-table-column>
			<el-table-column width="100" label="操作" fixed="right">
				<template slot-scope="scope">
					<el-button type="text">查看</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import Sortable from "sortablejs";
export default {
	data() {
		return {
			list: [{ name: "licong" }, { name: "afu" }, { name: "xiaoma" }],
		};
	},
	mounted() {
		let table = document.querySelector('.el-table__body-wrapper tbody')
		Sortable.create(table, {
			animation: 180,
			delay: 0,
			// onEnd: (evt) => {
			// 	const oldItem = this.dropCol[evt.oldIndex];
			// 	this.dropCol.splice(evt.oldIndex, 1);
			// 	this.dropCol.splice(evt.newIndex, 0, oldItem);
      // },
      onEnd: (e) => {
        this.list.splice(e.newIndex, 0, this.list.splice(e.oldIndex, 1)[0]);
      }
		});
	},
};
</script>

<style lang="less">
</style>