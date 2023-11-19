import intro from "../data/Intro";

const Introduction = () => {
  return (
    <div>
      <p>{intro[0]}</p>
      <p>{intro[1]}</p>
    </div>
  );
};

export default Introduction;
