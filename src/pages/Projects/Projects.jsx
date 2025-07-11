import React from 'react';
import './Projects.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/Header/Header';

const Projects = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: 'AUDI - RS',
      images: ['/project/image1.png', '/project/image2.png', '/project/image3.png'],
      tags: ['React', 'SCSS'],
      description: t('projectSection.audi.description'),
      liveDemo: 'https://audi-rs.vercel.app',
      github: 'https://github.com/MadiyorDev/AUDI-RS',
    },
    {
      title: 'MusicFlow',
      images: ['/project/music1.png', '/project/music2.png', '/project/music3.png'],
      tags: ['React', 'SCSS', 'API', 'JSON'],
      description: t('projectSection.musicflow.description'),
      liveDemo: 'https://music-flow-sage.vercel.app',
      github: 'https://github.com/MadiyorDev/MusicFlow',
    },
    {
      title: 'OqTepa Lavash',
      images: ['/project/lavash1.png', '/project/lavash2.png', '/project/lavash3.png'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      description: t('projectSection.lavash.description'),
      liveDemo: 'https://oq-tepa-lavash.vercel.app',
      github: 'https://github.com/MadiyorDev/Oq-Tepa-Lavash',
    },
  ];

  return (
    <main className="projects-page" ref={ref}>
        <Header />
      <motion.section
        className="skills"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="skills__container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="skills__title">{t('projectSection.title')}</h2>
          <div className="skills__cards">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="skills__card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <div className="skills__card-image">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt={`${project.title} ${i + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <h3 className="skills__card-title">{project.title}</h3>
                <p className="skills__card-description full">{project.description}</p>
                <div className="skills__card-header">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="skills__tag">{tag}</span>
                  ))}
                </div>
                <div className="skills__card-buttons">
                  <a
                    href={project.liveDemo}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projectSection.liveDemo')}
                  </a>
                  <a
                    href={project.github}
                    className="btn btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projectSection.github')}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Projects;
