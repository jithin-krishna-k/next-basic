import { redirect } from "next/navigation";
import { getSession } from "../lib/session";
import UserList from "@/components/UserList";
import dynamic from 'next/dynamic';


const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  ssr: false, // load only on client
});

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        {/* <h1>Welcome to your dashboard, {session.email}</h1> */}
        <UserList />
         <HeavyComponent />
      </div>
    </main>
  );
}
