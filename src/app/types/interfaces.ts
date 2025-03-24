type Skill = {
    id?: string;
    name: string;
    level?: string;
    type: string;
    highlight?: boolean;
    logo_url: string;
};

type Project = {
    id?: string;
    title: string;
    description: string;
    screenshot_url: string;
    tech_stack: string;
    highlight: boolean;
    link: string;
    github_link: string;
};

type AboutMeTopics = {
    id?: number;
    name: string;
    description: string;
    image: string;
}