import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import { OpenApiMeta } from "trpc-openapi";

const t = initTRPC
    .meta<OpenApiMeta>()
    .context<Context>()
    .create()

export const router = t.router
export const procedure = t.procedure
export const middlewareBuilder = t.middleware