import type { NextPage } from "next";
import styles from "../styles/AddedLink.module.css";
import Image from "next/image";

const AddedLink: NextPage<{
  links: { platform: string; url: string }[];
}> = ({ links }) => {
  return (
    <div className={styles.AddedLink}>
      <div className={styles.AddedLinkInner}>
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
                src="/devlinks.svg"
              />
            </div>
            <div className={styles.linksParent}>
              <div className={styles.links}>
                <Image
                  className={styles.phlinkBoldIcon}
                  alt=""
                  src="/images/ph_link-bold.png"
                />
                <div className={styles.links1}>Links</div>
              </div>
              <div className={styles.profileDetails}>
                <Image
                  className={styles.phlinkBoldIcon}
                  alt=""
                  src="/phusercirclebold.svg"
                />
                <div className={styles.links1}>Profile Details</div>
              </div>
            </div>
            <div className={styles.publish}>
              <div className={styles.previewWrapper}>
                <div className={styles.preview}>Preview</div>
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
                {links.map((link, index) => (
                  <div key={index}>
                    <div className={styles.publish1}>
                      <Image
                        className={styles.teenyiconsgithubSolid}
                        alt=""
                        src={`/teenyicons${link.platform}solid.svg`}
                      />
                      <div className={styles.github}>{link.platform}</div>
                      <Image
                        className={styles.teenyiconsgithubSolid}
                        alt=""
                        src="/mdiarrowright.svg"
                      />
                    </div>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleDiv} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.customizeYourLinksParent}>
              <b className={styles.customizeYourLinks}>Customize your links</b>
              <div className={styles.addeditremoveLinksBelow}>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </div>
            </div>
            <div className={styles.publishGroup}>
              <div className={styles.publish2}>
                <div className={styles.previewContainer}>
                  <div className={styles.preview}>+ Add new link</div>
                </div>
              </div>
              {links.map((link, index) => (
                <div className={styles.frameParent1} key={index}>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameChild4} />
                        <div className={styles.frameChild4} />
                      </div>
                      <b className={styles.remove}>{`Link #${index + 1}`}</b>
                    </div>
                    <div className={styles.remove}>Remove</div>
                  </div>
                  <div className={styles.teenyiconsgithubSolidParent}>
                    <Image
                      className={styles.teenyiconsgithubSolid}
                      alt=""
                      src={`/teenyicons${link.platform}solid.svg`}
                    />
                    <div className={styles.github}>{link.platform}</div>
                    <Image
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className={styles.teenyiconsgithubSolidParent}>
                    <Image
                      className={styles.teenyiconsgithubSolid}
                      alt=""
                      src="/ph_link-bold.png"
                    />
                    <a
                      className={styles.httpswwwgithubcomelonmus}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.url}
                    </a>
                  </div>
                  <div className={styles.platformParent}>
                    <div className={styles.platform}>Platform</div>
                    <div className={styles.teenyiconsgithubSolidGroup}>
                      <Image
                        className={styles.teenyiconsgithubSolid}
                        alt=""
                        src={`/teenyicons${link.platform}solid.svg`}
                      />
                      <div className={styles.github}>{link.platform}</div>
                      <Image
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.platformParent}>
                    <div className={styles.platform}>Link</div>
                    <div className={styles.teenyiconsgithubSolidGroup}>
                      <Image
                        className={styles.teenyiconsgithubSolid}
                        alt=""
                        src="/phlinkbold2.svg"
                      />
                      <div className={styles.egHttpswwwgithubcomjo}>
                        e.g. https://www.github.com/johnappleseed
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild7} />
            <div className={styles.publishWrapper}>
              <div className={styles.publish3}>
                <div className={styles.saveWrapper}>
                  <div className={styles.preview}>Save</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedLink;
