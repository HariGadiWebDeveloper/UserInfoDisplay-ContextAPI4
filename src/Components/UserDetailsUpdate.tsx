import React, { useState } from "react";
import { userContext } from "../Context/UserDetailsContext";

interface FormData {
  full_name: string;
  mobile_no: string;
  email: string;
}
const UserDetailsUpdate: React.FC = () => {
  const { setUserData } = userContext();
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    mobile_no: "",
    email: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event?.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateContextData = () => {
    setUserData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };
  return (
    <div className="flex flex-row gap-3">
      <input
        name="full_name"
        value={formData?.full_name}
        onChange={handleChange}
        placeholder="Full Name"
        className="border border-gray-500 p-4 rounded-md"
      />
      <input
        name="mobile_no"
        value={formData?.mobile_no}
        onChange={handleChange}
        type="number"
        maxLength={10}
        placeholder="Mobile Number"
        className="border border-gray-500 p-4 rounded-md"
      />
      <input
        name="email"
        value={formData?.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="border border-gray-500 p-4 rounded-md"
      />
      <button
        className="cursor-pointer bg-blue-500 px-6 py-4 rounded-lg text-white"
        onClick={handleUpdateContextData}
      >
        Add
      </button>
    </div>
  );
};

export default UserDetailsUpdate;
