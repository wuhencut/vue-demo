<template>
  <div>
    <el-form inline>
      <el-button type="primary" @click="editClick">编辑</el-button>
    </el-form>
    <table>
      <thead>
        <tr>
          <th scope="col" v-if="isEdit">拖拽</th>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Sport</th>
        </tr>
      </thead>
      <draggable v-model="list" tag="tbody" handle=".icon">
        <tr v-for="item in list" :key="item.name">
          <td v-if="isEdit">
            <div>
              <svg
                t="1596532569386"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2484"
                width="40"
                height="40"
              >
                <path
                  d="M545.184 416h-64V229.92H314.08l175.296-175.296a32 32 0 0 1 45.248 0l175.296 175.296h-164.736V416z m0 192v177.312h173.504l-184.064 184.064a32 32 0 0 1-45.248 0L305.28 785.28h175.872V608h64zM96.064 544a32 32 0 0 1 0-64h827.296a32 32 0 0 1 0 64H96.064z"
                  p-id="2485"
                  fill="#1296db"
                ></path>
              </svg>
            </div>
          </td>
          <td scope="row">{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sport }}</td>
        </tr>
      </draggable>
    </table>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "table-example",
  display: "Table",
  order: 8,
  components: {
    draggable
  },
  data() {
    return {
      isEdit: false,
      list: [
        { id: 1, name: "Abby", sport: "basket" },
        { id: 2, name: "Brooke", sport: "foot" },
        { id: 3, name: "Courtenay", sport: "volley" },
        { id: 4, name: "David", sport: "rugby" }
      ],
      dragging: false
    };
  },
  methods: {
    // 点击编辑
    editClick() {
      this.isEdit = true;
      this.beforeEditList = JSON.parse(JSON.stringify(this.list));
    }
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>
