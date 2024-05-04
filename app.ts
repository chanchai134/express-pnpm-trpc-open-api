import express from "express"
import swaggerUi from 'swagger-ui-express';
import { createOpenApiExpressMiddleware, generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "./router";
import { contextFactory } from "./context";

const app = express()

const openApiDocument = generateOpenApiDocument(appRouter, {
    title: 'tRPC OpenAPI',
    version: '1.0.0',
    baseUrl: 'http://localhost:3000/v1',
});

app.use('/v1', createOpenApiExpressMiddleware({
    router: appRouter,
    createContext: contextFactory,
    maxBodySize: 200
}))

app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.listen(3000, () => {
    console.log("profile app listening on port 3000")
})
