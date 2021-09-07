<template>
  <div>
    <h2>分类</h2>
    <h2>{{res}}</h2>
  </div>
</template>

<script>
import {request} from "network/request";

export default {
  name: "Category",
  data(){
    return {
      res: ''
    }
  },
  created() {
    request({
      url: '/home/data?type=pop&page=1',
    }).then(res => {
      console.log(res.data);
      this.res = res.data
    }).catch(err =>{
          console.log(err);
        })
  }
}
</script>

<style scoped>

</style>