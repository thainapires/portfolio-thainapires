import { PrismaClient } from '@prisma/client';
import { projects } from './projects.seed';
import { skills } from './skills.seed';

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seeding...')
  
  await prisma.project.deleteMany()
  console.log('Deleted existing projects')
  
  for (const project of projects) {
    const result = await prisma.project.create({
      data: project
    })
    console.log(`Created project: ${result.title}`)
  }

  await prisma.skill.deleteMany()
  console.log('Deleted existing skills')
  
  for (const skill of skills) {
    const result = await prisma.skill.create({
      data: skill,
    })
    console.log(`Created skill: ${result.name}`)
  }

  console.log('Finished seeding.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})