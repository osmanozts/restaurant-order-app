import { redirect, useNavigate } from "react-router-dom";
import { signOut } from "../actions";

type HomePageProps = {
  onLogOut: () => void;
};

export const HomePage = ({ onLogOut }: HomePageProps) => {
  return (
    <div className="page">
      <h1>HomePage</h1>
      <button
        onClick={() => {
          signOut();
          onLogOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};
