"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "~/components/sidebar";
import { authClient } from "~/lib/auth-client";
import { Navbar } from "@digi/ui";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string; name?: string } | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authClient
      .getSession()
      .then((session) => {
        if (!session.data?.user) {
          router.push("/login");
          return;
        }
        setUser({ email: session.data.user.email, name: session.data.user.name });
      })
      .catch(() => {
        router.push("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  async function handleSignOut() {
    try {
      await authClient.signOut();
    } catch {
      // Ignore sign-out errors — redirect regardless
    }
    router.push("/login");
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-950">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar user={user} onSignOut={handleSignOut} />
      <Sidebar />
      <main className="pl-56 pt-14">
        <div className="p-10">{children}</div>
      </main>
    </div>
  );
}
