.<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }} </h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }} </h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // computed: mapState(['count'])
  computed: {
    countComputed() {
      return this.$store.state.count
    },
    ...mapState(['count', 'lastMutation', 'isLoading'])
    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
  },

  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementBy(value) {
      this.$store.commit('incrementBy', value)
      // this.randomInt(value)
    },
    // incrementRandomInt() {
    //   this.$store.dispatch('incrementRandomInt')
    // },
    // ...mapActions(['incrementRandomInt'])
    ...mapActions({
      randomInt: 'incrementRandomInt'
    })
  }
}
</script>

<style>

</style>