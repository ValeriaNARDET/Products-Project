"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@store/authStore";
import "@styles/globals.scss"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const router = useRouter();
  const token = useAuthStore((store) => store.token);

  useEffect(() => {
    if (!token) {
      router.replace("/login");
    } else {
      router.replace("/products");
    }
  }, [token, router]);


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
