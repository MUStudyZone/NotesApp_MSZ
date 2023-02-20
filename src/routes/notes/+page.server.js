import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


class Db {
    async insert() {
        try {
            await prisma.$connect()
            console.log("connected to db for insertion")
            await prisma.$disconnect()

        }
        catch (e) {

        }
        finally {

        }
    }
    getSubject(branch, sem) {

    }
}
let db = new Db()
export async function load({ params, url }) {
    let slug = toString(params.brsem)
    console.log(slug)
    let sem = slug[slug.length - 1]
    let branch = slug - slug[slug.length - 1]

    return { text: "Hello World" }
}