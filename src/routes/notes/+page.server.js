// import { prisma } from '$lib/server/prisma'

// class Db {
//     async insert() {
//         try {
//             await prisma.$connect()
//             console.log("connected to db for insertion")
//             await prisma.$disconnect()

//         }
//         catch (e) {

//         }
//         finally {

//         }
//     }
//     async getSubject(branch, sem) {
//         await prisma.$connect()
//         let resp = await prisma.subject.findMany({})
//         return resp
//     }
// }
// let db = new Db()
// export async function load({ params, url }) {
//     let slug = toString(params.brsem)
//     console.log(slug)
//     let sem = slug[slug.length - 1]
//     let branch = slug - slug[slug.length - 1]

//     let resp = db.getSubject(branch, sem)
//     return { text: resp }
// }