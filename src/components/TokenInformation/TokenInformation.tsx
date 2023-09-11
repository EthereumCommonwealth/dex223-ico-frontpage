import React from "react";
import styles from "./TokenInformation.module.scss";
import ArticleTitle from "../ArticleTitle";
import clsx from "clsx";
import Image from "next/image";
import ArticleHeading from "../ArticleHeading";
import Text from "../atoms/Text";
import Spacer from "../atoms/Spacer";

export default function TokenInformation() {
  return <div className={clsx(styles.aboutTheProject, "container")}>
    <div className={styles.leftPart}>

    </div>
    <div className={styles.textBlock}>
      <ArticleTitle text="info" />
      <ArticleHeading text="Token information" />
      <Text variant={20} color="secondary">
        Delve into the key aspects of token information,
        from supply and distribution to utility and governance.
      </Text>
      <Spacer height={24}/>
      <div className={styles.info}>

      </div>
    </div>
  </div>;
}
