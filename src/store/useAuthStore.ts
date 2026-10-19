import { create } from "zustand";

interface AuthState {
  step: number;
  email: string;
  otp: string;

  setStep: (step: number) => void;
  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  resetState: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  step: 1,
  email: "",
  otp: "",

  setStep: (newStep) => set({ step: newStep }),
  setEmail: (newEmail) => set({ email: newEmail }),
  setOtp: (newOtp) => set({ otp: newOtp }),
  resetState: () => set({ step: 1, email: "", otp: "" }),
}));
