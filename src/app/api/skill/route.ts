import { PrismaClient, Skill } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient()

const skillSchema = z.object({
  name: z.string().min(1, "Name is required"),
  level: z.string().optional(),
  type: z.string().min(1, "Type is required"),
  highlight: z.boolean(),
  logo_url: z.string(),
})

type SkillRequestBody = z.infer<typeof skillSchema>

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const parsedData = skillSchema.safeParse(body)

    if (!parsedData.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsedData.error.errors },
        { status: 400 }
      )
    }

    const { name, level, type, highlight, logo_url }: SkillRequestBody = parsedData.data

    const newSkill: Skill = await prisma.skill.create({
      data: {
        name,
        level,
        type,
        highlight,
        logo_url
      },
    })

    return NextResponse.json({ newSkill })
  } catch (error) {
    logError(error, 'POST /api/skill', 'POST function in skill endpoint')
    return new NextResponse(
      JSON.stringify({ error: "An unexpected error ocurred. Please try again later."}),
      { status: 500 }
    )
  }
}