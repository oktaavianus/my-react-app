import AuthLayout from "../components/Layouts/AuthLayout";
import LoginForm from "../components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout tittle="Login" type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
