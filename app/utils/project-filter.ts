import type { Project } from "~/shared/types/project";

export default (project: Project, search: string): boolean => {
    search = search.toLowerCase();
    project = {
        ...project,
        title: project.title.toLowerCase(),
        description: project.description.toLowerCase(),
    }

    if (project.title.includes(search)) {
        return true;
    }

    if (project.description.includes(search)) {
        return true;
    }

    if (project.tech.some(t => t.split(":")[1]!.replaceAll("-", " ").includes(search))) {
        return true;
    }

    if (project.tags.some(t => t.includes(search))) {
        return true;
    }

    return false;
} 