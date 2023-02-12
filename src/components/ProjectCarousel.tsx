import { useEffect, useState } from 'react';
import { Repo } from '../interfaces/repo';
import './styles/ProjectCarousel.css';
import { useTranslation } from 'react-i18next';

interface CarouselProps {
    images: string[];
    repos: Repo[];
  }

const ProjectCarousel = ({images, repos}: CarouselProps) => {
  const [tP] = useTranslation('Projects');

  const [currentArrayImg, setCurrentArrayImg] = useState<string[]>([
    images[4], images[5], images[0], images[1], images[2]
  ]);
  const [sliderMoveClass, setSliderMoveClass] = useState<string>('');
  const defaultCurrentRepo = {
    "owner": "",
    "repo": "",
    "link": "",
    "description": "",
    "image": "",
    "website": "",
    "language": "",
    "languageColor": "",
    "stars": "",
    "forks": 0
    };
  const [currentRepo, setCurrentRepo] = useState<Repo>(defaultCurrentRepo);

  const parsePathtoImageName = (path: string) => {
    let currentImageName: string | string[] = path.split('.')[0].split('/');
        currentImageName = currentImageName[currentImageName.length - 1];

        /* for production environment, the images will get an additional hash code in its name,
        so we need to remove this with the following code: */
        /* currentImageName = currentImageName.split('.')[0].split('-');
        let result = '';
        currentImageName.forEach((currval, index) => {
          if (currval !== currentImageName[currentImageName.length - 1]) {
            result += '-' + currval;
          }
        });
        currentImageName = result.slice(1); */

    return currentImageName;
  };

  const moveCarousel = (direction: string) => {
    setSliderMoveClass(`move-${direction}`);
    setTimeout(() => {
      let movingIndex = 0;
      if (direction === 'left') movingIndex = -1;
      else if (direction === 'right') movingIndex = 1;
      let currentIndex = images.indexOf(currentArrayImg[2]);
      currentIndex = (currentIndex + movingIndex + images.length) % images.length;

      const newArrayImg = [
        images[(currentIndex - 2 + images.length) % images.length],
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length]
      ];
      const newCurrentRepo = repos.find(repo => {
        /* converting path in th name of the image */
        const currentImageName: string = parsePathtoImageName(newArrayImg[2]);

        return repo.repo === currentImageName;
      });
      setCurrentArrayImg(newArrayImg);
      setCurrentRepo(newCurrentRepo? newCurrentRepo: defaultCurrentRepo);
      setSliderMoveClass('');
    }, 490);
  };

  const handleBtnLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    moveCarousel('left');
  };
  const handleBtnRight = (e: React.MouseEvent) => {
    e.preventDefault();
    moveCarousel('right');
  };

  const [darkWidth, setDarkWidth] = useState<number>(0);

  useEffect( () => {
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      const onChangeSliderSize = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;
        setDarkWidth(width);
      });
    
      onChangeSliderSize.observe(sliderContainer);

      const newCurrentRepo = repos.find(repo => {
        /* converting path in th name of the image */
        const currentImageName: string = parsePathtoImageName(currentArrayImg[2]);

        return repo.repo === currentImageName;
      });
      setCurrentRepo(newCurrentRepo? newCurrentRepo: defaultCurrentRepo);
    }
  }, []);

  return (
    <>
      <div className="carousel-container">
        <button className="btn-prev" onClick={(e) => handleBtnLeft(e)}>&#60;</button>
        <div className="slider-container">
          <div className="gradient-dark" style={{width: darkWidth}}/>
          <div className={`slider ${sliderMoveClass}`.trim()}>
            {currentArrayImg.map((image, index) => (
              <div key={`${index}-${image}`} className="image-container">
                <img src={image} alt={`${index}-${image}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="btn-next" onClick={(e) => handleBtnRight(e)}>&#62;</button>
      </div>
      <div className="repo-data">
        <h2 className="text-color2">{currentRepo.repo}</h2>
        <p className="text-color2"><strong>{tP("description")}</strong> {currentRepo.description ? currentRepo.description : 'None'}</p>
        <p className="text-color2"><strong>{tP("link")}</strong> <a
            href={currentRepo.link ? currentRepo.link : '#'}
            target="_blank" rel="noreferrer">{currentRepo.link ? currentRepo.link : 'None'}
          </a>
        </p>
      </div>
    </>
  );
};

export default ProjectCarousel;