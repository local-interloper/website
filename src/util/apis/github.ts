import "server-only"

import {GitHubRepo} from "@/interfaces/github";
import {cache} from "react";

export const getGitHubRepos = cache(async (): Promise<GitHubRepo[]> => {
  const url = "https://api.github.com/users/local-interloper/repos";

  const response = await fetch(url, {next: {revalidate: 3600}});

  if (!response.ok) {
    return [];
  }

  return await response.json() as GitHubRepo[];
});