function LoadingError({ loading, error }) {
  if (loading) {

   return <p role="status">Loading...</p>;

  }

  if (error) {
   return <p role="alert">{error}</p>;
  }

  return null;
}

export default LoadingError;