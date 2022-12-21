import { useState } from 'react';
import styles from './styles.module.scss';

const data = [
  {
    id: 'new',
    title: 'GhostDrive’s P2P Gen4 Storage',
    data: 'Finally store your data the Web3 way. GhostDrive P2P GEN4 storage offers you the ultimate solution for decentralized data storage and sharing - giving you access to your data anytime, anywhere.',
  },
  {
    id: 'next',
    title: 'GhostDrive’s Web3 Collaborative Workspaces',
    data: 'Work smarter and faster with Web3 Workspace Collaboration, the ultimate tool for teams to collaborate on projects and share ideas.',
  },
  {
    id: 'build',
    title: 'GhostDrive’s AI Playground',
    data: "Create your projects in GhostDrive's AI PLAYGROUND, the ultimate tool for creating stunning images, writing with powerful tools, and upscaling images instantly.",
  },
  {
    id: 'data',
    title: 'GhostDrive’s Digital Asset Tokenization Engine',
    data: 'Tokenize your digital assets with a click of a button. GhostDrive’s fully integrated Digital Asset Tokenization Engine makes it possible for you to create your digital asset and directly upload your digital asset on digital asset marketplaces.',
  },
];

export const Dropdown = () => {
  const [opened, setOpened] = useState<string | null>(null);
  return (
    <div className={styles.wrapper}>
      {data.map(({ id, title, data }) => {
        return (
          <div key={id} className={styles.container}>
            {opened === id && <div className={styles.line} />}
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
                <div>{data}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
