
### Portfolio - Thainá Pires

##### Curl to add new project:

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