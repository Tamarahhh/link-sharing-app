import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Empty.module.css";

const Empty: NextPage = () => {
  const router = useRouter();
  const handleProfile = () => {
    router.push("/profile");
  };
  const handlePreview = () => {
    router.push("/preview");
  };

  return (
    <div className={styles.desktopEmpty}>
      <div className={styles.desktopEmptyInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.solarlinkCircleBoldParent}>
              <img
                className={styles.solarlinkCircleBoldIcon}
                alt=""
                src="/images/solar_link-circle-bold.png"
              />
              <img
                className={styles.devlinksIcon}
                alt=""
                src="/images/devlinks.png"
              />
            </div>
            <div className={styles.linksParent}>
              <div className={styles.links}>
                <img
                  className={styles.phlinkBoldIcon}
                  alt=""
                  src="/images/ph_link-bold.png"
                />
                <div className={styles.linkText}>Links</div>
              </div>
              <div className={styles.profileDetails} onClick={handleProfile}>
                <img
                  className={styles.phlinkBoldIcon}
                  alt=""
                  src="/images/ph_user-circle-bold.png"
                />
                <div className={styles.links1}>
                  <span className={styles.profileText}>Profile Details</span>
                </div>
              </div>
            </div>
            <div className={styles.publish}>
              <div className={styles.previewWrapper}>
                <div className={styles.preview} onClick={handlePreview}>
                  <span className={styles.text}>Preview</span>
                  <img
                    className={styles.phpreviewBoldIcon}
                    alt=""
                    src="/images/ph_eye-bold.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.previewSectionWrapper}>
          <div className={styles.previewSection}>
            <img
              className={styles.previewSectionChild}
              alt=""
              src="/rectangle-15.svg"
            />
            <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            <div className={styles.frameGroup}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.customizeYourLinksParent}>
              <h2 className={styles.customizeYourLinks}>
                Customize your links
              </h2>
              <h3 className={styles.addeditremoveLinksBelow}>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </h3>
            </div>
            <div className={styles.publishParent}>
              <div className={styles.publish1}>
                <div className={styles.previewContainer}>
                  <p className={styles.previewLink}>+ Add new link</p>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/images/group-273.png"
                  />
                  <div className={styles.letsGetYouStartedParent}>
                    <b className={styles.letsGetYou}>Let’s get you started</b>
                    <p className={styles.useTheAdd}>
                      Use the “Add new link” button to get started. Once you
                      have more than one link, you can reorder and edit them.
                      We’re here to help you share your profiles with everyone!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild5} />
            <div className={styles.publishWrapper}>
              <div className={styles.publish2}>
                <div className={styles.saveWrapper}>
                  <div className={styles.previewSave}>Save</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
