import React from "react";
import { Card, Table } from "antd";
import { useUser } from "../context/UserContex";

const Dashboard: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Please login to view your dashboard.</p>
      </div>
    );
  }

  // 📝 Fake reading schedule data
  const readingData = [
    {
      key: "1",
      date: "25 July 2025",
      topic: "Unit 1: English Spelling",
      status: "Completed",
    },
    {
      key: "2",
      date: "26 July 2025",
      topic: "Unit 2: French Basics",
      status: "Pending",
    },
    {
      key: "3",
      date: "27 July 2025",
      topic: "Unit 3: German Greetings",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Card className="mb-6">
        <div className="flex items-center gap-6">
          <img
            src={user.avatar}
            alt="User avatar"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </Card>

      <Card title="📚 Your Reading Schedule">
        <Table
          dataSource={readingData}
          columns={columns}
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
