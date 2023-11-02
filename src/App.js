
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AboutPage,
  HomePage,
  FeaturesPage,
  ContactPage,
  LoginPage,
  SignUpPage,

} from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"
          // element={<Layout />}
          >
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />


            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
