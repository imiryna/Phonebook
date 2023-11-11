import React from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { loginThunk } from "Redux/user/authThunk";
import { Container, FormCss, InputCss, LabelCss, Button } from "./login.styled";

export const Login = ()=>{
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const dispatch = useDispatch();

      const onSubmit = (data) => {
        dispatch(loginThunk(data));
        reset();
      }
    
      return (
        <Container>
        <FormCss onSubmit={handleSubmit(onSubmit)}>
            <LabelCss>
                <span>Email</span>
                <InputCss  {...register("email", { required: true })} type="email"/>
                {errors.email && <span>This field is required</span>}
            </LabelCss>
            <LabelCss>
                <span>Password</span>
                <InputCss  {...register("password", { required: true, minLenght: 6})} type="password"/>
                {errors.password && <span>{errors.password.message}</span>}
            </LabelCss>
    
          <Button type="submit">Sign in</Button>
        </FormCss>
        </Container>
      )
}