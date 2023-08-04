
import styles from '../styles/Dashboard.module.css'
import image from '../assets/box-img.png'
import image1 from '../assets/imagegroup/img1.svg'
import image2 from '../assets/imagegroup/img2.svg'
import image3 from '../assets/imagegroup/img3.svg'
import image4 from '../assets/imagegroup/img4.svg'
 const imageUrls = [
   image1,
   image2,
   image3,
   image4,
  
 ];

const Dashboard: React.FC = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <div>
          <h6>Platform for creators</h6>
          <h6>to showcase</h6>

          <h1>Digital products</h1>
          <p>
            Create your Wall to recommend & share APPS, COURSES, E-BOOKS, GAMES,
            PODCASTS AND MUCH MORE!​
          </p>

          <button>Build your Wall</button>

          <div className={styles.imageContainer}>
            {imageUrls?.map((el, index) => (
              <img
                width="100px"
                key={index}
                src={el}
                alt={`Image ${index + 1}`}
                className={styles.roundimage}
              />
            ))}
          </div>
        </div>

        <div className={styles.heroContainer2}>
          <img src={image} alt="error" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard
