import GlobalBackground from "@/components/shared/GlobalBackground";
import AuthLayout from "./_components/AuthLayout";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-full flex flex-col">
      <GlobalBackground className="min-h-screen">
        <AuthLayout>{children}</AuthLayout>
      </GlobalBackground>
    </main>
  );
}
