<template>
  <div class="container">
    <div>

      <van-row>
        <img class="logo" src="https://i.imgur.com/CIV2Yhq.png" />
      </van-row>
      

      <van-row class="wide">
        <van-field v-if="!loggedIn" v-model="name" placeholder="Enter Name" />

        <Pack v-if="loggedIn" :cards="cards" />
        <!-- <div v-if="loggedIn" class="card-grid">
          <van-loading v-if="loading" type="spinner" color="#1989fa" />
          <div v-if="!loading" v-for="(card, idx) in cards" class="card-flip" :key="idx">
            <CardFlip :card="card" />
          </div>
        </div> -->
      </van-row>

      <van-row>
        <van-button v-if="!loggedIn" type="primary" @click="setName">
          OPEN PACK
        </van-button>
        <van-button v-if="loggedIn" type="info" to="userPacks">
          See All Packs
        </van-button>
      </van-row>

      <van-row>
        <a class="attribution" href="https://www.vecteezy.com/free-vector/origami" v-if="loggedIn">Origami Vectors by Vecteezy</a>
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
      cards: [],
      name: '',
      loggedIn: false
    }
  },
  methods: {
    setName() {
      console.log(this.name);
      if (this.name) {
        this.loggedIn = true;
        this.fetchCards();
      }
      console.log(this.loggedIn);
    },
    async fetchCards() {
      //this.cards = await axios.get('/.netlify/functions/getCards').then(res => res.data);
      this.cards = await axios.post('/.netlify/functions/getCards', {
        name: this.name
      })
      .then(res => res.data);
    },
  }
})
</script>

<style>
.nav-right {
  display: flex;
  align-items: flex-end;
  justify-content: end;
  text-align: end;
}

.wide {
  margin: 20px;
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
</style>
