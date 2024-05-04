import { TRPCError } from "@trpc/server";
import { middlewareBuilder } from "./trpc";

export const authMiddleware = middlewareBuilder(opts => {
    const user = opts.ctx.headers.authorization
    if(!user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return opts.next({ 
        ctx: { user } 
    })
})