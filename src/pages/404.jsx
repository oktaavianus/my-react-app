import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-8xl font-bold mb-10">{error.status}</h1>
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has accoured</p>
      <p className="my-5 text-xl">{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;