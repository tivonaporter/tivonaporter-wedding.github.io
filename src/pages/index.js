import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Accommodation from "../components/accommodation"
import AgendaItem from "../components/agenda-item"
import Bio from "../components/bio"
import CoverImage from "../components/cover-image"
import CoverImageResp from "../components/cover-image-responsive"
import DetailItem from "../components/detail-item"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* hero */}
    <CoverImageResp/>


    {/* header */}
    <div class="container expanded pad-xl" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolortan)`,
    }}>
      <div class="container">
        <h5>May 15th, 2020</h5>
        <h1 class="headline-lg">Katie & Devon</h1>
        <p class="large" style={{
          marginBottom: `0`,
        }}>We're getting married!</p>
      </div>
    </div>

    {/* intro */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `white`,
    }}>
      <div class="container narrow">
        <p style={{
          fontFamily: `var(--headlinefont)`,
          fontWeight: `300`,
          fontSize: `2rem`,
          lineHeight: `2.5rem`,
          color: `var(--textcolorpink)`,
          marginBottom: `3rem`,
        }}>Katie and Devon joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.</p>
        <p style={{
          marginBottom: `0`,
        }}>We'll start with the ceremony followed by a cocktail hour and dinner. Dress code will be somewhere between business casual and black tie.</p>
      </div>
    </div>

    {/* details */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolorpink)`,
    }}>
      <div class="container">
        <div class="row">
          <div class="col-6 lg-col-3">
            <DetailItem
              type="When"
              title="May 15th, 2020"
              detail1="Ceremony: 4pm"
              detail2="Dinner + Party: 6pm – 10pm"
            />
          </div>
          <div class="col-6 lg-col-3">
            <DetailItem
              type="Where"
              title="Podere Palazzo"
              detail1="01021 Acquapendente"
              detail2="Province of Viterbo, Italy"
            />
          </div>
        </div>
      </div>
    </div>

    {/* agenda */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolortan)`,
    }}>
      <div class="container">
        <h2 style={{
          marginBottom: `3rem`
        }}>Agenda</h2>
          <AgendaItem
            date="May 14th, 2020"
            time="2 PM"
            title="Cocktail & Swim"
            detail="Poolside at Podere Palazzo"
          />
          <AgendaItem
            date="May 15th, 2020"
            time="5 PM"
            title="Ceremony"
            detail="Lakeside at Podere Palazzo"
          />
          <AgendaItem
            date="May 15th, 2020"
            time="6 PM"
            title="Cocktail Hour"
            detail="Podere Palazzo"
          />
          <AgendaItem
            date="May 15th, 2020"
            time="7 PM"
            title="Dinner & Party"
            detail="Podere Palazzo"
          />
      </div>
    </div>

    {/* slack deets */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolordark)`,
      color: `white`,
    }}>
    <div class="container narrow">
      <h2 style={{
        marginBottom: `3rem`,
      }}>Join us on Slack</h2>
        <div class="row">
          <div class="col-6">
            <p>We made a Slack channel just for the wedding. Yay! Join us there to if you want an easy way to receive updates, get in touch with other attendees, and ask questions about the event.</p>
            <a class="btn on-dark" href="https://join.slack.com/t/tivonaporterwedding/shared_invite/enQtODE5MjkyOTgzMzEyLTFhM2FiMjk4YzVlMmVhODczYmI0ZWI5NzViYjVjZGJkYjc5M2NkM2ExNGM2MGZjNTkyZDlhY2JiMDU5YjgyOTA" target="_blank">
              Let's Get Slackin'
            </a>
          </div>
        </div>
      </div>
    </div>


    {/* accommodations */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `white`,
    }}>
    <div class="container">
      <h2 style={{
        marginBottom: `3rem`
      }}>Accommodations</h2>
        <div class="row">
          <div class="col-6 md-col-3 lg-col-2">
            <Accommodation
              badgeTitle="Quaint"
              badgeColor="green-light"
              name="San Pietro Aquaeortus"
              price="$200"
              airportDist="2 hr (178 km)"
              venueDist="15 min (11 km)"
              url="https://spao.it/"
            />
          </div>
          <div class="col-6 md-col-3 lg-col-2">
            <Accommodation
              badgeTitle="Mod"
              badgeColor="green"
              name="UNAWAY Hotel Fabro"
              price="$70"
              airportDist="2 hr (168 km)"
              venueDist="25 min (21 km)"
              url="https://www.gruppouna.it/en/unaway/unaway-hotel-fabro"
            />
          </div>
          <div class="col-6 md-col-3 lg-col-2">
            <Accommodation
              badgeTitle="Luxe"
              badgeColor="purple"
              name="Casa Fabbrini Val D'Orcia"
              price="$240"
              airportDist="2 hr (180 km)"
              venueDist="30 min (22 km)"
              url="https://agriturismo-toscana.casafabbrini.it/en/"
            />
          </div>
          <div class="col-6 md-col-3 lg-col-2">
            <Accommodation
              badgeTitle="Quaint"
              badgeColor="green-light"
              name="Hotel Sette Querce"
              price="$110"
              airportDist="2 hr (190 km)"
              venueDist="20 min (13 km)"
              url="https://www.settequerce.it/en/"
            />
          </div>
          <div class="col-6 md-col-3 lg-col-2">
            <Accommodation
              badgeTitle="High Roller"
              badgeColor="pink"
              name="Fonteverde Spa & Hotel"
              price="$370"
              airportDist="2 hr (191 km)"
              venueDist="15 min (12 km)"
              url="https://www.fonteverdespa.com/en/spa-tuscany/1-0.html"
            />
          </div>
          <div class="col-6 md-col-3 lg-col-2">
            <Accommodation
              badgeTitle="Quaint"
              badgeColor="green-light"
              name="Various Airbnbs"
              price="$70"
              airportDist="1.5–2 hr"
              venueDist="15–20 min"
              url="https://www.airbnb.com/s/Acquapendente--VT/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&screen_size=large&hide_dates_and_guests_filters=false&place_id=ChIJR80dGo06KRMRNI7XEvc5G6E&checkin=2020-05-13&checkout=2020-05-16&search_type=filter_change&adults=2"
            />
          </div>
        </div>
      </div>
    </div>

    {/* bios
    <div class="container expanded pad-lg" style={{
      textAlign: `left`,
      backgroundColor: `var(--bgcolortan)`,
    }}>
      <div class="container">
        <Bio
          title="The Bride"
          name="Jane Katharine Porter"
          details="You probably know her as Katie. She is dope. Lorem ipsum motha fuckaaaas. Fill this shit up with some motha fuckin placeholder text so we can see how dat shit gon look."
        />
        <Bio
          title="The Groom"
          name="Devon Mark Blanc Tivona"
          details="You probably know him as Devon because that's his name. He is also dope. Lorem ipsum motha fuckaaaas. Fill this shit up with some motha fuckin placeholder text so we can see how dat shit gon look."
        />
      </div>
    </div>
    */}

  </Layout>
)

export default IndexPage
