interface Props {
  title: string;
  value: string | number;
}

const DashboardCard: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
      <div>
        <h4 className="text-gray-500">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
