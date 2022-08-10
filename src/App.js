import { useState } from "react";
import GitHubUser from "./components/GitHubUser";
import RepoReadme from "./components/RepoReadme";
import SearchBar from "./components/SearchBar";
import UserReposiories from "./components/UserRepositories";

export default function App() {
  const [login, setLogin] = useState("jmmfl");
  const [repo, setRepo] = useState("checkm8-app");

  const handleSearch = (login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  };

  if (!login) return <SearchBar value={login} onSearch={handleSearch} />;

  return (
    <>
      <SearchBar value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserReposiories login={login} repo={repo} onSelect={setRepo} />
      <RepoReadme login={login} repo={repo} />
    </>
  );
}
