import { create } from "zustand";

// forgot & reset password
interface AuthState {
  step: number;
  email: string;
  otp: string;

  setStep: (step: number) => void;
  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  resetState: () => void;
}
const initialAuthState = {
  step: 1,
  email: "",
  otp: "",
};

export const useAuthStore = create<AuthState>((set) => ({
  ...initialAuthState,

  setStep: (newStep) => set({ step: newStep }),
  setEmail: (newEmail) => set({ email: newEmail }),
  setOtp: (newOtp) => set({ otp: newOtp }),
  resetState: () => set({ step: 1, email: "", otp: "" }),
}));

// create user
interface CreateAuthState {
  step: number;
  email: string;
  setEmail: (email: string)=> void
  setStep: (step: number) => void;
  resetFormData: () => void;
}

const initialCreateAuthState = {
  step: 1,
  email: ""
};

export const useCreateAuthStore = create<CreateAuthState>((set) => ({
  ...initialCreateAuthState,
  setEmail: (email)=> set({email}),
  setStep: (step) => set({ step }),
  resetFormData: () => set(initialCreateAuthState),
}));
