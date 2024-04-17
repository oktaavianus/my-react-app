import AuthLayout from "../components/Layouts/AuthLayout";
import LoginForm from "../components/Fragments/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout tittle="Login">
      <LoginForm />
      <p className="text-sm mt-5 text-center">
        Dont have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
