import { useContext } from "react";
import { LevelContext } from "../services/LevelContext";

export default ({ children, onClick }) => {
  const { level } = useContext(LevelContext);
  return (
    <button className="pokemon__pagination" onClick={onClick}>
      {children} {level}
    </button>
  );
};
