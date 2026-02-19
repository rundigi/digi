import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { env } from "~/env";
import AdminShell from "~/components/admin-shell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieHeader = (await headers()).get("cookie") ?? "";

  let sessionUser: { name?: string; email?: string } | null = null;
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    if (res.ok) {
      const session = (await res.json()) as {
        user?: { name?: string; email?: string; role?: string };
      } | null;
      if (session?.user?.role === "admin") {
        sessionUser = { name: session.user.name, email: session.user.email };
      }
    }
  } catch {
    // network error — deny access
  }

  if (!sessionUser) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <AdminShell user={sessionUser}>
        <main className="pl-56 pt-14">
          <div className="p-10">{children}</div>
        </main>
      </AdminShell>
    </div>
  );
}
