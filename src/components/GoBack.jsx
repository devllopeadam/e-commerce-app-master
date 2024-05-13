import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button
      onClick={goBack}
      className="text-accent-grey hover:underline transition-all text-left duration-300">
      Go Back
    </button>
  );
};

export default GoBack;
