import React from "react";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const LevelPage: React.FC = () => {
  const navigate = useNavigate();
  const { coursePath } = useParams<{ coursePath: string }>();

  const levels = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleLevelClick = (level: number) => {
    navigate(`/course/${coursePath}/level/${level}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">
        {coursePath?.toUpperCase()} Levels
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {levels.map((level) => (
          <div
            key={level}
            className="bg-white shadow rounded p-4 flex justify-between items-center"
          >
            <p className="text-lg font-semibold">Level {level}</p>
            <Button type="primary" onClick={() => handleLevelClick(level)}>
              Start Level {level}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
