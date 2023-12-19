import PageWrapper from "@/components/_core/containers/page-wrapper";
import Title from "@/components/_core/text/title";
import {getGitHubRepos} from "@/util/github";
import RepoCard from "@/app/github/repo-card";

const ProjectsPage = async () => {
  const oneDay = 24 * 60 * 60 * 1000;

  const repos = (await getGitHubRepos())
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

  const recentlyUpdated = repos
    .reduce((acc, cur) => (
        ((Date.now() - new Date(cur.pushed_at).getTime()) / oneDay) < 5)
        ? acc + 1
        : acc
      , 0
    );

  return (
    <PageWrapper className="pt-20">
      <Title>GitHub</Title>
      <div className="flex items-center justify-center flex-col lg:flex-row gap-2 p-2">
        <p className="text-xl text-center lg:text-right max-w-lg">
          Welcome to my dump of open source projects, prototypes and unmaintained code.
          Enjoy your stay!
        </p>
        <div className="stat max-w-sm">
          <div className="stat-title">Total public repos</div>
          <div className="stat-value">{repos.length}</div>
          <div className="stat-desc">{recentlyUpdated} recent update{recentlyUpdated == 1 ? "" : "s"}</div>
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