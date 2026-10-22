"use server";

import { cookies } from "next/headers";

export const HandleSendOtp = async (email: string) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(`${backendUrl}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (!response.ok) {
      return { success: false, message: data.message || "Failed to send OTP." };
    }
    return { success: true, message: "OTP sent successfully!" };
  } catch {
    return { success: false, message: "Internal server error." };
  }
};

export const HandleVerifyOtp = async (otp: string, email: string) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(
      `${backendUrl}/auth/verify-forgot-password-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to verify OTP.",
      };
    }
    return { success: true, message: "OTP verified successfully!" };
  } catch {
    return { success: false, message: "Internal server error." };
  }
};

// reset password
export const HandleResetPassword = async (
  email: string,
  otp: string,
  newPassword: string,
) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(`${backendUrl}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp, newPassword: newPassword }),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to change password.",
      };
    }
    return { success: true, message: "Password changed successfully!" };
  } catch {
    return { success: false, message: "Internal server error." };
  }
};

// create user
interface CreateUserInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
  bloodGroup: string;
}

export const HandelCreateUser = async (payload: CreateUserInterface) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(`${backendUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to create account!",
      };
    }
    return { success: true, message: "Account Created successfully!" };
  } catch {
    return { success: false, message: "Internal server error." };
  }
};

// handel confirm otp and create user to db
type ConformCreateUser = {
  email: string;
  otp: string;
};

export const HandelConfirmCreateUser = async (payload: ConformCreateUser) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(`${backendUrl}/auth/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to verify OTP & create account!",
      };
    }

    const accessToken = data.data.accessToken;
    const refreshToken = data.data.refreshToken;

    const cookieStore = await cookies();

    
    if (accessToken) {
      cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
      });
    }

    if (refreshToken) {
      cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return { success: true, message: "OTP verified & Account created successfully!" };
  } catch {
    return { success: false, message: "Internal server error." };
  }
};

// login email with password
type LoginPayload = {
  email: string;
  password: string
}
export const HandelLogin = async (payload: LoginPayload) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(`${backendUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to logged in!",
      };
    }

    const accessToken = data.data.accessToken;
    const refreshToken = data.data.refreshToken;

    const cookieStore = await cookies();

    
    if (accessToken) {
      cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
      });
    }

    if (refreshToken) {
      cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return { success: true, message: "Logged in successfully!" };
  } catch {
    return { success: false, message: "Internal server error." };
  }
};


// login with google

export const HandelGoogleLogin = async (idToken: string): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const res = await fetch(`${backendUrl}/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });
    const result = await res.json();
    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Google login failed",
      };
    }

    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return {
      success: true,
      message: "Logged in successfully!",
    };
  } catch (error) {
    console.log("Google login error:", error);
    return {
      success: false,
      message: "Something went wrong during Google login.",
    };
  }
}

// log out 
export const HandelLogout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};