import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import {getGitHubRepos} from "@/util/github";
import RepoCard from "@/app/projects/repo-card";

const ProjectsPage = async () => {
  const repos = (await getGitHubRepos())
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

  const recentPushes = repos
    .reduce((a, c) => (Date.now() / 1000 - new Date(c.pushed_at).getTime() / 1000) < 604800 ? a + 1 : a, 0);

  return (
    <PageWrapper className="py-20">
      <Title>Projects</Title>
      <div className="flex items-center gap-2">
        <div className="stat">
          <div className="stat-title">Total public repos</div>
          <div className="stat-value">{repos.length}</div>
          <div className="stat-desc">{recentPushes} recently updated</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {repos.map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default ProjectsPage;