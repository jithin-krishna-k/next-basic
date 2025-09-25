import { getSession } from "../lib/session";

export default async function Profile() {
  const session = await getSession();

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className=" font-bold text-md">Hello, {session.email}</h1>
    </div>
  );
}
