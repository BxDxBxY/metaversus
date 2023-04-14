'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter The Metaverse</h4>
        <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]" type="button">
          <img src="/headset.svg" alt="headset" className="h-[24px] w-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">Enter Metaverse</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>
          <p className="font-normal opacity-50 text-[14px] text-white">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img src={social.url} alt={social.name} key={social.name} className="w-[24px] h-[24px] cursor-pointer object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
