import { prisma } from '$lib/server/prisma'


export const ssr = true
export const actions = {
    insert: async ({ request }) => {
        try {
            let data = await request.formData()
            let subjectName = data.get('subject')
            let brnch = data.get('branch')
            let sm = parseInt(data.get('sem'))

            await prisma.$connect()
            await prisma.subject.create({
                data: {
                    name: subjectName,
                    branch: brnch,
                    sem: sm
                }
            })
            await prisma.$disconnect()

        } catch (e) {

            console.log("--------->" + e)
            await prisma.$disconnect()
        }

    }
}