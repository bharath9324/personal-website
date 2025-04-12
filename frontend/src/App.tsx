import './App.css'
import profileImg from './assets/bharath-real.jpg';
import ghibliImg from './assets/bharath-ghibli.jpg';
import footerBackground from './assets/background.gif';
import ImageChangegBox from './ImageChangeBox';

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-4">
      <div className="max-w-xl text-center">
      <ImageChangegBox 
        initialImage={profileImg}
        hoverImage={ghibliImg}
        title="Bharath Subramanyam"
        extraContent={
          <p>I change when you hover. 🎉</p>
        }
      />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Bharath</h1>
        <h2 className="text-xl text-gray-600 mb-6">I am a Software Engineer</h2>
        <p className="mb-6">
        Experienced software engineer at startups, hyper-growth scaleups and large enterprise companies.
        I have done my Master's in Computer Science at the University of Waterloo (2018) and Bachelor's in Computer Science at IIT Indore.
        I am currently working on making Faire's search service more reliable and scalable.
        I have designed and launched various projects to improve Faire's search infrastructure and features,
        enhancing Faire's product and driving provable business impact through A/B testing.
        </p>
        <h2 className="text-xl text-gray-600 mb-6">Experience</h2>
        <h3 className="text-xl text-gray-600 mb-6 company">Faire - Software Engineer</h3>
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
        <h3 className="text-xl text-gray-600 mb-6 company">Leap Tools - Software Engineer</h3>
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
        <h3 className="text-xl text-gray-600 mb-6 company">SAP - Software Engineer</h3>
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
        <h3 className="text-xl text-gray-600 mb-6 company">CDAC - Software Engineer</h3>
        <div className="dates-light"> 2015 May - 2015 July </div>
        <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
          <p className="truncate hover:whitespace-normal">
            <ul>
              <li>Designed and built educational software that helps students learn English.</li>
            </ul>
          </p>
        </div>
        <h3 className="text-xl text-gray-600 mb-6 company">IIT Indore - Research Assistant</h3>
        <div className="dates-light"> 2015 July - 2015 December </div>
        <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300">
          <p className="truncate hover:whitespace-normal">
            <ul>
              <li>Published and presented the paper (Quality-based classification of images for illumination invariant face recognition)
                based on my work at the 2016 ISBA IEEE Conference in Sendai, Japan. </li>
            </ul>
          </p>
        </div>

        <h2 className="text-xl text-gray-600 mb-6">Education</h2>
        <h3 className="text-xl text-gray-600 mb-6 company">University of Waterloo</h3>
        <div className="dates-light"> 2016 September - 2018 August </div>
        <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300"> M.Math - Computer Science </div>
        <h3 className="text-xl text-gray-600 mb-6 company">Indian Institute of Technology (IIT), Indore</h3>
        <div className="dates-light"> 2012 July - 2016 May </div>
        <div className="p-4 bg-gray-100 max-w-sm overflow-hidden transition-all duration-300"> B.Tech - Computer Science and Engineering </div>
        <div 
          className="footer"
          style={{
            backgroundImage: `url(${footerBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex justify-center gap-6" style={{ paddingTop: '30px' }}>
            <a
              href="https://www.linkedin.com/in/bharath-subramanyam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center gap-6" style={{ paddingTop: '20px' }}>
            <a
              href="mailto:bharath.subramanyam.v1@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App
