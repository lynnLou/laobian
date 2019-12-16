<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @charset "UTF-8";*{box-sizing:border-box}
  body,html{padding:0;margin:0;min-height:100%}
  html{-ms-overflow-style:scrollbar}
  img{border:none;outline:0;max-width:100%}
  a{cursor:pointer;text-decoration:none}
  a:active{outline:0}
  a:focus{-moz-outline-style:none;outline:0}
  ul{list-style:none}
  li,ul{padding:0;margin:0}
  h1,h2,h3,h4,h5,p{padding:0;margin:0;font-weight:400}
  h1 a:active,h1 a:focus,h1 a:hover,h1 a:link,h2 a:active,h2 a:focus,h2 a:hover,h2 a:link,h3 a:active,h3 a:focus,h3 a:hover,h3 a:link,h4 a:active,h4 a:focus,h4 a:hover,h4 a:link,h5 a:active,h5 a:focus,h5 a:hover,h5 a:link,p a:active,p a:focus,p a:hover,p a:link{text-decoration:none}
  h2{font-size:26px}
  h3{font-size:20px}
  h4{font-size:16px}
  ol{padding:0 0 0 20px}
  ol li{list-style-type:decimal;list-style-position:outside}
  .fl{float:left}
  .fr{float:right}
  .clearfix:after{content:"";display:block;clear:both}
  .main{width:1000px;margin:0 auto}
  .mr0{margin-right:0!important}
  h2{text-align:center;font:700 40px/60px;color:#333}
  .clearfix:after{content:"";display:table;clear:both;height:0}
  body{font-family:"Microsoft YaHei","宋体";color:#333; background-color: #fff;}
</style>
