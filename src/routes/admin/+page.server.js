import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const ssr = true
export const actions = {
    insert: async ({ request }) => {
        try {
            let data = await request.formData()
            let subjectName = data.get('subject')
            let branch = data.get('brbranchsem')
            let sm = data.get('sem')

            await prisma.$connect()
            await prisma.subject.create({
                data: {
                    name: subjectName,
                    branch: branch,
                    sem: parseInt(sm)
                }
            })
            await prisma.$disconnect()

        } catch (e) {

            console.log("--------->" + e)
            await prisma.$disconnect()
        }

    }
}