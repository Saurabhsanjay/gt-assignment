
import styles from '../styles/Testimonials.module.css'
import quote from '../assets/fe_quote-left.svg'
import img4 from '../assets/imagegroup/img4.svg'
import img3 from '../assets/imagegroup/img3.svg'
import round from '../assets/100.png'

import model from '../assets/model.png'
const Testimonials: React.FC = () => {
  return (
    <>
    <div className={styles.heading}>

    <h1>Testimonials</h1>
    </div>
      <section>
        <div className={styles["grid-container"]}>
          <div className={styles.item1}>
            <img width="158px" src={round} alt="" />
            <p>of influencers reported a boost in their links.</p>
          </div>
          <div className={styles.item2}>
            <span className={styles.quoteimage}>
              <img src={quote} alt=";;" />
            </span>
            <span>
              <p className={styles.quote}>
                Whether it's my latest YouTube videos, course links, or social
                media profiles, brings it all together in one place, allowing my
                audience a seamless browsing experience.
              </p>
            </span>
          </div>

          <div className={styles.item3}>
            <div className={styles.child}>
              <span className={styles.quoteimage}>
                <img src={quote} alt=";;" />
              </span>
              <span>
                <p className={styles.quote}>
                  customizable features allow me to showcase my work in an
                  enticing manner. No more boring links in bio lists!
                </p>
              </span>
            </div>
            <div>
              <img width="70px" src={img4} alt="img4" />

              <span className={styles.model_name}>
                <h3>Amit Singh</h3>
                <p>Tech Creator</p>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.grid_container2}>
          <div className={styles.items}>
            <div className={styles.quoteimg}>
              <img src={quote} alt=";;" />
              <p>
                My Wall truly feels like an extension of my personal brand with
                so many link options to add. The statistics provided by add
                valuable insights into my audience's preferences, enabling me to
                deliver exactly what they crave. 
              </p>
              <div className={styles.models}>
                <img src={img3} alt="img3" />
                <span>
                  <h3>Vidhi Kumari</h3>
                  <p>Lifestyle Creator</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            {" "}
            <div className={styles.quoteimg}>
              <img src={quote} alt=";;" />
              <p>
                I must say this was a life-changing course for me. Understanding
                the things which TRULY make me happy helped me identify the
                tasks that I should be focusing on for achieving.
              </p>
              <div className={styles.models}>
                <img src={img3} alt="img3" />
                <span>
                  <h3>Shalini Verma</h3>
                  <p>Lifestyle Creator</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.items}>
            {" "}
            <div className={styles.quoteimg}>
              <img src={quote} alt=";;" />
              <p>
                With a single link, I can effortlessly add my latest trends,
                tips, and behind-the-scenes glimpses into my social world. The
                customization options provided by Faym allow me to create an
                attractive landing page that truly reflects my taste.
              </p>
              <div className={styles.models}>
                <img src={img3} alt="img5" />
                <span>
                  <h3>Vikashi Singh</h3>
                  <p>Beauty Creator</p>
                </span>
              </div>
            </div>
            <div className={styles.modelImg}>
              <img src={model} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
