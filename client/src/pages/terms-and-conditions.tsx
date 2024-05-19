import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';



const TermsAndConditions = () => {
  return (
    <Container>

        <Link href="/">
          <Title>
            <span style={{ color: 'black' }}>Big</span>
            <span style={{ color: '#17A589' }}>Ohhh</span>
            <span style={{ color: 'black', fontSize:'18px' }}>   / Terms and Conditions</span>
          </Title>
        </Link>
              <h1 align='center'> <span style={{ color: '#17A589'}}>Terms and Conditions</span></h1>
      <Section>
       <p>Last Updated: 18 May 2024</p>
        <p>
          Welcome to BigOhhh! These terms and conditions outline the rules and regulations for the use of our website.
          By accessing this website we assume you accept these terms and conditions. Do not continue to use BigOhhh if
          you do not agree to take all of the terms and conditions stated on this page.
        </p>
      </Section>
      <Section>
        <h2>Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, BigOhhh and/or its licensors own all the intellectual
          property rights and materials contained in this Website. You are granted limited license only for purposes of
          viewing the material contained on this Website.
        </p>
      </Section>
      <Section>
        <h2>Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any Website material in any other media;</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>Publicly performing and/or showing any Website material;</li>
          <li>Using this Website in any way that is or may be damaging to this Website;</li>
          <li>Using this Website in any way that impacts user access to this Website;</li>
          <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
          <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
          <li>Using this Website to engage in any advertising or marketing.</li>
        </ul>
      </Section>
      <Section>
        <h2>Your Content</h2>
        <p>
          In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or
          other material you choose to display on this Website. By displaying Your Content, you grant BigOhhh a
          non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and
          distribute it in any and all media.
        </p>
      </Section>
      <Section>
        <h2>No warranties</h2>
        <p>
          This Website is provided “as is,” with all faults, and BigOhhh express no representations or warranties, of any
          kind related to this Website or the materials contained on this Website. Also, nothing contained on this
          Website shall be interpreted as advising you.
        </p>
      </Section>
      <Section>
        <h2>Limitation of liability</h2>
        <p>
          In no event shall BigOhhh, nor any of its officers, directors and employees, be held liable for anything
          arising out of or in any way connected with your use of this Website whether such liability is under contract.
          BigOhhh, including its officers, directors and employees shall not be held liable for any indirect,
          consequential or special liability arising out of or in any way related to your use of this Website.
        </p>
      </Section>
      <Section>
        <h2>Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent BigOhhh from and against any and/or all liabilities, costs, demands,
          causes of action, damages and expenses arising in any way related to your breach of any of the provisions of
          these Terms.
        </p>
      </Section>
      <Section>
        <h2>Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be
          deleted without affecting the remaining provisions herein.
        </p>
      </Section>
      <Section>
        <h2>Variation of Terms</h2>
        <p>
          BigOhhh is permitted to revise these Terms at any time as it sees fit, and by using this Website you are
          expected to review these Terms on a regular basis.
        </p>
      </Section>
      <Section>
        <h2>Assignment</h2>
        <p>
          The BigOhhh is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms
          without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights
          and/or obligations under these Terms.
        </p>
      </Section>
      <Section>
        <h2>Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between BigOhhh and you in relation to your use of this Website,
          and supersede all prior agreements and understandings.
        </p>
      </Section>
      <Section>
        <h2>Governing Law </h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and
          you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the
          resolution of any disputes.
        </p>
      
      </Section>

      <Footer>
        <FooterContent>
          <FooterLinks>
            <Link href="/">Home</Link>
            <Link href="/">Contact Us</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </FooterLinks>
          <p>&copy; 2024 BigOhhh. All rights reserved.</p>
        </FooterContent>
      </Footer>
      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  padding-bottom: 60px; 
`;



const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: left;
  color: #17A589`
  ;

const Section = styled.section`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p, ul {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;

    li {
      margin-bottom: 5px;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  width: 100%;
  background-color: #17A589;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default TermsAndConditions;