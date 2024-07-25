import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Preview.module.css";

const Preview: NextPage = () => {
  const router = useRouter();
  const handleEditor = () => {
    router.push("/empty");
  };

  return (
    <div className={styles.Preview}>
      <div className={styles.button}>
        <div className={styles.tutustuKokoTarinaamme}>
          tutustu koko tarinaamme
        </div>
      </div>
      <div className={styles.PreviewChild} />
      <div className={styles.PreviewInner}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/images/Ellipse-3.png"
            />
            <div className={styles.benWrightParent}>
              <b className={styles.benWright}>Ben Wright</b>
              <div className={styles.benexamplecom}>ben@example.com</div>
            </div>
          </div>
          <div className={styles.publishParent}>
            <div className={styles.publish}>
              <img
                className={styles.teenyiconsgithubSolid}
                alt=""
                src="/images/teenyicons_github-solid.png"
              />
              <div className={styles.github}>GitHub</div>
              <img
                className={styles.mdiarrowRightIcon}
                alt=""
                src="/images/mdi_arrow-right.png"
              />
            </div>
            <div className={styles.publish1}>
              <img
                className={styles.teenyiconsgithubSolid}
                alt=""
                src="/images/ri_youtube-fill.png"
              />
              <div className={styles.github}>YouTube</div>
              <img
                className={styles.mdiarrowRightIcon}
                alt=""
                src="/images/mdi_arrow-right.png"
              />
            </div>
            <div className={styles.publish2}>
              <img
                className={styles.teenyiconsgithubSolid}
                alt=""
                src="/images/mdi_linkedin.png"
              />
              <div className={styles.github}>LinkedIn</div>
              <img
                className={styles.mdiarrowRightIcon}
                alt=""
                src="/images/mdi_arrow-right.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper}>
          <div className={styles.publishGroup}>
            <div className={styles.publish3}>
              <div className={styles.previewWrapper}>
                <div className={styles.preview} onClick={handleEditor}>
                  Back to Editor
                </div>
              </div>
            </div>
            <div className={styles.profileDetailsParent}>
              <div className={styles.profileDetails}>
                <img
                  className={styles.teenyiconsgithubSolid}
                  alt=""
                  src="/phdevicemobilecamerabold.svg"
                />
                <div className={styles.mobile}>Mobile</div>
              </div>
              <div className={styles.profileDetails}>
                <img
                  className={styles.teenyiconsgithubSolid}
                  alt=""
                  src="/phdevicetabletbold.svg"
                />
                <div className={styles.mobile}>Tablet</div>
              </div>
              <div className={styles.links}>
                <img
                  className={styles.teenyiconsgithubSolid}
                  alt=""
                  src="/phdesktopbold.svg"
                />
                <div className={styles.mobile}>Desktop</div>
              </div>
            </div>
            <div className={styles.publish4}>
              <div className={styles.shareLinkWrapper}>
                <div className={styles.preview}>Share Link</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
