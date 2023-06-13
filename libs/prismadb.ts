import { PrismaClient } from '@prisma/client'
// used for avoiding too much requests if we set it as global we can avoid that bs error
const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismadb = client

export default client
