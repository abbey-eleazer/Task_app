import { Button } from "@/components/ui/button";
import {Field,FieldGroup,} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    <>
      <div className="form">
        <div className="form-title">
          <img src={Logo} alt="" />
          <h3 className="text-xl font-semibold">Welcome back!</h3>
          <p className="text-slate-500">
            Don't have an account?
            <Link to={"/signup"} className="text-blue-500 hover:underline">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
        <FieldGroup className="w-100 ">
          <Field>
            <Input
              id="fieldgroup-email"
              type="email"
              placeholder="Enter your email"
            />
          </Field>
          <Field >
            <Input
              id="password"
              type="password"
              placeholder="Password"
             
            />
          </Field>
          <Field orientation="horizontal">
            <Button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
            >
              Log In
            </Button>
          </Field>
        </FieldGroup>
            <Link to={"/forgot-password"} className="text-blue-500 hover:underline mt-2">
              Forgot password?
            </Link>
      </div>
    </>
  );
};

export default LoginPage;
