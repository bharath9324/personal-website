import './App.css'
import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import profileImg from './assets/bharath-real.jpg';
import ghibliImg from './assets/bharath-ghibli.jpg';
import faireLogo from './assets/faire_logo.jpg';
import leapToolsLogo from './assets/leap_tools_logo.jpg';
import sapLogo from './assets/logo_sap.jpg';
import cdacLogo from './assets/cdac_logo.jpg';
import waterlooLogo from './assets/waterloo_logo.jpg';
import iitIndoreLogo from './assets/iit-indore-logo.jpg';
import ImageChangegBox from './ImageChangeBox';
import LogoHeading from './LogoHeading';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading ? (<LoadingScreen />) :(
    <main className="flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-4">
      <div id="main-body">
        <div className="max-w-xl text-center">
          <ImageChangegBox 
            initialImage={profileImg}
            hoverImage={ghibliImg}
          />
          <h1 className="text-4xl font-bold mb-2">Hi, I'm Bharath</h1>
          <h2 className="text-xl text-gray-600 mb-6">Software Engineer</h2>
          <p className="mb-6">
            I am an experienced software engineer who has worked at startups, hyper-growth scaleups, and large enterprise companies.
            I earned my Master's in Computer Science at the University of Waterloo (2018) and my Bachelor's in Computer Science at IIT Indore.
          </p>
          <h2 className="text-xl text-gray-600 mb-6">Experience</h2>
          <LogoHeading logoSrc={faireLogo}> Faire - Software Engineer </LogoHeading>
          <div className="dates-light"> 2020 August - Present </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
            <p className="truncate hover:whitespace-normal">
              <ul>
                <li>Spearheaded the project of setting up the search service in multiple regions to reduce latency for users worldwide. This improved the search latency of the EU users by 100ms at p95 and p50, which increased the company's revenue.</li>
                <li>Led the project to break up the search endpoint code from the backend monolith and move it to the newly created search service.</li>
                <li>Led the development and launched key features for the Insider team to improve unit economics and growth.</li>
                <li>Designed and created Insider Membership Invoices for retailers in 17 countries while considering the various tax laws.</li>
                <li>Identified latency bottlenecks in the search endpoint and removed them, thereby improving latency by 200ms at p50. </li>
                <li>Significantly reduced the traffic volume of the most expensive endpoint by 40% (overall site traffic by 10%)</li>
                <li>Mentored developers and managed interns.</li>
              </ul>
            </p>
          </div>
          <LogoHeading logoSrc={leapToolsLogo}> Leap Tools - Software Engineer </LogoHeading>
          <div className="dates-light"> 2018 September - 2020 July </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
            <p className="truncate hover:whitespace-normal">
              <ul>
                <li>Built and launched projects for Leap Tool's visualization platform that provides users with an augmented reality design solution</li>
                <li>Designed and implemented the architecture for collecting events of users and computing the analytics. </li>
                <li>Led various projects for improving the speed of the data and image processing pipelines to add new products.</li>
                <li>Designed and built API endpoints and integrated the onboarding pipeline to the Roomvo pro app. </li>
                <li>Led developers to build several tile layouts that would be displayed on the app. </li>
              </ul>
            </p>
          </div>
          <LogoHeading logoSrc={sapLogo}> SAP - Software Engineer </LogoHeading>
          <div className="dates-light"> 2017 September - 2018 April </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
            <p className="truncate hover:whitespace-normal">
              <ul>
                <li>Designed and built SAP Analytics Cloud's Smart Discovery 2 feature.</li>
                <li>Revamped the UI of SAP Analytics Cloud to give it a stronger and bolder look. </li>
                <li>Improved the code coverage of the Smart discovery feature from 65% to over 90% </li>
              </ul>
            </p>
          </div>
          <LogoHeading logoSrc={iitIndoreLogo}>IIT Indore - Research Assistant</LogoHeading>
          <div className="dates-light"> 2015 July - 2015 December </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
            <p className="truncate hover:whitespace-normal">
              <ul>
                <li>Published the paper <a href="https://ieeexplore.ieee.org/document/7477245">(Quality-based classification of images for illumination invariant face recognition) </a>
                   based on my work at the 2016 ISBA IEEE Conference. </li>
                <li>Presented my research at the 2016 ISBA IEE Conference in Sendai, Japan. </li>
                <li>Collaborated with researchers and scientists to design and execute experiments. </li>
                  
              </ul>
            </p>
          </div>
          <LogoHeading logoSrc={cdacLogo}>CDAC - Software Engineer</LogoHeading>
          <div className="dates-light"> 2015 May - 2015 July </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
            <p className="truncate hover:whitespace-normal">
              <ul>
                <li>Designed and built educational software that helps students learn English.</li>
              </ul>
            </p>
          </div>
          <h2 className="text-xl text-gray-600 mb-6">Projects</h2>
          <h3>Interactive Augmented Reality Marker</h3>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300"> 
            <p>
              Developed a augmented reality application that detects visual markers and projects a 3D cube over them in real time.
              Utilized OpenCV for marker detection and computer vision processing.
              Focused on accurate tracking, efficient rendering, and a lightweight implementation suitable for educational demos and prototyping.
            </p>
            <div style={{ maxWidth: '800px', margin: '40px auto' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/9O5fp1Evy64?rel=0"
                  title="Interactive Augmented Reality Marker"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <h2 className="text-xl text-gray-600 mb-6">Education</h2>
          <LogoHeading logoSrc={waterlooLogo}>University of Waterloo</LogoHeading>
          <div className="dates-light"> 2016 September - 2018 August </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300"> M.Math - Computer Science </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300"> Relevant Courses: CS 898 Deep Learning, CS 889 Human Computer Interaction, CS 698 Machine Learning </div>
          <LogoHeading logoSrc={iitIndoreLogo}>Indian Institute of Technology (IIT), Indore</LogoHeading>
          <div className="dates-light"> 2012 July - 2016 May </div>
          <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300"> B.Tech - Computer Science and Engineering </div>
        </div>
      </div>
      <div className="footer">
        <h2 className="text-xl text-gray-600 mb-6 bordered-letter">Let's connect!</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/bharath-subramanyam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline bordered-letter"
            style={{ paddingRight: '30px' }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:bharath.subramanyam.v1@gmail.com"
            className="text-blue-500 hover:underline bordered-letter"
          >
            Email
          </a>
        </div>
      </div>
    </main>
    )}
    </>
  );
};

export default App
