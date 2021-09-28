<template>
    <div>
        <div v-if="!isRevealed" class="card-grid">
            <div v-for="(card, idx) in cards" class="card-flip" :key="idx">
                <CardFlip :card="card" />
            </div>
        </div>
        <div v-if="isRevealed" class="card-grid">
            <div v-for="(card, idx) in cards" class="card-flip" :key="idx">
                <CardFlip :card="card" :revealed="true" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        cards: {
            type: Array,
            default: []
        },
        revealed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isRevealed: this.revealed
        }
    },
})
</script>

<style scoped>
.card-grid {
    margin: 10px;
}
</style>