import type {GitHubRepoResponse} from "@/types/git-hub-repo-response.ts";

const getRepo = async (repoName: string, userName: string = "local-interloper"): Promise<GitHubRepoResponse> => {
  const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}`, {
    headers: new Headers({
      "Authorization": `Bearer ${import.meta.env.GITHUB_TOKEN}`
    })
  });

  return await (response.json()) as GitHubRepoResponse;
};

export default getRepo;