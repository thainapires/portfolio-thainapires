# Portfolio - Thainá Pires (WIP)

This is a work-in-progress portfolio showcasing my projects and skills, built using nextjs, tailwindcss, prisma, react-query, zod & more. Below you'll find information on the themes, database structure, API usage, useful commands and other things related to the project.

## Theme Previews

| Dark Theme | Light Theme |
|------------|-------------|
| ![Dark Theme Screenshot](https://github.com/user-attachments/assets/b84bc92e-306a-4518-8adf-0cf41fdf5ce5) | ![Light Theme Screenshot](https://github.com/user-attachments/assets/18aa80a4-2a42-448d-9e29-a5b8c7c32788) |

## Database Structure

For now, the database consists of two primary tables: projects and skills. I plan to add more tables.

### Models

- **Projects table (projects)**
  
| Column         | Type    | Description                                       |
|----------------|---------|---------------------------------------------------|
| `id`           | String  | Unique Id of the project (uuid).                 |
| `title`        | String  | The name of the project.                         |
| `description`  | String  | A brief description of the project.              |
| `screenshot_url` | String | URL to an image preview of the project.  *for now, this is the path to the image inside the project        |
| `tech_stack`   | String  | A comma-separated list of technologies used. *this will be updated in the future to use json or maybe create a relationship with the skills table     |
| `highlight`   | Boolean  | A flag that represents if the project should appear in the selected works section    |
| `link`         | String (Optional) | A link to the live project.                      |
| `github_link`  | String (Optional) | A link to the GitHub repository.                 |
| `created_at`  | DateTime | Date that the project was added in the database, this is generated automatically                 |
| `updated_at`  | DateTime | Date that the project was updated in the database, this is updated automatically                 |

- **Skills table (skills)**

| Column     | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| `id`       | String  | Unique Id of the skill (uuid).                 |
| `name`     | String  | The name of the skill/technology.                |
| `level`     | String  | The level I'm in in this technology, this column is not being used at the moment, I'll review it and probably change the type here to enum.                |
| `type`     | String  | The type of the skill, like framework, language, code editor, etc .                |
| `highlight`   | Boolean  | A flag that represents if the skill should appear in the skills section in the main page   |
| `logo_url` | String  | URL to the logo image representing the skill.  *for now, this is the path to the image inside the project  |
| `created_at`  | DateTime | Date that the skill was added in the database, this is generated automatically                 |
| `updated_at`  | DateTime | Date that the skill was updated in the database, this is updated automatically                 |


## Database Setup

The database structure is managed using Prisma ORM. I'm using SQLite for now, while I'm developing, but I plan on changing to Mysql when I deploy it.

## API Endpoints

### Adding a new project

To add a new project to the database, you can use the following curl command to make a POST request to the API

##### Curl to add new project

```
curl --location 'http://localhost:3000/api/project' \
--header 'Content-Type: application/json' \
--data '{
  "title": "Project Title",
  "description": "Project Description",
  "screenshot_url": "http://example.com/screenshot.png",
  "tech_stack": "JavaScript, React, Node.js",
  "link": "http://example.com",
  "github_link": "http://github.com/example"
}'
```

### Useful Commands

| Command | Description |
|---------|-------------|
| `npx prisma db seed` | Run the Prisma seed script to populate the database with initial data. |
| `npx prisma migrate reset` | Reset the database and re-seed it with the latest schema changes. |
| `npx prisma migrate dev` | Apply the latest migrations to the database without resetting it. |
| `npx prisma generate` | Generate the Prisma client based on your schema. |
| `npx prisma studio` | Open Prisma Studio to interact with your database visually. |


<!-- Running the Project -->

