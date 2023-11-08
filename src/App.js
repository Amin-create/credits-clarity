
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AboutPage,
  HomePage,
  FeaturesPage, ForgotPasswordPage,
  ContactPage,
  LoginPage,
  SignUpPage,
  TermsAndConditionsPage,
  PrivacyPolicyPage
} from "./pages/index";

function App() {
  return (
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
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
