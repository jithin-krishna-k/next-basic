import { redirect } from "next/navigation";
import React from "react";

const CheckSession = ({ session }) => {
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div>
      {session.email && (
        <div className=" font-bold text-md ">Welcome to ,{session.email}</div>
      )}
    </div>
  );
};

export default CheckSession;
