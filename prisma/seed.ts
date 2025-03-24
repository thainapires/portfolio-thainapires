// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed initial data
  await prisma.skill.create({
    data: {
      name: 'JavaScript',
      level: 'Expert',
      type: 'Programming Language',
      highlight: true,
      logo_url: 'https://example.com/js-logo.png',
    },
  })

  await prisma.project.create({
    data: {
      title: 'My Awesome Project',
      description: 'A description of my awesome project',
      screenshot_url: 'https://example.com/screenshot.png',
      tech_stack: ['JavaScript', 'Node.js', 'React'],
      link: 'https://example.com',
      github_link: 'https://github.com/example/my-awesome-project',
    },
  })

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })