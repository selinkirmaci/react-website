import React from 'react';
import './Slideshow.css';



const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const urls = ["/images/img1.png", "/images/img2.png", "/images/img3.png"];

const delay = 3500;

function Slideshow(props) {

  const imgArray = [
    {
        key: 'uniqueid2',
        src: '/images/oil-painting/img4.jpg',
    },
    {
      key: 'uniqueid3',
      src: '/images/oil-painting/img6.jpg',
    },

    {
      key: 'uniqueid6',
      src: '/images/oil-painting/img10.jpg',
    },
    {
      key: 'uniqueid7',
      src: '/images/oil-painting/img11.jpg',
    },

    {
      key: 'uniqueid9',
      src: '/images/oil-painting/img19.jpg',
    },

    {
      key: 'uniqueid10',
      src: '/images/oil-painting/img20.jpg',
    },
    {
      key: 'uniqueid8',
      src: '/images/oil-painting/img13.jpg',
    },
    {
      key: 'uniqueid8',
      src: '/images/oil-painting/img21.png',
    },
];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [start, setStart] = React.useState(true);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    if(start){
      setIndex(props.startingIndex);
      setStart(false);
    }
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgArray.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgArray.map((_img , index) => (
          <div
            className="slide"
            key={index}
          >
            <img 
                src={_img.src} 
                key={_img.key}
                className='cover-photo'
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Slideshow;