import { Route, Routes } from "react-router-dom";
import SharedLayout from "./views/SharedLayout/SharedLayout";
import HomePage from "./views/HomePage";
import MenuPage from "./views/MenuPage";
import ProfilePage from "./views/ProfilePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import PostersPage from "./views/PostersPage";
import GalleryPage from "./views/GalleryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/posters"
            element={<PostersPage />}
          />
          <Route
            path="/gallery"
            element={<GalleryPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route path="*" element={<div>NotFound </div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
