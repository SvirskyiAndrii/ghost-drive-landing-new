// @ts-nocheck
import styles from './styles.module.scss';
import { useCallback, useEffect, useState } from 'react';
import gif from './assets/loader.gif';
import GD_01 from './assets/GD_01.webm';
import GD_02 from './assets/GD_02.webm';
import GD_03 from './assets/GD_03.webm';
import GD_04 from './assets/GD_04.webm';
import { CountDown } from 'components/countdown';
import { Dropdown } from 'components/dropdown';

function App() {
  const [wasScroll, setWasScroll] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const [isLoading, setLoading] = useState(false);
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

            <video
              className={styles.videoTop}
              width='100%'
              controls={false}
              autoPlay='autoplay'
              muted
              loop
            >
              <source src={GD_04} type='video/webm' />
              Sorry, your browser doesn't support videos.
            </video>
          </header>
          <div className={styles.ghostdrive}>
            <h1 className={styles.ghostdrive_title}>GHOSTDRIVE</h1>
            <div className={styles.subtitle}>
              the next-generation OF web3 STORAGE
            </div>
            <div className={`${styles.line} ${styles.contain}`} />
            <div className={styles.nft_pass}>GET NFTPASS</div>
            <a
              href='https://discord.com/channels/956823840741265448/987313511476641912'
              target='_target'
            >
              <div className={styles.wrapper}>
                <div className={styles.cool_button}>
                  <div className={styles.button}>WHITELIST</div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.ghostdrive_mobile}>
            <h1 className={styles.title}>GHOSTDRIVE</h1>
            <div className={styles.paragraph}>
              Your data, your privacy, your rules.
            </div>
            <a
              href='https://discord.com/channels/956823840741265448/987313511476641912'
              target='_target'
            >
              <div className={styles.wrapper}>
                <div className={styles.cool_button}>
                  <div className={styles.button}>whitelist</div>
                </div>
              </div>
            </a>
            <div className={styles.mobileSvgLines}></div>
          </div>
          <div className={styles.scale}>
            <div className={styles.scale_title}>
              YOUR DATA. YOUR RULES. YOUR PRIVACY
            </div>
            <div className={styles.backgrounds}>
              <div className={`${styles.first} ${styles.contain}`} />
              <div className={`${styles.second} ${styles.contain}`} />
              <div className={`${styles.fourth} ${styles.contain}`} />
              <div className={`${styles.fifth} ${styles.contain}`} />
              <div className={`${styles.third} ${styles.contain}`} />
            </div>
            <a
              href='https://discord.com/channels/956823840741265448/987313511476641912'
              target='_target'
            >
              <div className={styles.wrapper}>
                <div className={styles.cool_button}>
                  <div className={styles.button}>whitelist</div>
                </div>
              </div>
            </a>
            <div className={`${styles.line} ${styles.contain}`} />
          </div>
          <div className={styles.generate}>
            <div className={styles.generate_title}>AI playground</div>
            <div className={styles.title}>
              <div className={styles.text}>dream</div>
              <div className={`${styles.right} ${styles.contain}`} />
              <div className={styles.text}>create</div>
              <div className={`${styles.up} ${styles.contain}`} />
              <div className={styles.text}>innovate</div>
              <div className={`${styles.down} ${styles.contain}`} />
            </div>
            <div className={`${styles.line} ${styles.contain}`} />
            <div className={styles.subtitle}>MEET NEYRA</div>
            <div className={styles.videoWrap}>
              <video
                width='50%'
                controls={false}
                autoPlay='autoplay'
                muted
                loop
              >
                <source src={GD_02} type='video/webm' />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
            <div className={styles.block}>
              <div className={styles.title_ai}>AI</div>
              <div className={styles.paragraph}>
                WE USE advanced machine learning algorithms to analyze user
                input and generate unique, high-quality content in real-time.
              </div>
            </div>
          </div>
          <div className={styles.p2p}>
            <div className={styles.title_main}>gen4 P2P NETWORK</div>
            <div className={styles.p2p_subtitle}>
              Faster, more secure, and more private than ever before!
            </div>
            <div className={styles.background_wrapper}>
              <div className={`${styles.background} ${styles.contain}`} />
            </div>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.title}>peer to peer </div>
                <div className={styles.paragraph}>
                  P2P approach to dramatically increase the data exchange speed,
                  eliminating the big sized files
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.title}>AGNOSTIC system</div>
                <div className={styles.paragraph}>
                  Existing on multiple blockchains simultaneously, the
                  GhostDRIVE Network is highly versatile.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.digital}>
            <div className={styles.digital_title}>DATA TOKENIZATION</div>
            <div className={styles.title}>
              <div className={styles.text}>UPLOad</div>
              <div className={`${styles.right} ${styles.contain}`} />
              <div className={styles.text}>TOkeNIZE</div>
              <div className={`${styles.up} ${styles.contain}`} />
              <div className={styles.text}>MONETIZE </div>
              <div className={`${styles.down} ${styles.contain}`} />
            </div>
            <div className={`${styles.line} ${styles.contain}`} />
            <div className={styles.subtitle}>DIGITAL ASSETS</div>
            <div className={styles.videoWrap}>
              <video
                width='50%'
                controls={false}
                autoPlay='autoplay'
                muted
                loop
              >
                <source src={GD_03} type='video/webm' />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
            <div className={styles.paragraph}>
              TOKENIZE YOUR DIGITAL ASSETS WITH A CLICK OF A BUTTON.
              GHOSTDRIVE’S FULLY INTEGRATED DIGITAL ASSET TOKENIZATION ENGINE
            </div>
            <div className={styles.differently}>
              <div className={styles.differently_title}>
                GHOSTDRIVE is the future
              </div>
              <div className={styles.webs}>
                <div className={styles.items}>
                  <div className={styles.item}>
                    <div className={styles.date}>Activate</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>
                      WEB3<span>INVITES ONLY</span>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>3.23.23</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>
                      OPEN WEb3+<span>PUBLIC</span>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>4.24.24</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>
                      OWN CHAIN<span>DAG BLOCKCHAIN</span>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.date}>05.25.25</div>
                    <div className={styles.arrow} />
                    <div className={styles.type}>
                      WEB4<span>METAVERSE</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.progress} ${styles.cover}`} />
              </div>
              <Dropdown />
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
            <div className={styles.videoWrap}>
              <video
                width='50%'
                controls={false}
                autoPlay='autoplay'
                muted
                loop
              >
                <source src={GD_03} type='video/webm' />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
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
            <div className={styles.videoWrap}>
              <video
                width='50%'
                controls={false}
                autoPlay='autoplay'
                muted
                loop
              >
                <source src={GD_03} type='video/webm' />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
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
            {/* <div className={`${styles.background_third} ${styles.contain}`} /> replace */}
            <div className={styles.block}>
              <div className={styles.title}>NFT PASS</div>
              <div className={styles.text}>
                An NFT access pass is required to gain access to GhostDrive.We
                are releasing 21,000 invitation-only Blue Whale NFT passes by Q2
                2023.
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.title}>Rewards</div>
              <div className={styles.text}>
                For each useful comment, bug report, or suggestion you will earn
                awards towards the next Web4 convention.
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
            <div></div>
          </div>
          <div className={styles.ribbon}>
            <div className={styles.partner}>
              <div className={`${styles.ipfs} ${styles.contain}`} />
              <div className={styles.company}>ipfs</div>
            </div>
            <div className={styles.partner}>
              <div className={`${styles.binance} ${styles.contain}`} />
              <div className={styles.company}>binance </div>
            </div>
            <div className={styles.partner}>
              <div className={`${styles.polygon} ${styles.contain}`} />
              <div className={styles.company}>polygon</div>
            </div>
            <div className={styles.partner}>
              <div className={`${styles.ethereum} ${styles.contain}`} />
              <div className={styles.company}>Ethereum</div>
            </div>
            <div className={`${styles.partner} ${styles.partner_cosmos}`}>
              <div className={`${styles.cosmos} ${styles.contain}`} />
              <div className={styles.company}>cosmos</div>
            </div>
          </div>
          <div className={styles.own_data}>
            <div className={styles.own_title}>
              OWN <span>YOUR</span> DATA
            </div>
            <div className={styles.videoWrap}>
              <video
                width='50%'
                controls={false}
                autoPlay='autoplay'
                muted
                loop
              >
                <source src={GD_01} type='video/webm' />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <footer className={styles.footer}>
            <div className={`${styles.top} ${styles.contain}`} />
            <div className={styles.logo}>
              <div className={`${styles.icon} ${styles.cover}`} />
              <div className={styles.company}>GHOSTDRIVE</div>
              <div className={styles.date}>Activation</div>
            </div>
            <div className={styles.social_media}>
              <a
                href='https://link.ghostdrive.com/discord'
                target='_blank'
                className={`${styles.discord} ${styles.contain}`}
              />
              <a
                href='https://t.me/ghostdrive_web3_chat'
                target='_blank'
                className={`${styles.telegram} ${styles.contain}`}
              />
              <a
                href='https://link.ghostdrive.com/twitter'
                target='_blank'
                className={`${styles.twitter} ${styles.contain}`}
              />
              <a
                href='https://link.ghostdrive.com/medium'
                target='_blank'
                className={`${styles.medium} ${styles.contain}`}
              />
              <a
                href='https://link.ghostdrive.com/instagram'
                target='_blank'
                className={`${styles.instagram} ${styles.contain}`}
              />
              <a
                href='https://link.ghostdrive.com/facebook'
                target='_blank'
                className={`${styles.facebook} ${styles.contain}`}
              />
              <a
                href='https://link.ghostdrive.com/linkedin'
                target='_blank'
                className={`${styles.linkedin} ${styles.contain}`}
              />
              <a
                href='https://link.ghostdrive.com/youtube'
                target='_blank'
                className={`${styles.youtube} ${styles.contain}`}
              />
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
