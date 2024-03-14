import PageWrapper from "@/components/core/containers/page-wrapper";
import Title from "@/components/core/text/title";
import {getGitHubRepos} from "@/util/apis/github";
import RepoCard from "@/app/programming/repo-card";
import {BiCodeBlock} from "react-icons/bi";

const ProgrammingPage = async () => {
  const repos = (await getGitHubRepos())
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

  return (
    <PageWrapper className="pt-20">
      <div className="flex gap-5 items-center">
        <Title bold size="lg">Programming</Title>
        <BiCodeBlock className="text-8xl text-primary" />
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row gap-2 p-2">
        <p className="text-xl text-center lg:text-right max-w-lg">
          Welcome to my dump of open source projects, prototypes and unmaintained code.
          Enjoy your stay!
        </p>
        <div className="stat max-w-sm">
          <div className="stat-title">Total public repos</div>
          <div className="stat-value">{repos.length}</div>
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

export default ProgrammingPage;