import React, { useState } from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo, Alert } from "../components/";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const { user, isLoading, loginUser } = useAppContext();
  const [showRedirectingAlert, setShowRedirectingAlert] = useState(false);

  useEffect(() => {
    if (user) {
      setShowRedirectingAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Meet JobScribe - the job tracking wingman you never knew you needed!
            It's like having a personal assistant to keep you organized
            throughout your job application journey - from applications to
            interviews, and even those all-important follow-ups. Try it out
            today and stay organized while finding your next dream job!
          </p>
          <div className="button-group">
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
            <button
              type="button"
              className="btn btn-hero"
              disabled={isLoading}
              onClick={() => {
                loginUser({
                  email: "test@test.com",
                  password: "hitest",
                });
              }}
            >
              {isLoading ? "Loading..." : "Demo App"}
            </button>
          </div>
          {showRedirectingAlert && (
            <Alert
              type="success"
              message="Login successful! Redirecting..."
              className="redirecting-alert"
            />
          )}
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
