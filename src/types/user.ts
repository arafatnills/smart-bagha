// ---------- enums (string unions) ----------
export type UserRole = "DONOR" | "ADMIN" | (string & {});
export type UserStatus = "ACTIVE" | "SUSPENDED" | "DELETED";
export type AuthProvider = "CREDENTIAL" | "GOOGLE";
export type Gender = "MALE" | "FEMALE" | "OTHER";

export type BloodGroup =
    | "A_POSITIVE"
    | "A_NEGATIVE"
    | "B_POSITIVE"
    | "B_NEGATIVE"
    | "AB_POSITIVE"
    | "AB_NEGATIVE"
    | "O_POSITIVE"
    | "O_NEGATIVE"
    | ""; // Google signup-e backend "" set kore

// ---------- donor ----------
export type Donor = {
    id: string;
    name: string;
    email: string;
    userId: string;
    phone: string | null;
    address: string | null;
    laseDonateDate: string | null; 
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};

// ---------- user ----------
export type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    profilePhoto: string | null;
    profilePublicId: string | null;
    googleId: string | null;
    provider: AuthProvider;
    emailVerified: boolean;
    role: UserRole;
    status: UserStatus;
    gender: Gender | null;
    bloodGroup: BloodGroup;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    donar: Donor | null; 
};

// ---------- api response wrapper ----------
export type ApiResponse<T> = {
    success: boolean;
    status: number;
    message: string;
    data: T;
};