import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Accommodation from "../components/accommodation"
import AgendaItem from "../components/agenda-item"
//import Bio from "../components/bio"
import Button from "../components/button"
import CoverImage from "../components/cover-image"
import CoverImageResp from "../components/cover-image-responsive"
import DetailBlock from "../components/detail-block"
import LinkBlock from "../components/link-block"
import PurpleFruit from "../components/purple-fruit"
import RedFruit from "../components/red-fruit"
import GreenFruit from "../components/green-fruit"
import DarkRedFruit from "../components/dark-red-fruit"

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
        <h5>September 4th, 2021</h5>
        <h1 class="headline-lg">Katie & Devon</h1>
        <p class="large" style={{
          marginBottom: `0`,
        }}>We're getting married (finally)!</p>
      </div>
    </div>

    {/* intro */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `white`,
    }}>
      <div class="container">
        <p style={{
          fontFamily: `var(--headlinefont)`,
          fontWeight: `300`,
          fontSize: `2rem`,
          lineHeight: `2.5rem`,
          color: `var(--textcolorpink)`,
          marginBottom: `2rem`,
        }}>Katie and Devon joyfully request the pleasure of your company as they join in marriage in the presence of family and friends.</p>
        <p>We'll start with the ceremony followed by a cocktail hour and dinner. Dress code will be semiformal.</p>
        <Button
          title="RSVP Now"
          target="_blank"
          url="https://airtable.com/shrKk5SMdXzWb04VK"
        />
      </div>
    </div>

    {/* details */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolorpink)`,
    }}>
      <div class="container">
        <div class="row">
          <div class="col-6 lg-col-3 space-bottom-md">
            <DetailBlock
              type="When"
              title="September 4th, 2021"
              detail1="Ceremony: 4:30pm"
              detail2="Dinner & Party: 6pm – 10pm"
            />
          </div>
          <div class="col-6 lg-col-3">
            <DetailBlock
              type="Where"
              title="Boulder Flower Farm"
              detail1="4114 Oxford Road"
              detail2="Longmont, Colorado 80503"
              url="https://goo.gl/maps/RCKrtuXrEZJiFXLJA"
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
            date="September 4th, 2021"
            time="4:30 PM"
            title="Ceremony"
            detail="Boulder Flower Farm"
          />
          <AgendaItem
            date="September 4th, 2021"
            time="5 PM"
            title="Cocktail Hour"
            detail="Boulder Flower Farm"
          />
          <AgendaItem
            date="September 4th, 2021"
            time="6 PM"
            title="Dinner & Party"
            detail="Boulder Flower Farm"
          />
          <AgendaItem
            date="September 5th, 2021"
            time="11 AM"
            title="Brunch"
            detail="Sue's House"
          />
      </div>
    </div>

    {/* rsvp + registry */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolorpink)`,
    }}>
      <div class="container">
        <div class="row space-bottom">
          <div class="col-6 lg-col-3 space-bottom-md">
            <LinkBlock
              title="RSVP"
              details="We hope you'll be able to join us and our friends and family for this very special weekend in Colorado. Please kindly respond online by July 18, 2021."
              buttonText="RSVP Now"
              url="https://airtable.com/shrKk5SMdXzWb04VK"
            >
              <PurpleFruit />
            </LinkBlock>
          </div>
          <div class="col-6 lg-col-3">
            <LinkBlock
              title="Registry"
              details="Many of you are traveling to join us, so your presence is all we ask for. If you'd still like to contribute to our registry, we invite you to."
              buttonText="View Registry"
              url="https://www.zola.com/registry/devonandkatie2020"
            >
              <RedFruit />
            </LinkBlock>
          </div>
        </div>
        <div class="row">
          <div class="col-6 lg-col-3 space-bottom-md">
            <LinkBlock
              title="Accommodations"
              details="We have secured a special rate of $249 per night at the Embassy Suites, and we will provide shuttle service between the hotel and the wedding venue."
              buttonText="Book Hotel"
              url="https://embassysuites.hilton.com/en/es/groups/personalized/D/DENBOES-PTW-20210904/index.jhtml?WT.mc_id=POG"
            >
              <DarkRedFruit />
            </LinkBlock>
          </div>
          <div class="col-6 lg-col-3">
            <LinkBlock
              title="Mobile App"
              details="Our illustrious wedding planner, Shannon Tivona, has created a mobile app with helpful wedding details, an up-to-date schedule, photo sharing, and more."
              buttonText="Download App"
              url="https://tivonaporter.glideapp.io/"
            >
              <GreenFruit />
            </LinkBlock>
          </div>
        </div>
      </div>
    </div>
    
    {/* COVID deets */}
    <div class="container expanded pad-lg" style={{
      textAlign: `center`,
      backgroundColor: `var(--bgcolordark)`,
      color: `white`,
    }}>
    <div class="container narrow">
      <h2 style={{
        marginBottom: `3rem`,
      }}>COVID-19 Considerations</h2>
        <div class="row">
          <div class="col-6">
            <p>Your safety is our number one priorty. Boulder Flower Farm is an outdoor venue, and we will adhere to all city and state guidelines during the event. We kindly request you plan on being fully vaccinated before attending our wedding.</p>
            <p>Currently, we do not expect masks or social distancing to be required, but we will provide additional guidance as we get closer to our special weekend.</p>
          </div>
        </div>
      </div>
    </div>

    {/* bio
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

    <CoverImage/>

  </Layout>
)

export default IndexPage
