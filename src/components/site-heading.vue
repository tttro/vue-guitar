<template>
  <div class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo"/>
  <h1 class="heading">{{ title }}</h1>

  <p class="appinfo" ><i class="fa fa-info-circle" aria-hidden="true"></i> This app fetch all new arrive secondhand Fender guitars and gears from kitarakuu.fi</p>

</div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/constants";

.header {
  text-align: center;
}
.heading {
  margin-top: 20px;
  margin-bottom: 25px;
  text-align: center;
  color: $color-brand-primary;

  font-family: $font-family-alternative;
  font-weight: $font-weight-black;
  font-size: $font-size-huge;
}
.logo {
  width: 100px;
  height: 100px;
}

.appinfo {
  color: #555;
}
</style>
