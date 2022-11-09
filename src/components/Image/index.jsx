import { useMemo } from 'react';

import styles from './styles.module.css';

const Image = ({ href, src, alt, isIncreased }) => {
  const classNames = useMemo(
    () => [styles.image, isIncreased ? styles['increased-image'] : ''],
    [isIncreased],
  );

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} className={classNames.join(' ')} />
    </a>
  );
};

export default Image;
