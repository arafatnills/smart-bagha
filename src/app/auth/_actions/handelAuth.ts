"use server";
export const HandleSendOtp = async (email: string) => {
  try {
    const backendUrl = process.env.BACKEND_API_URL;
    const response = await fetch(`${backendUrl}/api/v1/auth/forgot-password`, {
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
      `${backendUrl}/api/v1/auth/verify-forgot-password-otp`,
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
    const response = await fetch(`${backendUrl}/api/v1/auth/reset-password`, {
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
