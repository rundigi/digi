import BotSidebar from "../components/bot-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <BotSidebar />
      <main className="pl-56">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
