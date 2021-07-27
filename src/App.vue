<template>
  <div id="app">

    <div id="nav" class="container">
      <div class="row ">
        <div class="col-12 d-flex justify-content-between">
          <div class="logo">
            <img src="./assets/logo.png" alt="Logo">
          </div>
          <div class="menu">

            <router-link to="/">Home</router-link>
            <router-link to="/search">Search</router-link>
          
          </div>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

// -------------------------------------
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #2c3e50;
    overflow-y: auto;

  }

  #nav {
    .row{
      height: 80px;
      .col-12{
        .logo{
          img{
            height: 60px;
          }
        }
      }
    }

    a {
      color: #b3dfcb;
      line-height: 60px;
      padding-right: 12px;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
