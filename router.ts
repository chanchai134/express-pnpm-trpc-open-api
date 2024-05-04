import { authMiddleware } from "./auth-middleware";
import { procedure, router } from "./trpc";
import { z } from "zod"

const authProcedure = procedure.use(authMiddleware)

export const appRouter = router({
    userList: authProcedure
        .meta({
            openapi: {
                method: 'GET',
                path: '/userList',
                protect: true
            }
        })
        .input(z.object({a: z.number()}))
        .output(z.string())
        .query(opts => {
            console.log(opts.input)
            console.log(opts.ctx.user)
            return "aa"
        }),
    createUser: authProcedure
        .meta({
            openapi: {
                method: 'POST',
                path: '/createUser',
                protect: true
            }
        })
        .input(z.object({a: z.number()}))
        .output(z.string())
        .mutation(opts => {
            console.log(opts.input)
            console.log(opts.ctx.user)
            return "ssss"
        })
})