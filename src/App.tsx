import styles from './styles.module.scss';
import { useCallback, useEffect, useState } from 'react';
import gif from './assets/loader.gif';
import { CountDown } from 'components/countdown';
import { Dropdown } from 'components/dropdown';

function App() {
  const [wasScroll, setWasScroll] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const [isLoading, setLoading] = useState(true);
  var date = new Date('02/28/2023 21:00:00');
  var launchDay = date.getTime();
  let timeout: string | number | NodeJS.Timeout | undefined;
  const scrollHandler = useCallback(
    (e: any) => {
      if (!wasScroll) {
        setWasScroll(true);
      }
      if (glitch) {
        setGlitch(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [wasScroll]
  );
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
    const timer = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => {
        if (!wasScroll) {
          setGlitch(true);
        } else {
          setGlitch(false);
          setWasScroll(false);
        }
        timer();
      }, 4000);
    };
    timer();
    return () => {
      clearTimeout(timeout);
    };
  }, [wasScroll]);

  return (
    <>
      <div
        className={`${styles.background} ${styles.cover} 
        ${isLoading && styles.loading}
        `}
      >
        {isLoading && <img src={gif} alt='loading' />}
        <div className={styles.layout}>
          <header className={styles.header}>
            <div className={`${styles.logo} ${styles.contain}`}></div>
            <div className={`${styles.img} ${styles.contain}`}></div>
            <div className={`${styles.button} ${styles.contain}`}></div>
          </header>
          <div className={styles.ghostdrive}>
            <h1 className={styles.title}>GHOSTDRIVE</h1>
            <div className={`${styles.line} ${styles.contain}`} />
            <div className={styles.subtitle}>INVITES ONLY</div>
            <div className={styles.wrapper}>
              <div className={styles.cool_button}>
                <div className={styles.button}>3.23.23</div>
              </div>
            </div>
            <div className={styles.experience}>NEW EXPERIENCE</div>
          </div>
          <div className={styles.ghostdrive_mobile}>
            <div className={styles.background} />
            <h1 className={styles.title}>GHOSTDRIVE</h1>
            <div className={styles.paragraph}>
              Your data, your privacy, your rules, your ideas
            </div>
            <div className={styles.time}>time to launch:</div>
            <div className={styles.days}>
              <CountDown timestamp={launchDay} />
            </div>
            <div className={styles.access}>Early bird access:</div>
            <div className={styles.wrapper}>
              <div className={styles.cool_button}>
                <div className={styles.button}>whitelist</div>
              </div>
            </div>
          </div>
          <div className={styles.scale}>
            <div className={styles.backgrounds}>
              <div className={`${styles.first} ${styles.contain}`} />
              <div className={`${styles.second} ${styles.contain}`} />
              <div className={`${styles.fourth} ${styles.contain}`} />
              <div className={`${styles.fifth} ${styles.contain}`} />
              <div className={`${styles.third} ${styles.contain}`} />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.cool_button}>
                <div className={styles.button}>whitelist</div>
              </div>
            </div>
            <div className={`${styles.line} ${styles.contain}`} />
          </div>
          <div className={styles.generate}>
            <div className={styles.title}>
              <div className={styles.text}>upload</div>
              <div className={`${styles.right} ${styles.contain}`} />
              <div className={styles.text}>create</div>
              <div className={`${styles.up} ${styles.contain}`} />
              <div className={styles.text}>innovate</div>
              <div className={`${styles.down} ${styles.contain}`} />
            </div>
            <div className={`${styles.line} ${styles.contain}`} />
            <div className={styles.subtitle}>MEET NEYRA</div>
            <div className={`${styles.background} ${styles.contain}`} />
            <div className={styles.block}>
              <div className={styles.title_ai}>AI</div>
              <div className={styles.paragraph}>
                WE USE advanced machine learning algorithms to analyze user
                input and generate unique, high-quality content in real-time.
              </div>
            </div>
          </div>
          <div className={styles.p2p}>
            <div className={styles.title_main}>p2p NETWORK</div>
            <div className={styles.background_wrapper}>
              <div className={`${styles.background} ${styles.contain}`} />
            </div>
            <div className={styles.captions}>
              <div className={styles.users}>21,000,000 LIMITED USERS</div>
              <div className={styles.gens}>
                <div>GEN3</div>
                <div>GEN4</div>
              </div>
            </div>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.title}>peer to peer </div>
                <div className={styles.paragraph}>
                  P2P approach to dramatically increase the data exchange speed,
                  eliminating the big sized files
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.title}>AGNOSTIC system</div>
                <div className={styles.paragraph}>
                  Existing on multiple blockchains simultaneously, the
                  GhostDRIVE Network is highly versatile.
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.title}>GEN4 MISSION</div>
                <div className={styles.paragraph}>
                  built-in functionality for managing online communities,
                  preparing group projects, securely sharing.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.digital}>
            <div className={styles.title_main}>
              <div className={styles.text}>GENERATE</div>
              <div className={`${styles.right} ${styles.contain}`} />
              <div className={styles.text}>TOKENIZE</div>
              <div className={`${styles.up} ${styles.contain}`} />
              <div className={styles.text}>MONETIZE</div>
              <div className={`${styles.down} ${styles.contain}`} />
            </div>
            <div className={styles.subtitle_main}>
              DIGITAL ASSETS TOKENIZATION
            </div>
            <div className={styles.images}>
              <div className={`${styles.digital1} ${styles.cover}`}>
                <div>upload</div>
              </div>
              <div className={`${styles.sign} ${styles.cover}`}>+</div>
              <div className={`${styles.digital2} ${styles.cover}`} />
              <div className={`${styles.sign} ${styles.cover}`}>=</div>
              <div className={`${styles.digital3} ${styles.cover}`}>
                <div>AI DATA</div>
              </div>
            </div>
            <div className={styles.differently}>
              <div className={styles.differently_title}>
                WHAT WE DO DIFFERENTLY?
              </div>
              <div className={styles.webs}>
                <div className={styles.items}>
                  <div className={styles.item}>
                    <div className={styles.date}>10.30.17</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>r&D</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>2.22.22</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>WEb2</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>12.22.22</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>WEb3</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>03.23.23</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>WEb4</div>
                  </div>
                </div>
                <div className={`${styles.progress} ${styles.cover}`} />
              </div>
              <Dropdown />
              <div className={styles.ribbon}>
                <div className={styles.partner}>
                  <div className={`${styles.ipfs} ${styles.contain}`} />
                  <div className={styles.company}>ipfs cluster</div>
                </div>
                <div className={styles.partner}>
                  <div className={`${styles.cosmos} ${styles.contain}`} />
                  <div className={styles.company}>cosmos</div>
                </div>
                <div className={styles.partner}>
                  <div className={`${styles.polygon} ${styles.contain}`} />
                  <div className={styles.company}>polygon</div>
                </div>
                <div className={styles.partner}>
                  <div className={`${styles.binance} ${styles.contain}`} />
                  <div className={styles.company}>binance chain</div>
                </div>
                <div className={styles.partner}>
                  <div className={`${styles.ethereum} ${styles.contain}`} />
                  <div className={styles.company}>Ethereum</div>
                </div>
              </div>
            </div>
            <div className={styles.own_data}>
              <div className={styles.own_left} />
              <div className={styles.own_right}>
                <div className={styles.own_title}>
                  OWN<span>YOUR</span>DATA
                </div>
                <div className={styles.own_item}>web3</div>
                <div className={styles.own_item}>GHOST IPFS</div>
                <div className={styles.own_item}>DATA WITH DAO</div>
                <div className={styles.own_item}>blockchain agnostic</div>
                <div className={styles.own_item}>GEOID, VOICEID, FACEID</div>
              </div>
            </div>
          </div>

          <div className={styles.content_mobile}>
            <div className={styles.block}>
              <div className={styles.title}>WEB3 STORAGE</div>
              <div className={styles.text}>
                a secure platform to allow individuals and entities a guarantee
                of privacy and security before their data becomes available in
                any other ecosystem
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>blockchain Agnostic</div>
              <div className={styles.text}>
                The fundamental security of application sandboxing on Ghostdrive
                offers a secure agnostic platform with multi chain support (ETH,
                BNB, MATIC )
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>WEB3 WorkspaceS</div>
              <div className={styles.text}>
                the platform has a built-in functionality for managing online
                communities, preparing group projects, securely sharing, payment
                gateaway.
              </div>
            </div>
            <div className={`${styles.background_first} ${styles.contain}`} />
            <div className={styles.block}>
              <div className={styles.title}>CREATIVE AI </div>
              <div className={styles.text}>
                Generate with AI your content, images, scripts, ideas or book we
                cover all. build your twin digital avatar.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>Data Room </div>
              <div className={styles.text}>
                Encryption modules built-in to the core front-end end-to-end
                control of the encryption process rather than layering in
                security over a system owned by a 3rd-party
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>Data security</div>
              <div className={styles.text}>
                Platform development for functionality that guarantees the
                security and privacy of the device, the network, and the
                workspace.
              </div>
            </div>
            <div className={`${styles.background_second} ${styles.contain}`} />
            <div className={styles.block}>
              <div className={styles.title}>data TOKENIZATION</div>
              <div className={styles.text}>
                Securely store your sensitive data and corresponding tokens at
                no cost. tokenize any DIGITAL set or any other personally
                identifiable information.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>TOKEN ACCESS</div>
              <div className={styles.text}>
                CREATE YOUR NATIVE TOKEN TO GIVE ACCESS TO YOUR DATA, FULLY
                SECURE AND INOVATIVE TECHNOLOGY
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>marketplace</div>
              <div className={styles.text}>
                Intellectual property tokenization & flexible access
                control.Users can instantly mint, tokenize and sell NFT anyware.
              </div>
            </div>
            <div className={`${styles.background_third} ${styles.contain}`} />
            <div className={styles.block}>
              <div className={styles.title}>Rewards</div>
              <div className={styles.text}>
                For each useful comment, bug report, or suggestion you will earn
                awards towards the next Web4 convention.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>Memberships</div>
              <div className={styles.text}>
                Fully customized user experience, to drive fast, scalable
                delivery of key modules mobile customers expect.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>Reforest the planet</div>
              <div className={styles.text}>
                We’ll be donating a portion of proceeds to help reforest the
                planet. When you place an order for a terabyte, we plant a tree
                on every continent.
              </div>
            </div>
            <div className={`${styles.background_fourth} ${styles.contain}`} />
          </div>
          <footer className={styles.footer}>
            <div className={`${styles.top} ${styles.contain}`} />
            <div className={styles.footer_title}>tech partners</div>

            <div className={styles.logo}>
              <div className={`${styles.icon} ${styles.cover}`} />
              <div className={styles.company}>GHOSTDRIVE</div>
              <div className={styles.date}>12.22.22</div>
            </div>
            <div className={styles.social_media}>
              <div className={`${styles.discord} ${styles.contain}`} />
              <div className={`${styles.telegram} ${styles.contain}`} />
              <div className={`${styles.twitter} ${styles.contain}`} />
              <div className={`${styles.medium} ${styles.contain}`} />
              <div className={`${styles.instagram} ${styles.contain}`} />
              <div className={`${styles.facebook} ${styles.contain}`} />
              <div className={`${styles.linkedin} ${styles.contain}`} />
              <div className={`${styles.youtube} ${styles.contain}`} />
            </div>
            <ul className={styles.navigation}>
              <li>Home</li>
              <span></span>
              <li>NFT</li>
              <span></span>
              <li>whitepaper</li>
              <span></span>
              <li>Product OVERview</li>
              <span></span>
              <li>TECHNICAL OVERVIEW</li>
              <span></span>
              <li>ROADMAP</li>
              <span></span>
              <li>CONTACT</li>
            </ul>
            <div className={styles.navigation_mobile}>
              <div className={styles.column}>
                <div className={styles.title}>info</div>
                <div className={styles.item}>white paper</div>
                <div className={styles.item}>tech overview</div>
              </div>
              <div className={styles.column}>
                <div className={styles.title}>contact</div>
                <div className={styles.item}>help</div>
                <div className={styles.item}>press</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
