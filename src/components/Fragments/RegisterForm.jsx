import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Type your fullname here"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*****"
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default RegisterForm;
