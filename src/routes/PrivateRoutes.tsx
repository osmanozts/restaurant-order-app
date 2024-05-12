import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";

type PrivateRoutesProps = {
  onLogOut: () => void;
};

export const PrivateRoutes = ({ onLogOut }: PrivateRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage onLogOut={onLogOut} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
