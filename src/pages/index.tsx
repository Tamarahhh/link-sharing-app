import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Index.module.css";
import Image from "next/image";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      setHasError(false);
      router.push("/empty");
    } else {
      setHasError(true);
    }
  };

  const handleCreateAccount = () => {
    router.push("/create-account");
  };

  return (
    <div className={styles.desktopLogin}>
      <div className={styles.groupParent}>
        <div className={styles.solarlinkCircleBoldParent}>
          <Image
            className={styles.solarlinkCircleBoldIcon}
            alt="Solarlink Circle Bold"
            src="/images/solar_link-circle-bold.png"
          />
          <Image
            className={styles.devlinksIcon}
            alt="Devlinks"
            src="/images/devlinks.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.loginParent}>
              <b className={styles.login}>Login</b>
              <div className={styles.addYourDetails}>
                Add your details below to get back into the app
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.emailAddressParent}>
                <label htmlFor="email" className={styles.emailAddress}>
                  Email address
                </label>
                <div className={styles.phenvelopeSimpleFillParent}>
                  <Image
                    className={styles.phenvelopeSimpleFillIcon}
                    alt="Envelope Icon"
                    src="/images/ph_envelope-simple-fill.svg"
                  />
                  <input
                    type="email"
                    id="email"
                    className={styles.inputField}
                    placeholder="e.g. alex@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Image
                    className={styles.frameChild}
                    alt=""
                    src="/images/vector-1.svg"
                  />
                </div>
              </div>
              <div className={styles.emailAddressParent}>
                <label htmlFor="password" className={styles.emailAddress}>
                  Password
                </label>
                <div className={styles.phlockKeyFillParent}>
                  <Image
                    className={styles.phenvelopeSimpleFillIcon}
                    alt="Lock Icon"
                    src="/images/ph_lock-key-fill.svg"
                  />
                  <input
                    type="password"
                    id="password"
                    className={styles.inputField}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={handleLogin} className={styles.publish}>
                <div className={styles.loginWrapper}>
                  <div className={styles.login1}>Login</div>
                </div>
              </button>
              <div className={styles.dontHaveAnContainer}>
                <span>Don’t have an account? </span>
                <span
                  className={styles.createAccountLink}
                  onClick={handleCreateAccount}
                >
                  Create an account
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
