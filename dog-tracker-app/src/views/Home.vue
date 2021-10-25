<template>
  <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block text-indigo-600 xl:inline xl:mr-3">Keep track</span>
        <span class="block xl:inline">of what's important</span>
      </h1>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Keep track of when your dog has had a jab or flea/worm treatment, a weigh-in, or just something important that you need to keep in your diary.
      </p>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Hello, {{currentUser.fullName}}. Good to see you again.
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Get started
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
            Contact us
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import gql from 'graphql-tag'

const CURRENT_USER = gql`query {
  currentUser {
    id
    username
    fullName
  }
}`

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('updateShowBanner', true)
  },
  data() {
    return {
      currentUser: { username: 'test' },
    }
  },
  apollo: {
    currentUser: CURRENT_USER
  }
}
</script>
