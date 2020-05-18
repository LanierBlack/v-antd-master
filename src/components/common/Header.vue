<template>
    <header id="header">
      <a id="logo" href="">
        <img src="../../assets/logo.png" alt="">
      </a>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
#header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
  #logo {
    overflow: hidden;
    padding-left: 40px;
    float: left;
    height: 64px;
    line-height: 64px;
    text-decoration: none;
    white-space: nowrap;
  }
  #logo img {
    height: 32px;
    margin-right: 16px;
  }
}
</style>
