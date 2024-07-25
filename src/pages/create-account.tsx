import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Create.module.css";

const CreateAccount: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = async () => {
    if (password === confirmPassword) {
      router.push("/empty");
    } else {
      alert("Passwords do not match");
    }
  };

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className={styles.CreateAccount}>
      <div className={styles.button}>
        <div className={styles.tutustuKokoTarinaamme}>
          tutustu koko tarinaamme
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.solarlinkCircleBoldParent}>
          <img
            className={styles.solarlinkCircleBoldIcon}
            alt="Solarlink Circle Bold"
            src="/images/solarlinkcirclebold.png"
          />
          <img
            className={styles.devlinksIcon}
            alt="Devlinks"
            src="/images/devlinks.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.createAccountParent}>
              <b className={styles.createAccount}>Create account</b>
              <div className={styles.letsGetYou}>
                Let’s get you started sharing your links!
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.emailAddressParent}>
                <label htmlFor="email" className={styles.emailAddress}>
                  Email address
                </label>
                <div className={styles.phenvelopeSimpleFillParent}>
                  <img
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
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className={styles.emailAddressParent}>
                <label htmlFor="password" className={styles.emailAddress}>
                  Create password
                </label>
                <div className={styles.phlockKeyFillParent}>
                  <img
                    className={styles.phenvelopeSimpleFillIcon}
                    alt="Lock Icon"
                    src="/ph_lock-key-fill.svg"
                  />
                  <input
                    type="password"
                    id="password"
                    className={styles.inputField}
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.emailAddressParent}>
                <label
                  htmlFor="confirm-password"
                  className={styles.emailAddress}
                >
                  Confirm password
                </label>
                <div className={styles.phlockKeyFillParent}>
                  <img
                    className={styles.phenvelopeSimpleFillIcon}
                    alt="Lock Icon"
                    src="/ph_lock-key-fill.svg"
                  />
                  <input
                    type="password"
                    id="confirm-password"
                    className={styles.inputField}
                    placeholder="At least 8 characters"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.passwordMustContain}>
                Password must contain at least 8 characters
              </div>
              <button onClick={handleCreateAccount} className={styles.publish}>
                <div className={styles.createNewAccountWrapper}>
                  <div className={styles.createNewAccount}>
                    Create new account
                  </div>
                </div>
              </button>
              <div className={styles.alreadyHaveAnContainer}>
                <span>Already have an account? </span>
                <span className={styles.login} onClick={handleLogin}>
                  Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
