import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import {getGitHubRepos} from "@/util/github";
import RepoCard from "@/app/github/repo-card";

const ProjectsPage = async () => {
  const repos = (await getGitHubRepos())
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

  const recentPushes = repos
    .reduce((a, c) => (Date.now() / 1000 - new Date(c.pushed_at).getTime() / 1000) < 604800 ? a + 1 : a, 0);

  return (
    <PageWrapper className="py-20">
      <Title>GitHub</Title>
      <div className="flex items-center justify-center flex-col lg:flex-row gap-2 p-2">
        <p className="text-xl text-center lg:text-right max-w-lg">
          Welcome to my dump of open source projects, prototypes and unmaintained code.
          Enjoy your stay!
        </p>
        <div className="stat max-w-sm">
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