import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ごめんなさい!</h1>
      <p>何か問題が起きているようです。お時間を置いてアクセスし直してください</p>
      <p>
      </p>
    </div>
  );
}