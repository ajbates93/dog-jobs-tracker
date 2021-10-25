<template>
    <main class="mt-5 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-14">
      <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
        Add a new item
      </h1>
      <article class="p-10 border m-10 w-1/3 mx-auto text-center rounded-2xl">
        <template v-for="post in posts">
          <li :key="post.id">{{post.content}}</li>
        </template>
        <input type="text" name="new-item" id="new-item" class="rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Add new entry">
      </article>
    </main>
</template>

<script>
import {gql} from 'graphql-tag'

const GET_ALL_POSTS = gql`query {
  allPosts {
    id
    content
    date
    userId  
  }
}`

export default {
  mounted() {
    this.$store.dispatch('updateShowBanner', false)
  },
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      query: GET_ALL_POSTS,
      update(data) {
        return data.allPosts
      }
    }
  }
}
</script>