import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import useMountedRef from "../hooks/useMountedRef";

export default function RepoReadme({ login, repo }) {
  const [loading, setLoading] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);

  const mounted = useMountedRef();

  useEffect(() => {
    if (!login || !repo) return;

    async function getReadme() {
      const url = `https://api.github.com/repos/${login}/${repo}/readme`;
      const { download_url } = await fetch(url).then((res) => res.json());
      const markdown = await fetch(download_url).then((res) => res.text());

      if (mounted.current) {
        setMarkdown(markdown);
        setLoading(false);
      }
    }

    setLoading(true);
    getReadme().catch(setError);
  }, [login, repo, mounted]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops! Something went wrong</h1>;
  return (
    <ReactMarkdown>
      {markdown.includes("This HTML file is a template.")
        ? "No README"
        : markdown}
    </ReactMarkdown>
  );
}
