import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Profile.module.css";
import Image from "next/image";

const Profile: NextPage = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push("/addedlink");
  };
  const handlePreview = () => {
    router.push("/preview");
  };
  return (
    <div className={styles.Profile}>
      <div className={styles.ProfileInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.solarlinkCircleBoldParent}>
              <Image
                className={styles.solarlinkCircleBoldIcon}
                alt=""
                src="/images/solar_link-circle-bold.png"
              />
              <Image
                className={styles.devlinksIcon}
                alt=""
                src="/images/devlinks.png"
              />
            </div>
            <div className={styles.profileDetailsParent}>
              <div className={styles.profileDetails}>
                <Image
                  className={styles.phlinkBoldIcon}
                  alt=""
                  src="/images/ph_link-bold.png"
                />
                <div className={styles.linksLinks} onClick={handleLink}>
                  <span className={styles.linkText}>Links</span>
                </div>
              </div>
              <div className={styles.links1}>
                <Image
                  className={styles.phlinkBoldIcon}
                  alt=""
                  src="/images/ph_user-circle-bold.png"
                />
                <div className={styles.profileText}>Profile Details</div>
              </div>
            </div>
            <div className={styles.publish}>
              <div className={styles.previewWrapper}>
                <div className={styles.previewLink} onClick={handlePreview}>
                  <span className={styles.text}>Preview</span>
                  <Image
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
            <Image
              className={styles.previewSectionChild}
              alt=""
              src="/rectangle-15.svg"
            />
            <Image className={styles.subtractIcon} alt="" src="/subtract.svg" />
            <div className={styles.frameGroup}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <div className={styles.publishParent}>
                <div className={styles.publish1}>
                  <Image
                    className={styles.teenyiconsgithubSolid}
                    alt=""
                    src="/images/teenyicons_github-solid.png"
                  />
                  <div className={styles.github}>GitHub</div>
                  <Image
                    className={styles.teenyiconsgithubSolid}
                    alt=""
                    src="/images/mdi_arrow-right.png"
                  />
                </div>
                <div className={styles.publish2}>
                  <Image
                    className={styles.teenyiconsgithubSolid}
                    alt=""
                    src="/images/ri_youtube-fill.png"
                  />
                  <div className={styles.github}>YouTube</div>
                  <Image
                    className={styles.teenyiconsgithubSolid}
                    alt=""
                    src="/images/mdi_arrow-right.png"
                  />
                </div>
                <div className={styles.publish3}>
                  <Image
                    className={styles.teenyiconsgithubSolid}
                    alt=""
                    src="/images/mdi_linkedin.png"
                  />
                  <div className={styles.github}>LinkedIn</div>
                  <Image
                    className={styles.teenyiconsgithubSolid}
                    alt=""
                    src="/images/mdi_arrow-right.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.profileDetailsGroup}>
              <div className={styles.profileDetails2}>Profile Details</div>
              <div className={styles.addYourDetails}>
                Add your details to create a personal touch to your profile.
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.profilePictureParent}>
                  <p className={styles.profilePicture}>Profile picture</p>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.phimageParent}>
                        <Image
                          className={styles.phimageIcon}
                          alt=""
                          src="/images/ph_image.png"
                        />
                        <p className={styles.links}>Change Image</p>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.phimageGroup}>
                        <Image
                          className={styles.phimageIcon}
                          alt=""
                          src="/images/ph_image.png"
                        />
                        <div className={styles.links}>+ Upload Image</div>
                      </div>
                    </div>
                    <div className={styles.imageMustBe}>
                      Image must be below 1024x1024px. Use PNG or JPG format.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.profilePictureParent}>
                  <div className={styles.profilePicture}>First name*</div>
                  <div className={styles.egJohnWrapper}>
                    <div className={styles.egJohn}>e.g. John</div>
                  </div>
                </div>
                <div className={styles.profilePictureParent}>
                  <div className={styles.profilePicture}>Last name*</div>
                  <div className={styles.egJohnWrapper}>
                    <div className={styles.egJohn}>e.g. Appleseed</div>
                  </div>
                </div>
                <div className={styles.profilePictureParent}>
                  <div className={styles.profilePicture}>Email</div>
                  <div className={styles.egJohnWrapper}>
                    <div className={styles.egJohn}>e.g. email@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <div className={styles.publishWrapper}>
              <div className={styles.publish4}>
                <div className={styles.saveWrapper}>
                  <div className={styles.previewSave}>Save</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.tutustuKokoTarinaamme}>
          tutustu koko tarinaamme
        </div>
      </div>
    </div>
  );
};

export default Profile;
