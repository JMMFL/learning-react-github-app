import Fetch from "./Fetch";
export default function GitHubUser({ login }) {
  return (
    <Fetch
      url={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
      renderLoading={<p>Loading</p>}
    />
  );
}

function UserDetails(data) {
  if (!data.name) return <h2>User doesn't exist</h2>;

  return (
    <div>
      <img
        style={{ width: "200px" }}
        src={data.avatar_url}
        alt={`Profile of ${data.name}`}
      />
      <h1>
        {data.name} / {data.login}
      </h1>
      <p>{data.bio}</p>
      {/* <UserReposiories login={data.login} onSelect={console.log} /> */}
    </div>
  );
}
