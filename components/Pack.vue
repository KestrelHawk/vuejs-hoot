<template>
    <div class="card-grid">
        <van-loading v-if="packLoading" type="spinner" color="#1989fa" />
        <div v-if="!revealed" v-for="(card, idx) in cards" class="card-flip" :key="idx">
            <CardFlip :card="card" />
        </div>
        <div v-if="revealed" v-for="(card, idx) in cards" class="card-flip" :key="idx">
            <CardFlip :card="card" :revealed="true" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        cards: [],
        loading: true,
        revealed: false
    },
    data() {
        return {
            packLoading: this.loading,
            cards: this.cards,
            revealed: this.revealed
        }
    },
    methods: {
    }
    
})
</script>

<style scoped>
.card-grid {
    margin: 10px;
}
</style>