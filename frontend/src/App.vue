<template>
  <div id="app">
    <header class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Tomaquet18's blog</router-link>
      </div>
    </header>
    <main class="container py-4">
      <h1 class="display-4 text-center mb-4">Welcome to my awesome blog!</h1>
      <router-view />
    </main>
    <footer class="bg-light text-center py-3">
      <p>&copy; 2023 tomaquet18. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>