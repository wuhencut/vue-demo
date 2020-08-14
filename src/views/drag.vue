<template>
  <div class="page">
    <draggable v-model="list">
      <div v-for="(item, index) in list" :key="index">
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
        {{ item }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "drag",
  components: {
    draggable
  },
  data() {
    return {
      list: [1, 2, 3, 4]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.page {
  div {
    height: 50px;
    background: #dedede;
  }
}
</style>
