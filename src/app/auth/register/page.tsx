"use client";


import { useCreateAuthStore } from "@/store/useAuthStore";
import RegisterForm from "../_components/registerFrom";
import OtpVerificationStep from "../_components/OtpVerificationStep";
// import OtpVerificationStep from "./OtpVerificationStep";


export default function RegisterPage() {
  const step = useCreateAuthStore((state) => state.step);

  return (
    <>
      {step === 1 && <RegisterForm />}
      {step === 2 && <OtpVerificationStep />}
    </>
  );
}