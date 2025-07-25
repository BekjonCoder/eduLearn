import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Lesson {
  id: number;
  title: string;
  description: string;
  path: string;
}

const CourseCard: React.FC = () => {
  const navigate = useNavigate();

  const courses: Lesson[] = [
    {
  id: 1,
  title: "English Spelling Mastery",
  description: "Test your ability to spell English words accurately and confidently.",
  path: "english",
},
{
  id: 2,
  title: "French Language Challenges",
  description: "Assess your understanding and skills in French with these focused tests.",
  path: "french",
},
{
  id: 3,
  title: "German Language Assessments",
  description: "Evaluate your German language knowledge through these comprehensive tests.",
  path: "german",
},

  ];

  const handleClick = (course: Lesson) => {
    localStorage.setItem("SelectedCourse", JSON.stringify(course));
    navigate(`/levels/${course.path}`);
  };

  return (
    <>
      {courses.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow rounded-xl p-4 flex justify-between gap-3 mb-[2rem] hover:shadow-lg transition duration-300 cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
          <Button type="primary" onClick={() => handleClick(item)}>
            Let's go 😀
          </Button>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
