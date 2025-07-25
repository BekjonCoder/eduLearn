import React from "react";
import { useUser } from "../context/UserContex";

const Profile: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* boshqa user info */}
    </div>
  );
};

export default Profile;
