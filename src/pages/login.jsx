import AuthLayout from "../components/Layouts/AuthLayout";
import LoginForm from "../components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout tittle="Login">
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage;