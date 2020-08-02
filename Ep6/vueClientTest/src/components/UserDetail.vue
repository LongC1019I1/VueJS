<template>
<div class="component">
  <h3>Information User Details</h3>
  <p>List Details</p>
  <p>My name: {{ten}}</p>
  <button @click="resetName">Reset</button>
  <button @click="setOtherName">Set</button>
</div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    ten:{
      type:Object,
      required:true,
      default: 'Long Haha'
    },
    setOtherName() {
    }
  },
  methods: {
    resetName:function () {
      this.ten = 'Sky Albert'
      this.$emit('nameWasReset',this.ten)
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}

</style>
