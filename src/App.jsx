import { useState, useEffect, useCallback } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import Button from './components/Button';
import GoodsCard from './components/GoodsCard';
import './App.css';

const goods = [
  {
    image:
      'https://img.freepik.com/free-photo/potato-white-background_1205-509.jpg?1&w=1060&t=st=1667959453~exp=1667960053~hmac=c295613ea489fb70c15199377ddde0480ac2af86273c3620af80508f6b67e1d2',
    name: 'Картопля',
    price: '₴10.95 / кг',
  },
  {
    image:
      'https://img.freepik.com/free-photo/one-fresh-red-tomato-isolated-white_1205-548.jpg?1&w=1060&t=st=1667959532~exp=1667960132~hmac=02ad8885fa641cb9a0e7a554a758dcd80526cff5db826888bd1e87ab697ee846',
    name: 'Помідори',
    price: '₴91.25 / кг',
  },
  {
    image:
      'https://img.freepik.com/free-photo/cucumber-isolated_93675-131293.jpg?w=1060&t=st=1667959637~exp=1667960237~hmac=1b4c2b28093eb544070f1642ca09dade4a03acd6caf7c7aec1739ea8d7452b5a',
    name: 'Огірки',
    price: '₴73.00 / кг',
  },
  {
    image:
      'https://img.freepik.com/free-photo/baby-carrots_1339-7954.jpg?w=1060&t=st=1667959786~exp=1667960386~hmac=a7c73bca7f9cb445c6040657d209e2c95bd71a2bfff12a4d48e1fb42d8698cda',
    name: 'Морква',
    price: '₴17.20 / кг',
  },
  {
    image:
      'https://img.freepik.com/free-photo/raw-onions-white-surface_144627-45173.jpg?w=1060&t=st=1667960767~exp=1667961367~hmac=63e3d97455285bbcb43bdc0c62da273bf5dfaf5520f94a7763c161a45112afb6',
    name: 'Цибуля',
    price: '₴25.60 / кг',
  },
  {
    image:
      'https://img.freepik.com/free-photo/garlic-white-surface_144627-45191.jpg?w=996&t=st=1667959751~exp=1667960351~hmac=0182e61da6799152ef16ee94858f4d07a8b645d5a02f57aa45fa1f50f7513a71',
    name: 'Часник',
    price: '₴93.50 / кг',
  },
];

const App = () => {
  const [isIncreased, setIsIncreased] = useState(false);

  const getLvivImage = useCallback(
    () => (
      <Image
        src="https://thumbs.dreamstime.com/b/aerial-view-old-town-lviv-ukraine-scenic-summer-market-square-architecture-124964658.jpg"
        alt="Lviv"
        href="https://city-adm.lviv.ua/"
        isIncreased={isIncreased}
        key={Math.random()}
      />
    ),
    [isIncreased],
  );

  const [images, setImages] = useState([getLvivImage()]);

  useEffect(() => {
    setImages(previousValue => previousValue.map(() => getLvivImage()));
  }, [isIncreased, getLvivImage]);

  const handleAddImage = useCallback(
    () => setImages(previousValue => [...previousValue, getLvivImage()]),
    [getLvivImage],
  );

  const handleDeleteImage = useCallback(() => {
    setImages(previousValue => {
      return previousValue.filter((_, index) => index !== previousValue.length - 1);
    });
  }, []);

  const handleIncreaseImage = useCallback(() => setIsIncreased(true), []);

  const handleDecreaseImage = useCallback(() => setIsIncreased(false), []);

  return (
    <>
      <Header />
      <Content />
      <div>{images}</div>
      <div>
        <Button text="Додати зображення" onClick={handleAddImage} />
        <Button text="Видалити зображення" onClick={handleDeleteImage} />
        <Button text="Збільшити зображення" onClick={handleIncreaseImage} />
        <Button text="Зменшити зображення" onClick={handleDecreaseImage} />
      </div>
      <GoodsCard goods={goods} />
    </>
  );
};

export default App;
