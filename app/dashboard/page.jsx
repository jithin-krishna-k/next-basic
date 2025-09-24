import { redirect } from "next/navigation";
import { getSession } from "../lib/session";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <h1>Welcome to your dashboard, {session.email}</h1>
      </div>
    </main>
  );
}
