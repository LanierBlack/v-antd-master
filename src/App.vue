<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/common/Header.vue'
@Component({})
export default class App extends Vue {
  public render() {
    // template
    return (
      <div app>
        <Header />
        <router-view />
      </div>
    )
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
