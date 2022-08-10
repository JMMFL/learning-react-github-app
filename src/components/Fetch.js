import useFetchHook from "../hooks/useFetchHook";

export default function Fetch({
  url,
  renderSuccess,
  renderError = (error) => <pre>{error.message}</pre>,
  renderLoading = "loading"
}) {
  const { data, error, loading } = useFetchHook(url);
  if (loading) return renderLoading;
  if (error) return renderError(error);
  if (data) return renderSuccess(data);
}
