<template>
  <div>
    <div class="header">
      <div class="container">
        <h1>老边烧烤涮肚坊</h1>
      </div>
    </div>

    <div class="container">
      <div class="navLeft">
        <ul>
          <li v-for="(item,index) in list" :key="index" :class="(listNum == index) ? 'active' : '' "><a :href="'#title' + '' +  index" @click.prevent="changeNav(index)">{{item.title}}</a></li>
        </ul>
      </div>
      <div class="mainBox">
          <div class="content" v-for="(item,index) in list" :key="index">
            <div v-if="index == listNum">
              <div class="item" v-for="(child,childIndex) in item.child" :key="childIndex">
                <div class="imgBox">
                  <img :src="child.imgLink" alt="">
                </div>
                <div class="textBox">
                  <h4>{{ child.subname }}</h4>
                  <p>{{ child.intro }}</p>
                  <p><strong>{{ child.price }}</strong></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="footer">
      订餐请拨打：13000000000
    </div>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  // import list from '../assets/js/list.js'
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      list: [
                {
                  'title': '分类一',
                  'child':[
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'},
                    {'subname':'菜品名称4','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img4.jpg'},
                    {'subname':'菜品名称5','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img5.jpg'},
                    {'subname':'菜品名称6','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img6.jpg'},
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'}
                  ]

                },
                {
                  'title': '分类二',
                  'child':[
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'},
                    {'subname':'菜品名称4','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img4.jpg'},
                    {'subname':'菜品名称5','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img5.jpg'},
                    {'subname':'菜品名称6','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img6.jpg'},
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'},
                    {'subname':'菜品名称4','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img4.jpg'},
                    {'subname':'菜品名称5','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img5.jpg'},
                    {'subname':'菜品名称6','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img6.jpg'},
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'}
                  ]

                },
                {
                  'title': '分类三',
                  'child':[
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'},
                    {'subname':'菜品名称4','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img4.jpg'},
                    {'subname':'菜品名称5','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img5.jpg'},
                    {'subname':'菜品名称6','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img6.jpg'},
                    {'subname':'菜品名称1','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img1.jpg'},
                    {'subname':'菜品名称2','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img2.jpg'},
                    {'subname':'菜品名称3','intro':'这里是菜品介绍，这里是菜品介绍。','price':'20元','imgLink':'http://hlj.offcn.com/zg/main-site-img/test/img3.jpg'}
                  ]

                }
              ],
      listNum: 0
    }
  },
  created() {

  },
  methods:{
    changeNav (index){
      var that = this
      that.listNum = index
      that.changeMain(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{background-color: #3B67A0; border-bottom: 5px solid #072955;}
  .header h1{font-size: 20px; line-height: 39px; text-align: center; color: #fff;}
  .container{width: 100%;}
  .container .navLeft{height: calc(100vh - 84px); width: 80px; overflow-y: auto; background-color: #efefef;}
  .container .navLeft li{height: 50px; line-height: 50px; font-size: 14px;padding: 0 10px;}
  .container .navLeft li a{display: block; color: #333}
  .container .navLeft li.active{background-color: #fff;}
  .container .mainBox{position: fixed; top: 44px; left: 80px; right: 0; bottom: 40px; overflow-y: auto;}
  .container .mainBox .item{display: flex; justify-content: flex-start; padding: 20px 15px; }
  .container .mainBox .item + .item{border-top: 5px solid #efefef}
  .container .mainBox .imgBox{width: 100px; }
  .container .mainBox .imgBox img{display: block;border-radius: 3px;}
  .container .mainBox .textBox{padding-left: 10px;}
  .container .mainBox .textBox h4{font-size: 14px; line-height: 1.8; font-weight: bold;}
  .container .mainBox .textBox p{font-size: 12px; color: #999; line-height: 1.8;}
  .container .mainBox .textBox p strong{font-size: 16px; color: #ff9000}

  .footer{position: fixed; bottom: 0; left: 0; width: 100%; height: 40px; padding: 0 15px; line-height: 40px; background-color: #3B67A0; color: #fff; font-weight: bold; text-align: center;}
</style>
