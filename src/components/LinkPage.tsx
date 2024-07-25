import { useState } from "react";
import type { NextPage } from "next";
import AddedLink from "../pages/addedlink";
import styles from "./LinksPage.module.css";

const LinksPage: NextPage = () => {
  const [links, setLinks] = useState<{ platform: string; url: string }[]>([]);

  const handleAddLink = () => {
    const newLink = {
      platform: "GitHub",
      url: "https://www.github.com/elonmusk",
    };
    setLinks([...links, newLink]);
  };

  return (
    <div className={styles.linksPage}>
      {links.length === 0 ? (
        <div className={styles.emptyState}>
          <button onClick={handleAddLink}>Add Link</button>
        </div>
      ) : (
        <AddedLink links={links} />
      )}
    </div>
  );
};

export default LinksPage;
