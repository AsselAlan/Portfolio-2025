import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import OpenIa from '../../assets/tecnologias/OpenAI.svg'; 
import Deepseek from '../../assets/tecnologias/Deepseek.svg'; 
import Google from '../../assets/tecnologias/Google.svg'; 
import ReactJS from '../../assets/tecnologias/ReactJS.svg';
import airtable from '../../assets/tecnologias/airtable.svg';
import discord from '../../assets/tecnologias/discord.svg';
import facebook from '../../assets/tecnologias/facebook.svg';
import instagram from '../../assets/tecnologias/instagram.svg';
import make from '../../assets/tecnologias/make.svg';
import messenger from '../../assets/tecnologias/messenger.svg';
import meta from '../../assets/tecnologias/meta.svg';
import n8n from '../../assets/tecnologias/n8n.svg';
import notion from '../../assets/tecnologias/notion.svg';
import Shopify from '../../assets/tecnologias/Shopify.svg';
import slack from '../../assets/tecnologias/slack.svg';
import supabase from '../../assets/tecnologias/supabase.svg';
import Tiendanube from '../../assets/tecnologias/Tiendanube.svg';
import trello from '../../assets/tecnologias/trello.svg';
import webflow from '../../assets/tecnologias/webflow.svg';
import whatsapp from '../../assets/tecnologias/whatsapp.svg';
import zapier from '../../assets/tecnologias/zapier.svg';

import './tecnologias.css'

const TechnologiesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false, 
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logos = [
    { src: OpenIa, alt: 'OpenAI' },
    { src: Deepseek, alt: 'Deepseek' },
    { src: Google, alt: 'Google' },
    { src: ReactJS, alt: 'ReactJS' },
    { src: airtable, alt: 'Airtable' },
    { src: discord, alt: 'Discord' },
    { src: facebook, alt: 'Facebook' },
    { src: instagram, alt: 'Instagram' },
    { src: make, alt: 'Make' },
    { src: messenger, alt: 'Messenger' },
    { src: meta, alt: 'Meta' },
    { src: n8n, alt: 'n8n' },
    { src: notion, alt: 'Notion' },
    { src: Shopify, alt: 'Shopify' },
    { src: slack, alt: 'Slack' },
    { src: supabase, alt: 'Supabase' },
    { src: Tiendanube, alt: 'Tiendanube' },
    { src: trello, alt: 'Trello' },
    { src: webflow, alt: 'Webflow' },
    { src: whatsapp, alt: 'WhatsApp' },
    { src: zapier, alt: 'Zapier' },
  ];

  return (
    <section className="technologies-section">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div className="tech-logo" key={index}>
            <div>
              <img src={logo.src} alt={logo.alt} title={logo.alt} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TechnologiesCarousel;
