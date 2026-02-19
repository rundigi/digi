"use client";

import { useRouter } from "next/navigation";
import { Navbar } from "@digi/ui";
import AdminSidebar from "~/components/admin-sidebar";
import { authClient } from "~/lib/auth-client";

interface AdminShellProps {
  user: { email?: string; name?: string };
  children: React.ReactNode;
}

export default function AdminShell({ user, children }: AdminShellProps) {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await authClient.signOut();
    } catch {
      // Ignore sign-out errors — redirect regardless
    }
    router.push("/login");
  }

  return (
    <>
      <Navbar
        appLabel="Admin"
        user={user}
        onSignOut={handleSignOut}
        settingsHref="/password"
        billingHref="/billing"
      />
      <AdminSidebar />
      {children}
    </>
  );
}
