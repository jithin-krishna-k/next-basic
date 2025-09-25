import { redirect } from "next/navigation";
import { getSession } from "../lib/session";
import UserList from "@/components/UserList";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <UserList />
      </div>
    </main>
  );
}
