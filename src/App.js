import {
  Route,
  Routes,
} from "react-router-dom";
import SharedLayout from "./views/SharedLayout";
import HomePage from "./views/HomePage";
import MenuPage from "./views/MenuPage";
import AfishaPage from "./views/AfishaPage";
import ProfilePage from "./views/ProfilePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="/menu"
            element={<MenuPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/afisha"
            element={<AfishaPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="*"
            element={
              <div>NotFound </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
