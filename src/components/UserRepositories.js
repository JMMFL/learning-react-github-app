import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

export default function UserReposiories({ login, repo, onSelect = (f) => f }) {
  return (
    <Fetch
      url={`https://api.github.com/users/${login}/repos`}
      renderSuccess={(data) => {
        return (
          <RepoMenu repositories={data} selected={repo} onSelect={onSelect} />
        );
      }}
    />
  );
}
