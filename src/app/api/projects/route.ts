import { PrismaClient, Project } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient()

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  screenshot_url: z.string().url("Screenshot URL must be a valid URL"),
  tech_stack: z.string().min(1, "Tech Stack is required"),
  link: z.string().url().optional(),
  github_link: z.string().url().optional(),
})

type ProjectRequestBody = z.infer<typeof projectSchema>

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const highlight = searchParams.get("highlight");

    const projects = await prisma.project.findMany({
      where: highlight !== null ? { highlight: highlight === "true" } : undefined,
    });
    
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const parsedData = projectSchema.safeParse(body)

    if (!parsedData.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsedData.error.errors },
        { status: 400 }
      )
    }

    const { title, description, screenshot_url, tech_stack, link, github_link }: ProjectRequestBody = parsedData.data

    const newProject: Project = await prisma.project.create({
      data: {
        title,
        description,
        screenshot_url,
        tech_stack,
        link,
        github_link,
      },
    })

    return NextResponse.json({ newProject })
  } catch (error) {
    logError(error, 'POST /api/project', 'POST function in project endpoint')
    return new NextResponse(
      JSON.stringify({ error: "An unexpected error ocurred. Please try again later."}),
      { status: 500 }
    )
  }
}