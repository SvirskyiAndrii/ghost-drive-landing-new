import { useState } from 'react';
import styles from './styles.module.scss';
const data = [
  {
    id: 'new',
    title: 'New possibilities with ghostdrive',
    data: '1We created the first ai folder using ai and web3 technology. Any data you upload to that folder will automatically regenerate new data with more options. image-to-image and text-to-text modes You will be surprised at how much time you will save in the future.',
  },
  {
    id: 'next',
    title: 'next gen of WORKSPACES',
    data: '2We created the first ai folder using ai and web3 technology. Any data you upload to that folder will automatically regenerate new data with more options. image-to-image and text-to-text modes You will be surprised at how much time you will save in the future.',
  },
  {
    id: 'build',
    title: 'Build an AI-Driven DATA',
    data: '3We created the first ai folder using ai and web3 technology. Any data you upload to that folder will automatically regenerate new data with more options. image-to-image and text-to-text modes You will be surprised at how much time you will save in the future.',
  },
  {
    id: 'data',
    title: 'DATA COMMUNICATION and security',
    data: '4We created the first ai folder using ai and web3 technology. Any data you upload to that folder will automatically regenerate new data with more options. image-to-image and text-to-text modes You will be surprised at how much time you will save in the future.',
  },
];

export const Dropdown = () => {
  const [opened, setOpened] = useState<string | null>(null);
  return (
    <div className={styles.wrapper}>
      {data.map(({ id, title, data }) => {
        return (
          <div key={id} className={styles.container}>
            <div
              className={`${styles.title} ${
                opened === id ? styles.opened : styles.closed
              }`}
              onClick={() => {
                if (opened !== id) {
                  setOpened(id);
                } else {
                  setOpened(null);
                }
              }}
            >
              {title}
            </div>
            {opened === id && (
              <div className={styles.data}>
                <div className={styles.line} />
                <div>{data}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
