import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { IncomingHttpHeaders } from 'http'

export interface Context {
    headers: IncomingHttpHeaders
}

export const contextFactory = (expressCt: CreateExpressContextOptions): Context => {
    return { headers: expressCt.req.headers }
}