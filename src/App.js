
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AboutPage,
  HomePage,
  FeaturesPage, ForgotPasswordPage,
  ContactPage,
  LoginPage,
  SignUpPage,
  TermsOfConditionsPage,
  PrivacyPolicyPage,
  Dashboard
} from "./pages/index";
import { DashboardLayout } from "./components/layout";

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
          <Route path="terms-of-conditions" element={<TermsOfConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        
        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* 
            Add other dashboard routes here, 
            nested under the "dashboard" path 
          */}
          {/* Example: */}
          {/* <Route path="manage-profile" element={<ManageProfile />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
