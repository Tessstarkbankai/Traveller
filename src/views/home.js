import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Feature from '../components/feature'
import Offer from '../components/offer'
import Location from '../components/location'
import Guide from '../components/guide'
import Article from '../components/article'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traveler template</title>
        <meta property="og:title" content="Traveler template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-video">
            <video
              src
              poster="/Videos/hero-cover1-1500h.png"
              className="home-video1"
            ></video>
            <div className="home-tint"></div>
          </div>
          <div className="home-content">
            <header className="home-header">
              
            </header>
            <div className="home-center">
              <div className="home-heading">
                <h1 className="home-header01">INCUBATION CENTER</h1>
                <p className="home-caption">INVERTIS UNIVERITY BAREILLY</p>
              </div>
              <div className="home-border"></div>
            </div>
          </div>
        </div>
        {/* <div id="features" className="home-feaures">
          <div className="home-content01">
            <Feature></Feature>
            <Feature icon="/Icons/headset.svg" header="24/7 Support"></Feature>
            <Feature icon="/Icons/person.svg" header="Private Tours"></Feature>
          </div>
        </div> */}
      </section>
      <section id="tours" className="home-quick-view">
        <div className="home-main1">
          <div className="home-heading01">
            <h2 className="home-header02">See the world like a local</h2>
            <p className="home-caption01">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          {/* <div className="home-sorting">
            <button className="home-option-primary button">All</button>
            <button className="button-option button">Popular</button>
            <button className="button-option button">Featured</button>
            <button className="button-option button">Trending</button>
          </div> */}
        </div>
        <div className="home-offers">
          <Link to="/">
            <div className="home-offer-container">
              <Offer image="/Offers/offers-11-1500w.png"></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container1">
              <Offer
                image="/Offers/offers-21-1500w.png"
                guides="54 Local guides"
                location="Barcelona, Spain"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container2">
              <Offer
                image="/Offers/offers-31-1500w.png"
                guides="34 Local Guides"
                location="Machu Picchu, Peru"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container3">
              <Offer
                image="/Offers/offers-41-1500w.png"
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container4">
              <Offer
                image="/Offers/offers-51-1500w.png"
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container5">
              <Offer
                image="/Offers/offers-61-1500w.png"
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
          {/* <Link to="/">
            <div className="home-offer-container6">
              <Offer
                image="/Offers/offers-71-1500w.png"
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container7">
              <Offer
                image="/Offers/offers-81-1500w.png"
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container8">
              <Offer
                image="/Offers/offers-91-1500w.png"
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link> */}
        </div>
        {/* <div className="home-pagination">
          <button className="home-previous button-option button">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="home-text07">Previous</span>
          </button>
          <div className="home-pages">
            <div className="home-primary">
              <div className="home-number-current page-current page">
                <span className="home-text08">1</span>
              </div>
              <div className="page">
                <span className="home-text09">2</span>
              </div>
              <div className="page home-number1">
                <span className="home-text10">3</span>
              </div>
            </div>
            <img alt="image" src="/Icons/more.svg" className="home-more" />
            <div className="page">
              <span className="home-text11">12</span>
            </div>
          </div>
          <button className="home-next button-option button">
            <span className="home-text12">Next</span>
            <svg viewBox="0 0 1024 1024" className="home-icon12">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div> */}
      </section>
      <section className="home-testimonials">
        <div className="home-content02">
          <div className="home-heading02">
            <span className="home-title">Customer testimonial</span>
            <p className="home-quote">
              “We’ve used Traveler to lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.”
            </p>
          </div>
          <div className="home-details">
            <div className="home-author">
              <img
                alt="image"
                src="/Avatar/quote-200h.png"
                className="home-avatar"
              />
              <span className="home-name">Michael McDonald</span>
            </div>
            <div className="home-controls">
              <div className="page">
                <span className="home-text13">&lt;</span>
              </div>
              <div className="home-next1 page">
                <span className="home-text14">&lt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-highlights">
        <div className="home-highlight">
          <div className="home-content03">
            <div className="home-heading03">
              <h2 className="home-header03">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption02">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button-arrow button">
              <span className="home-text15">Read more</span>
              <span className="home-text16">&gt;</span>
            </button>
          </div>
          <div className="home-image">
            <img
              alt="image"
              src="/Highlights/highlight-1-1500w.png"
              className="home-image1"
            />
            <div className="home-rectangle"></div>
          </div>
        </div>
        <div className="home-highlight1">
          <div className="home-image2">
            <img
              alt="image"
              src="/Highlights/highlight-2-1500w.png"
              className="home-image3"
            />
          </div>
          <div className="home-content04">
            <div className="home-heading04">
              <h2 className="home-header04">
                Excepteur sint occaecat cupidatat non proident
              </h2>
              <p className="home-caption03">
                <span>
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </span>
                <br></br>
                <br></br>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-find button">Find a local guide</button>
          </div>
        </div>
      </section>
      <section id="destinations" className="home-destinations">
        <div className="home-video-details">
          <div className="home-heading05">
            <h2 className="home-header05">Spotlight destinations</h2>
            <p className="home-caption04">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-video-wrapper">
            <div className="home-tint1">
              <img alt="image" src="/Icons/play.svg" className="home-image4" />
            </div>
            <video
              src
              poster="/Videos/spotlight-cover1-1500w.png"
              className="home-video2"
            ></video>
          </div>
        </div>
        <p className="home-caption05">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto.
        </p>
        <div className="home-list">
          <Link to="/" className="home-navlink09">
            <div className="home-location-wrapper">
              <Location></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink10">
            <div className="home-location-wrapper1">
              <Location
                location="Paris, France"
                background="/Destinations/destination-2-400h.png"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink11">
            <div className="home-location-wrapper2">
              <Location
                location="Bruges, Belgium"
                background="/Destinations/destination-3-400h.png"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="home-navlink12">
            <div className="home-location-wrapper3">
              <Location
                location="London, UK"
                background="/Destinations/destination-4-400h.png"
              ></Location>
            </div>
          </Link>
        </div>
        <button className="home-find1 button">Find a local guide</button>
      </section>
      <section id="guides" className="home-guides">
        <div className="home-heading06">
          <h2 className="home-header06">Meet our guides</h2>
          <p className="home-caption06">
            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
            tempor incididunt.
          </p>
        </div>
        <div className="home-list1">
          <Link to="/">
            <div className="home-guide-wrapper">
              <Guide></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper1">
              <Guide
                location="Paris, France"
                portrait="/Guides/guide-2.png"
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper2">
              <Guide
                location="Bruges, Belgium"
                portrait="/Guides/guide-3.png"
                rootClassName="guide-root-class-name"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper3">
              <Guide
                location="London, UK "
                portrait="/Guides/guide-4.png"
                rootClassName="guide-root-class-name1"
              ></Guide>
            </div>
          </Link>
        </div>
      </section>
      <section className="home-articles">
        <div id="articles" className="home-content05">
          <div className="home-heading07">
            <h2 className="home-header07">
              Excepteur sint occaecat cupidatat non proident
            </h2>
            <p className="home-caption07">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-list2">
            <div className="home-row">
              <Article
                image="/Articles/articles-11-1500w.png"
                rootClassName="article-root-class-name1"
              ></Article>
              <Article
                image="/Articles/articles-21-1500w.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                rootClassName="article-root-class-name"
              ></Article>
            </div>
            <div className="home-row1">
              <Article
                image="/Articles/articles-31-1500w.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                rootClassName="article-root-class-name2"
              ></Article>
              <Article
                image="/Articles/articles-41-1500w.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                rootClassName="article-root-class-name3"
              ></Article>
            </div>
            <div className="home-row2">
              <button className="home-read-all button-option button">
                Read all articles
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div id="faqs" className="home-content06">
          <div className="home-heading08">
            <h2 className="home-header08">Frequently asked questions</h2>
            <p className="home-caption08">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion home-element"
            >
              <div className="home-content07">
                <span className="home-header09">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon14"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon16"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content08">
                <span className="home-header10">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description1"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon18"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon20"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content09">
                <span className="home-header11">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description2"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon22"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon24"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content10">
                <span className="home-header12">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description3"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon26"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon28"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content11">
                <span className="home-header13">
                  Incididunt ut labore et dolore?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description4"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon30"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon32"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="find" className="home-find2">
        <div className="home-heading09">
          <h2 className="home-header14">Find a local guide now</h2>
          <p className="home-caption09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <button className="home-find3 button">Find a local guide</button>
      </section>
      <section className="home-footer">
        <div className="home-content12">
          <div className="home-main2">
            <div className="home-branding">
              <div className="home-heading10">
                <img alt="image" src="/logo.svg" className="home-image5" />
                <p className="home-caption10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="home-links1">
              <div className="home-items">
                <button className="home-link02 button button-clean">
                  Find a guide
                </button>
                <a
                  href="#destinations"
                  className="home-link03 button button-clean"
                >
                  Find a tour
                </a>
                <a
                  href="#destinations"
                  className="home-link04 button button-clean"
                >
                  Visit a city
                </a>
                <a
                  href="#destinations"
                  className="home-link05 button button-clean"
                >
                  Visit a country
                </a>
              </div>
              <div className="home-items1">
                <a
                  href="#how-it-works"
                  className="home-link06 button button-clean"
                >
                  How it works
                </a>
                <button className="home-link07 button button-clean">
                  Cancelation policy
                </button>
                <button className="home-link08 button button-clean">
                  Local guides
                </button>
                <button className="home-link09 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="home-items2">
                <button className="home-link10 button button-clean">
                  About us
                </button>
                <button className="home-link11 button button-clean">
                  Blog
                </button>
                <button className="home-link12 button button-clean">
                  Partners
                </button>
                <button className="home-link13 button button-clean">
                  Faqs
                </button>
                <button className="home-link14 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <div className="home-container4">
          <Script
            html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
