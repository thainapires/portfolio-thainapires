-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "screenshot_url" TEXT NOT NULL,
    "tech_stack" TEXT NOT NULL,
    "link" TEXT,
    "github_link" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_projects" ("created_at", "description", "github_link", "id", "link", "screenshot_url", "tech_stack", "title", "updated_at") SELECT "created_at", "description", "github_link", "id", "link", "screenshot_url", "tech_stack", "title", "updated_at" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
