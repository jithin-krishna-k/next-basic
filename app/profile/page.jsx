import { getSession } from "../lib/session";

export default async function Profile() {
  // const session = await getSession();

  const token =
    "14f22e730ecbb270be6c7147d2982664ccd9b343d7e43b8386e8be9a9057ec5da2d9e841592379ee1c3bdccf395a61ffd35efa20e796c326263eda67ef529de8adeaefb50d3aab555df0b30f381dab1b28b0c0a9dea6b4dc6d363ae8992af5fcfeea7bcd5b7eb451bc43d4dfd52b4ab7d49d305e3ee311e129593abd18e9b355"; // replace with actual token

  const res = await fetch(
    "http://localhost:1337/api/services?populate=user_profile",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const servicesData = await res.json();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 gap-6">
      <h1 className="font-bold text-xl">Hello, {"Guest"}</h1>
      <h2 className="text-lg font-semibold">Services List:</h2>

      <div className="w-full max-w-2xl space-y-4">
        {servicesData.data.map((service) => {
          const { id, title, description, price, user_profile } = service;

          return (
            <>
              <div
                key={id}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <h3 className="font-bold text-md">{title}</h3>
                <p className="text-sm">{description}</p>
                <p className="text-sm font-semibold">Price: ₹{price}</p>

                {user_profile?.username ? (
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Consultant Name: {user_profile.username}</p>
                    <p>Email: {user_profile.email}</p>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-gray-400">No data</p>
                )}

                {service.user_profile.skills.map((skill, index) => {
                  return (
                    <div key={index} className="flex gap-2">
                      {skill}
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
