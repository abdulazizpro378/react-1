import React from "react";
import styles from "./Footer.module.css";
import footer from "..//..//assets/images/footer.svg";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <section>
        <div className="container">
          <div className={styles["footer-row"]}>
            <div className="card-footer">
              <h1 className={styles["card-footer-h1"]}>
                Quality cleaning for your home
              </h1>
              <p className={styles["card-footer-p"]}>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className={styles["person-empty"]}>
                <div className={styles["empty"]}></div>
                <div className={styles["empty"]}></div>
                <div className={styles["empty"]}></div>
                <div className={styles["empty"]}></div>
                <div className={styles["empty"]}></div>
              </div>
            </div>
            <div className="card-3">
              <span className={styles["card-3-span"]}> Contact us</span>
              <p className={styles["card-3-p"]}>
                {" "}
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </p>

              <h6 className={styles["card-sapa"]}>(414) 567 - 2109</h6>
              <h6 className={styles["card-sapa"]}> contact@cleaning.com</h6>
            </div>
            <div className="card-4">
              <h1 className={styles["card-4-h1"]}>Hours</h1>
              <h4 className={styles["card-4-h4"]}>Monday to Friday</h4>
              <span className={styles["card-4-span"]}>6:00 AM - 9:00 PM</span>
              <h4 className={styles["card-4-h4"]}>Saturday & Sunday</h4>
              <span className={styles["card-4-span"]}>8:00 AM - 8:00 PM</span>
            </div>
            <div className="card-end">
              <h1 className={styles["card-end-h1"]}>Get a free estimate</h1>
              <span className={styles["card-end-span4"]}>(414) 567 - 2109</span>
              <p className={styles["card-sapa"]}>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <button className={styles["card-end-btn"]}>
                Request a free quote
              </button>
            </div>
          </div>

          <div className={styles["footer-bootom"]}>
            <img src={footer} alt="footer" />
            <div className={styles['footer-bootom-2']}>
              <h4 className={styles['footer-end ']}>Copyright © Cleaning X | Designed by</h4>
              <h6 className={styles['footer-a']}>BRIX Templates</h6>
              <span className={styles['footer-a']}>  - Powered by</span>
              <span>Webflow</span>
              <span className={styles['footer-a']}>  - Powered by</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
