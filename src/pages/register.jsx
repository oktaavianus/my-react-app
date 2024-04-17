import AuthLayout from "../components/Layouts/AuthLayout";
import RegisterForm from "../components/Fragments/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout tittle="Register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
