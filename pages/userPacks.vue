<template>
  <div class="container">
    <div>
      <van-row>
        <img class="logo" src="https://i.imgur.com/CIV2Yhq.png" />
      </van-row>

      
      <!-- <van-row v-for="(pack, idx) in userPacks" class="card-flip" :key="idx">
          <h3 class="username">{{ pack.username }}</h3>
          <Pack :cards="pack.pack" :loading="false" />
      </van-row> -->

      <van-list>
        <van-cell v-for="(pack, idx) in userPacks" :key="idx" :title="pack.username">
          <Pack :cards="pack.pack" :loading="false" :revealed="true" />
        </van-cell>
      </van-list>

      <van-row>
        <a class="attribution" href="https://www.vecteezy.com/free-vector/origami">Origami Vectors by Vecteezy</a>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';



export default Vue.extend({
  data() {
    return {
      userPacks: [{
        pack: [],
        username: ''
      }],
    }
  },
  async fetch() {
    this.userPacks = await axios.get('/.netlify/functions/getUserPacks').then(res => res.data);
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
})
</script>

<style>
.van-list {
  background-color: transparent;
}

.van-cell {
  color: white;
  line-height: 150px;
  font-size: xx-large;
  background-color: transparent;
}

.logo {
  height: 100px;
}

.card-grid {
  display: flex;
  justify-content: center;
  background: #22282e;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 5%;
}

.card-flip {
  margin: 10px;
}

.container {
  margin: 10 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background:#22282e;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.attribution {
  font-size: 10px;
  color:#6d6d6d;
}

.username {
  display: flex;
  align-items: flex-start;
  margin-left: 100px;
  color: white;
}
</style>
