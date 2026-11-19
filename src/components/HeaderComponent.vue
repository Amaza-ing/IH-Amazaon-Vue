<script setup></script>

<template>
  <header class="header">
    <h1 class="title">Bienvenidos!</h1>
  
    <nav>
      <ul class="nav-list">
        <li>
          <RouterLink to="/" class="link">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/products" class="link">Products</RouterLink>
        </li>
        <li>
          <RouterLink to="/basics" class="link">Basics</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: blue;
  color: white;
  margin-bottom: 40px;
  padding: 20px;

  .title {
    text-align: center;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

    .link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>