<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1>Awesome Blog</h1>
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>