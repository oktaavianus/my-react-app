import AuthLayout from "../components/Layouts/AuthLayout";
import RegisterForm from "../components/Fragments/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout tittle="Register">
      <RegisterForm />
      <p className="text-sm mt-5 text-center">
        Have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
