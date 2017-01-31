<template>
  <li class="guitar-item">
    <div class="guitar">
      <img class="guitar-img" v-bind:src="guitar.imgUrl" height="100"/>
    </div>
    <div class="buttons">
      <a v-bind:href="guitar.url" target="_blank">Go to</a>
    </div>
    <div>
      <span class="name">{{ guitar.text }}</span>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    guitar: {
      type: Object,
      required: true
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  }
};

</script>

<style lang="scss" scoped>
@import "assets/constants";
@import "assets/mixins";

$guitar-size: 100px;
$guitar-icon-size: 55px;

.guitar-item {
  display: block;
  position: relative;

  width: 100%;
  min-height: $guitar-size + 2*$baseline;

  padding: $baseline;

  list-style: none;

  &:not(:last-of-type):after {
    content: "";
    position: absolute;
    right: 0; bottom: 0; left: 0;
    border-bottom: 1px solid $color-element-light;
  }
}

.guitar {
  float: left;

  width: $guitar-size;

  text-align: center;
  vertical-align: middle;

  border-radius: 5px;
  background-color: $color-element-light;

  .guitar-img{
    max-width: 100%;
    color: darken($color-element-light, 10%);
  }
}

.buttons {
  float: right;
  margin-top: $baseline;
}

.name {
  @include ellipsize;
  display: block;

  padding: $baseline $baseline 3px $baseline;

  color: $color-text-dark;
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
}

.title {
  @include ellipsize;
  display: block;

  padding: 4px $baseline 3px $baseline;

  color: $color-text-semidark;
  font-size: $font-size-tiny;
}

.processing-overlay {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;

  text-align: center;

  background-color: transparentize(white, 0.1);

  .processing-icon {
    position: absolute;
    top: 20px;

    font-size: 50px;
    color: $color-element-medium;

    background-color: white;
    border-radius: 50%;
  }
}

</style>
