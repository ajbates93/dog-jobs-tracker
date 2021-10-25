import { data, currentUserId } from './data/data.js'

import { GraphQLScalarType } from 'graphql'

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    parseValue(value) {
        return new Date(value)
    },
    serialize(value) {
        return value.toISOString()
    }
})

const resolvers = {
  Query: {
    currentUser: (parent, args) => {
      let user = data.users.find( u => u.id === currentUserId );
      let posts = data.posts.filter( p => p.userId === currentUserId );
      // set posts as a property in user (immutable)
      user = Object.assign({}, user, { 
        posts: posts, 
      });
      return user;
    },
    postsByUser: (parent, args) => {
      let posts = data.posts.filter( p => p.userId === args.userId ); 
      return posts
    },
  },
  User: {
    posts: (parent, args) => {
      let posts = data.posts.filter( p => p.userId === parent.id );
      return posts;
    }
  },
  Date: {
    dateScalar
  }
};

export { resolvers }