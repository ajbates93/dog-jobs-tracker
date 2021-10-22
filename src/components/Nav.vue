<template>
  <header class="border-b">
    <div class="p-5">
      <nav>
        <ul class="flex flex-wrap items-center justify-center text-base">
          <li class="mr-5 text-sm font-semibold hover:text-gray-800"><router-link to="/">Home</router-link></li>
          <li class="mr-5 text-sm font-semibold hover:text-gray-800"><router-link to="about">About</router-link></li>
          <li class="mr-5 ml-auto text-sm font-semibold hover:text-gray-800"><router-link to="/login">Login</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav"
}
</script>