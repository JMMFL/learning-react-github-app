import { useEffect } from "react";
import useIterator from "../hooks/useIterator";

export default function RepoMenu({
  repositories,
  selected,
  onSelect = (f) => f
}) {
  const [{ name }, next, prev] = useIterator(
    repositories,
    selected ? repositories.findIndex((repo) => repo.name === selected) : null
  );

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={prev}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  );
}
