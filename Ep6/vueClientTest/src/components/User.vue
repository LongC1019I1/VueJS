<template>
<div class="component">
  <h1>The User Component</h1>
  <p>I'm {{ten}}</p>
  <button @click="changeName">Change My Name</button>
  <hr>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <app-user-detail
        :setOtherName="setOtherName"
        :ten="ten"
        @nameWasReset="ten = $event"></app-user-detail>
    </div>
    <div class="col-xs-12 col-sm-6">
      <app-user-edit></app-user-edit>

    </div>
  </div>
</div>
</template>

<script>
import UserEdit from "./UserEdit";
import UserDetail from "./UserDetail";
export default {
  data: function(){
      return{
        ten: 'Sky Albert'
      }
    },

  methods:{
    changeName(){
      this.ten = 'Long'
    },
    setOtherName(){
      this.ten = 'BLG'
    }
  },
components: {
  appUserDetail: UserDetail,
  appUserEdit: UserEdit
}
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
