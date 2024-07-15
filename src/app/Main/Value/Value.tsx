"use client";

import Section from "@/app/components/Section";
import styles from "./value.module.css";
import Highlight from "@/app/components/Highlight";
import Image from "next/image";
import img1 from "../../../../public/assets/img/value/1.webp";
import img2 from "../../../../public/assets/img/value/2.webp";
import img3 from "../../../../public/assets/img/value/3.webp";
import stripImg from "../../../../public/assets/img/value/microscope.webp";
import { useState } from "react";

const Value = () => {
  const [activeImg, setActiveImg] = useState<number>(0);

  const images = [img1, img2, img3];

  const stripInfo = [
    {
      title: "Optimal performance",
      description: (
        <p>
          "In all dental and <br /> medical equipment <br /> repair."
        </p>
      ),
    },
    {
      title: (
        <p>
          Well-
          <br /> trained
        </p>
      ),
      description:
        "Our Service Technicians are the best because we know the importance",
    },
    {
      title: "Full-Service dealership",
      description:
        "We arrive at your office fully stocked with supplies from most manufacturers.",
    },
  ];

  return (
    <Section
      title={
        <h2>
          Our <Highlight color="secondary">value offer</Highlight>
        </h2>
      }
    >
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            We guarantee an{" "}
            <Highlight color="secondary">agile and cost-effective</Highlight>{" "}
            actions
          </h3>
          <p className={styles.description}>
            We’re specialists <b>in dental and medical equipment repair</b>, our
            service will be received as soon as possible and most work will be
            done on-site using high quality parts.
          </p>
          <div className={styles.row}>
            <p>Health care products</p>
            <p>Medical Equipment</p>
            <p>Technical service</p>
          </div>
        </div>
        <div className={styles.images}>
          {images.map((img, index) => (
            <div
              style={{ width: activeImg === index ? "50%" : "25%" }}
              className={styles.imageContainer}
              onClick={() => setActiveImg(index)}
            >
              <Image src={img} alt={"img" + index} style={{ width: "100%" }} />
              <div
                className={styles.background}
                style={{
                  background:
                    activeImg === index ? "var(--color-secondary)" : "#C9CAC9",
                }}
              ></div>
              <p
                style={{
                  opacity: activeImg === index ? 1 : 0,
                }}
              >
                High Quality
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stripContainer}>
        <div className={styles.strip}>
          <Image src={stripImg} alt="strip-image" />
          <div className={styles.stripTextContainer}>
            {stripInfo.map((info, index) => (
              <div key={index} className={styles.stripText}>
                <div className={styles.stripHeading}>{info.title}</div>
                <p className={styles.stripDescription}>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Value;