import Section from "@/components/ui/Section";
import Wrapper from "@/components/ui/Wrapper";
import Layout from "@/components/ui/Layout";
import Resume from "@/components/Resume";
import Container from "@/components/ui/Container";

export default function ResumePage() {
  return (

    <Layout.Full>
      <Section.Narrow>
        <Wrapper gridWidth={4}>
          <Container width={1}>
            <Resume.Title>Contact</Resume.Title>
          </Container>
          <Container width={3}>
            <Resume.Body >{<><span className="text-gray-900">Nick Arvanitas</span><br /><span className='text-gray-800'>nick.arvanitas@gmail.com</span></>}</Resume.Body>
          </Container>
          <Container width={1} height={4} bgColor={""} border={false}>
            <Resume.Title>Experience</Resume.Title>
          </Container>
          <Container width={3}>
            <Resume.Body subtitle={'Nov 2022 - Current'} title={'UX Designer / Front End Developer'} job={'SimpliScreen'}>• Currently designing and helping develop a SaaS App with Angular<br />• Designed and developed marketing sites hosted on Shopify</Resume.Body>
            <Resume.Body subtitle={'Oct 2020 - Dec 2022'} title={'UX Designer'} job={'CreateRoom'}>• Refactored a multi-million dollar startup's e-commerce website to improve conversion.<br />
              • Created wireframes, mockups, and prototypes for upcoming features.<br />
              • Conducted research via surveys, heat maps, and customer sessions.<br />
              • Worked with Google Analytics to analyze data, identify customer trends, and present data to shareholders.</Resume.Body>
            <Resume.Body subtitle={'Jan 2019 - Oct 2020'} title={'UX / UI Designer'} job={'Missionary Training Center'}>• Managed style guide and design library<br />
              • Worked with the lead designer to oversee the design of our international business application.<br />
              • Created wireframes, mock-ups, conducted user testing, and reviewed developed pages.<br />
              • Worked in both Kanban and Agile Scrum environments</Resume.Body>
            <Resume.Body subtitle={'Jan 2019 - Jul 2020'} title={'UX & Graphic Designer'} job={'Freelance'}>• Designed and developed sites with Wordpress. <br />
              • Designed graphic design elements such as logos, labels, and flyers.</Resume.Body>
          </Container>
          <Container width={1}>
            <Resume.Title>Skills</Resume.Title>
          </Container>
          <Container width={3}>
            <Resume.Body title={'Research'}>Content Auditing · Journey Maps · Personas · User Interviews · User Testing</Resume.Body>
            <Resume.Body title={'Design'}>Wireframes · UI Design · Motion Design · Prototypes · Adobe CC · Figma/XD/Sketch · Principle/Invision</Resume.Body>
            <Resume.Body title={'Development'}>HTML/CSS/JS · NextJS · React · Angular · Vue · Shopify Liquid · TailwindCSS</Resume.Body>
            <Resume.Body title={'Other'}>Shopify · JIRA · Kanban/Scrum · Wordpress · Google Adword Certified</Resume.Body>
          </Container>
          <Container width={1}>
            <Resume.Title>Education</Resume.Title>
          </Container>
          <Container width={3}>
            <Resume.Body subtitle={'2015 - 2020'} title={'Utah Valley University'}>Bachelors in Web Design & Development</Resume.Body>
          </Container>
          <Container width={1}>
            <Resume.Title>References</Resume.Title>
          </Container>
          <Container width={3}>
            <Resume.Body>Zack Porter - Lead Front End Developer<br />385 722 0752</Resume.Body>
            <Resume.Body>Karen White - Lead UX Designer <br />801 636 5952</Resume.Body>
            <Resume.Body>Keith Hubert - VP of Customer & Sales <br />801 850 3544</Resume.Body>
          </Container>
        </Wrapper>
      </Section.Narrow>
    </Layout.Full>

  )
}
