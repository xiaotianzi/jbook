import express from "express"
import { createProxyMiddleware } from "http-proxy-middleware"
import path from "path"
import { createCellsRouter } from "./routes/cells"

export const serve = (port: number, filename: string, dir: string, useProxy: boolean) => {
    const app = express()

    app.use(createCellsRouter(filename, dir))

    if (useProxy) {
        app.use(createProxyMiddleware({
            target: 'http://127.0.0.1:3000',
            ws: true,
            logger: { info() { }, warn() { }, error() { } }
        }))
    } else {
        const packagePath = require.resolve('@jsnote-sunflower/local-client/build/index.html')
        app.use(express.static(path.dirname(packagePath)))
    }

    return new Promise<void>((resolve, reject) => {
        const server = app.listen(port)

        // if success then resolve
        server.on('listening', () => {
            resolve()
        })

        // error like port in use then reject
        server.on('error', (err) => {
            reject(err)
        })

    })
}