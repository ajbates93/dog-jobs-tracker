import { ApolloServer } from 'apollo-server'
import { schema } from './schema.js'
import { resolvers } from './resolvers.js'


const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
})

server.listen(4001).then(({ url }) => {
    console.log('API server running at localhost:4001')
})