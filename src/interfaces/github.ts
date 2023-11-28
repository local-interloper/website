export interface GitHubRepoOwner {
  id: number;
  login: string;
  avatar_url: string;
}

export interface GitHubRepoLicense {
  key: string;
  name: string;
  spdx_id: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  owner: GitHubRepoOwner;
  html_url: string;
  ssh_url: string;
  language: string;
  license: GitHubRepoLicense;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  description?: string;
}