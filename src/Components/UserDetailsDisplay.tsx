import React from "react";
import { userContext } from "../Context/UserDetailsContext";

const UserDetailsDisplay: React.FC = () => {
  const { userData } = userContext();

  return userData?.full_name ? (
    <div className="flex flex-col p-4 border border-blue-400 rounded-lg w-[50%]">
      <div className="flex flex-row gap-4 items-center">
        <h3 className="font-bold text-[28px] text-blue-600">Full Name :</h3>
        <span className="font-bold text-[20px] text-blue-300">{userData?.full_name ?? "-"}</span>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h3 className="font-bold text-[28px] text-blue-600">Mobile Number :</h3>
        <span className="font-bold text-[20px] text-blue-300">{userData?.mobile_no ?? "-"}</span>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h3 className="font-bold text-[28px] text-blue-600">Email :</h3>
        <span className="font-bold text-[20px] text-blue-300">{userData?.email ?? "-"}</span>
      </div>
    </div>
  ) : (
    "User Details Not Available!"
  );
};

export default UserDetailsDisplay;
