import express from "express";
import http from "http"
import { ApolloServer } from "@apollo/server"
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import bodyParser from "body-parser";
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors';
import fakeData from "./fakeData/index.js";
const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
type File{
id:String,
name:String,
warehouse:String,
}

type Folder{
id: String,
createdAt: String,
content: String,
file: [File],
}



type Query{
    folders:[Folder]
}

`;
const resolvers = {
    Query: {
        folders: () => { return fakeData.folders }
    },
    Folder: {
        file: (parent, args, context, info) => {
            const folder_id = parent.id;
            return fakeData.file.filter(filee => filee.warehouse === folder_id)
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
    ]
})

await server.start();
app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log('Sever ready at http://localhost:4000');