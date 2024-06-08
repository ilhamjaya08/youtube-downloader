import { Elysia, t } from 'elysia'
import yt from './yt'

const app = new Elysia({ prefix: '/api' }) 
    .use(yt)
    .get('/', () => 'hi')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle
export const POST = app.handle