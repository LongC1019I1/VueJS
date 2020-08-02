<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
        <app-user></app-user>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

import User from "./components/User";

export default {

  components: {
    appUser: User
  },
  data: function () {
  }


}

</script>
