import React from 'react';
import CamcoNavbar from '../components/camconavbar.js';
import './styles.scss';
import BackgroundImage from '../../static/Untitled-1.jpg';
import BackgroundImage2 from '../../static/Untitled-2.jpg';
import { Image, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import NavParticles from '../components/navparticles.js'
import { Link } from 'gatsby';
import Footer from '../components/footer.js';
import CamcoModel from '../../static/CamcoModel.png';
import Breakdown from '../../static/breakdown.png';

import Abiel from '../../static/abiel.jpg';
import Atlas from '../../static/atlas.jpg';
import Al from '../../static/al.jpg';
import Cam from '../../static/cam.jpg';
import Candace from '../../static/candace.jpg';
import Dan from '../../static/dan.jpg';



const Team = () => {
  return (
    <div className="container">
      <CamcoNavbar />
      <NavParticles />
      <div className="white-bg team">
        <motion.div className="team-member">
          <motion.img className="member-pic" key={Cam} src={Cam}/>

            <h3>Cameron Colvin</h3>
            <h5>Chief Executive Officer</h5>
            <p>Cameron Colvin having played for the De La Salle Spartans, Oregon Ducks, and San Francisco 49ers. His story was recently portrayed by Ser'Darius William Blain in the 2014 Sony film When the Game Stands Tall, about his life through high school with the De La Salle Spartans.</p>
            <p>Now Chairman of a multimillion dollar International real estate development and investment firm CamCo Commercial Inc, Creative Solutions company “Rise Above Enterprises Development " that has taken on projects for Marvel Comics creator Stan Lee and other big name clients. Cameron is currently an active investor on hit show Entrepreneur Elevator Pitch by Sprint which did 25m total views.</p>
            <p>Now author of Never Stop " 12 Principles of Success book series. Cameron has been featured in numerous global media outlets from Forbes, ESPN, Sports Illustrated, USA Today, New York Post and more.</p>
            <p>With his passion in leadership, business, and philanthropy, Cameron started his involvement in Linking Sports and Communities, a 15 year nonprofit that supports underprivileged youth. His commitment to growing businesses and helping communities has set Cameron on a path to influence many around the world.</p>
        </motion.div>

        <motion.div className="team-member">
          <motion.img className="member-pic" key={Al} src={Al}/>
            <h3>Alexander Schaap</h3>
            <h5>Chief Financial Officer</h5>
            <p>Alexander Schaap is a practiced financial executive with over 45 years of experience in guiding companies to achieve significant enhancements in overall profitability and financial efficiency.</p>
            <p>He has taught economic, financial management, and value-added concepts at university levels and to corporate employees. He is familiar with FASB and GAAP procedures. Demonstrated expertise in Strategic Planning, Mergers and Acquisitions, Financial Training and Change Management.</p>
            <p>Al has over his career standardized and improved accounting procedures, revising the chart of accounts, automating accounting rules for consigned inventory, and making changes to work-in-process and inventory valuation processes. He has created a tax-advantaged strategies in coordination with an estate plan for the sole owner of a Subchapter S business.</p>
            <p>Al achieved his Bachelor's degree from Wayne State University and his MBA from Central Michigan University. Besides his experience at teaching, Al has authored numerous articles on financial technology. He has spoken at conferences on topics such as Management techniques, Auditor relationships, Credit Management and Technology.</p>
          </motion.div>

        <motion.div className="team-member">
          <motion.img className="member-pic" key={Atlas} src={Atlas}/>
          <h3>Atlas Atendido</h3>
          <h5>Design Technologist</h5>

          <p>I’m a renegade generalist hacker. Jack of all trades - Master of some. A React Full-stack developer, graphic / web designer, and digital marketer. I’ve helped launch multiple startups, co-founded a non-profit, I have years of top-notch Ontological / Phenomenological leadership training instructed by Werner Erhard, Steve Zafron, Michael C Jennings, and Jerri Echivarea. I have initiated and organized multiple meetup groups including HackerNest Seattle and grew it to over 800 members in 2 years. I am a musician of 18 years and in my free-time I operate a small spray painting business called the 'Dreamstate Monkeys' with my wife in my free time.</p>
        </motion.div>

        <motion.div className="team-member">
          <motion.img className="member-pic" key={Dan} src={Dan}/>
          <h3>Daniel Morales</h3>
          <h5>Designer</h5>
          <p>Daniel Morales is a Graphic Designer and brand specialist from Phoenix Arizona. His initial background in music gave him the refined skills needed to take on projects on both a commercially and creatively. Daniel is now the current brand manager & graphic designer for NEVERSTOP.</p>
        </motion.div>

        <motion.div className="team-member">
          <motion.img className="member-pic" key={Candace} src={Candace}/>
          <h3>Candace Silva</h3>
          <h5>Executive Assistant</h5>
          <p>Candace Silva is the Executive Assistant for Cameron Colvin CEO of Rise Above Enterprises.  Candace brings extensive experience to the company with expertise in client scheduling and correspondence.  Candace's expertise in communication and attention to detail make her an invaluable asset to Rise Above Enterprises.  Candace has demonstrated the ability to work in a fast paced environment while maintaining a very high degree of professionalism.  </p>
          <p>Originally from New Mexico, Candace has studied for a Bachelor of Arts in Psychology.  Candace has previously worked diligently at executing her entrepreneurial skills and had created her own social media marketing company and rental home maintenance service company.  This has enabled Candace to acquire strength, patience and problem solving abilities when it comes to participating in a professional atmosphere.  Candace has also strengthened herself by being a mother to two wonderful daughters.  Candace's previous experience has helped her to grow with Rise Above Enterprises, as she came prepared with prior business knowledge and is eager to learn and grow within the company.  </p>
        </motion.div>

        <motion.div className="team-member">
          <motion.img className="member-pic" key={Abiel} src={Abiel}/>
          <h3>Abiel Valencia</h3>
          <h5>Digital Content Creator</h5>

          <p>Hi my name is Abiel Valencia and I’m a Digital Content Creator. I graduated from Grand Canyon university in 2019 and have worked as a freelance photographer and videographer since 2016. I moved to New York in 2019 to work as a freelance PA. I got to meet tons of creative people and experience different environments working with multiple media companies. I recently moved back to Arizona to be closer to my family. I am engaged and plan to get married in 2021. Creating films and photography is more than work for me, when I create a project I want to make sure that whenever someone sees my work, I want them to feel that certain emotion, what emotion you ask? Well, that’s for you to know.</p>
        </motion.div>

        <motion.img className="background-image" key={BackgroundImage2} src={BackgroundImage2} animate={{ x:2000 }} transition={{ ease: 0, duration: 140 }}/>
      </div>
      <motion.img className="background-image-x" key={BackgroundImage} src={BackgroundImage} animate={{ x:4000 }} transition={{ ease: 0, duration: 100 }}/>
    </div>
  )
}

export default Team
