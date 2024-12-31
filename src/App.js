import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './BitsComponents/Footer';
import ContactForm from './BitsComponents/ContactForm';
import Community from './BitsComponents/Community';
import HeroSection from './BitsComponents/Homepage';
import ExpertiseSection from './BitsComponents/Services';
import Carouselpage from './BitsComponents/Carouselpage';
import VisionValueSection from './AboutComponent/VisionValueSection';
import AboutSection from './AboutComponent/AboutSection';
import AboutMain from './AboutComponent/AboutMain';
import ContactSection from './ContactComponent/ContactSection';
import ContactMain from './ContactComponent/ContactMain';
import Contactnav from './ContactComponent/Contactnav';
import Aboutnav from './AboutComponent/Aboutnav';
import CareersMain from './CareersComponent/CareersMain';
import Careersnav from './CareersComponent/Careersnav';
import CareersAbout from './CareersComponent/CareersAboutinfo';
import JoinUsSection from './CareersComponent/JoinusSection';
import CareersMiddle from './CareersComponent/Careersimagemiddle';
import Servicenav from './ServicesComponent/Servicesnav';
import ServiceMain from './ServicesComponent/ServicesMain';
import ServiceAbout from './ServicesComponent/ServiceAbout';
import ServicesOffered from './ServicesComponent/ServicesOffered';
import ITServiceSection from './ServicesComponent/ServicesImageSection';
import Featurechoose from './BitsComponents/Featurechoose';
import AboutCEO from './AboutComponent/AboutCEO';
import AIBot from './BitsComponents/AIBot';
import BillingMain from './BillingSolutions/BillingMain';
import Billingnav from './BillingSolutions/Billingnav';
import Billingchoose from './BillingSolutions/Billingchoose';
import Invoicing from './BillingSolutions/InvoicingComponent';
import ResourceSection from './BillingSolutions/ResourceSection';
import Carouselnew from './BitsComponents/CarouselNew';
import Expertise from './BitsComponents/Expertise';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <AIBot />
                        <Carouselpage />
                        <Carouselnew />
                         
                        <HeroSection />
                        <ExpertiseSection />
                        {/* <Features/> */}
                        {/* <BlogGenerator /> */}
                         
                        <Featurechoose />
                        <Expertise />
                        <Community />
                        <ContactForm />
                        <Footer />
                    </>
                } />

                {/*About Us page ka Route */}
                 
                <Route path="/about-us" element={
                    <>
                    <Aboutnav/>
                    <AboutMain/>
                    <AboutSection/>
                    <AboutCEO />
                    <VisionValueSection />
                    <Footer/>
                        </>
                    } />
                    {/*contact page ka Route*/}
 <Route path="/contact-bits" element={
    <>
    <Contactnav/>
    <ContactMain/>
    <ContactSection />
    <Footer/>
    </>
    } />
                    {/*careers page ka Route*/ }
    <Route path="/career-bits" element={
       <>
       <Careersnav/>
        <CareersMain />
        <CareersAbout />
        <JoinUsSection />
        {/* <HiringSection /> */}
        <CareersMiddle />
        <Footer />
        </>
        } />

                    {/*Service page ka Route*/}
<Route path="/service-bits" element={
    <>
    <Servicenav />
    <ServiceMain />
    <ServiceAbout />
    <ServicesOffered />
    <ITServiceSection />
    <Footer />
    </>
    }/>

    <Route path="/billing" element={
        <>
        <Billingnav />
        <BillingMain />
        <Billingchoose />
        <Invoicing />
        <ResourceSection />
        <Footer />
        </>
    } />
            </Routes>
        </Router>
    );
}

export default App;
