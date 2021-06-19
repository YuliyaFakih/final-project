import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import Expertise from './components/Expertise/Expertise'
import KeyIndustries from './components/Expertise/KeyIndustries'
import Footer from './components/Footer/Footer'
import SignUpAsEmployer from './components/SignUp/SignUpAsEmployer'
import SignUpAsJobSeeker from './components/SignUp/SignUpAsJobSeeker'
import Login from './components/Login/Login'
import BusinessLines from './components/BusinessLines/BusinessLines'
import Account from './components/Account/Account'
import TechnologyPractices from './components/TechnologyPractices/TechnologyPractices'
import JobSeekers from './components/JobSeekers/Jobseekers'
import InternalCareers from './components/JobSeekers/InternalCareers'
import AcademyProgram from './components/JobSeekers/AcademyProgram'
import SearchJobs from './components/SearchJobs/SearchJobs'
import Employers from './components/Employers/Employers'
import SubmitOffer from './components/Employers/SubmitOffer'
import Leadership from './components/About/Leadership'
import About from './components/About/About'
import SalaryGuide from './components/Employers/SalaryGuide'
import uuid from 'react-uuid'

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const jobOffers = [
    {id: uuid(), position: 'backend', title:'Software Engineer I (Backend)', salary:'$98,517 a year', city:'Denver', company:'VIZIO', description:`VIZIO’s Platform Cloud Services team is seeking a Software Engineer to join their growing team. The successful candidate will have the opportunity to build cloud software services that support customers using Vizio SmartCast TV and Sound Bar technology. Your work will have a direct and measurable impact on our high-scale infrastructure and performant services, running on the latest cloud technologies. The Software Engineering role reports to the Platform Cloud Services Software Engineering Manager and Director, supporting the VIZIO Platform Engineering organization.`, added: false},
    {id: uuid(), position: 'backend', title:'Backend Software Engineer, Bitbucket', salary:'$80,000 a year', city:'Austin', company:'Atlassian', description:`Come join us at Atlassian and work on bitbucket.org, our source code hosting site! You will be working in a fast paced SaaS environment where every line of code you write will be appreciated by a developer community of millions. You will be responsible for designing, implementing, monitoring, scaling and optimizing the code that powers Bitbucket. The company and our products are scaling rapidly and this is the team with the most to gain (and the most at stake!).`, added: false},
    {id: uuid(), position: 'backend', title: 'Software Engineer - AIQ Backend Team', salary: '$146,340 a year', city: 'Durham', company: 'Research Triangle Park', description: `As a Software Engineer on our team, you will work as part of an innovative and fun team responsible for developing our SaaS platform for monitoring and reporting, enabling customers to prevent, rather than react to, issues in their environment. You will focus on new product development and enhancements to existing products. Our backend stack continues to evolve, and currently includes Scala, Kafka, Cassandra, RabbitMQ, and MySQL in AWS and EKS environments. As a backend developer you will focus on building services and infrastructure that feed our user interface and data systems.`, added: false},
  
    {id: uuid(), position: 'analyst', title: 'IT Software Analyst', salary:'$95,000 a year', city:'Irvine', company:'Inari Medical', description:`The IT Software Analyst will play a key role in the various business system software implementation and maintenance by driving quality improvements and validating quality criteria. This role will also have a broad range of responsibilities in project management and compliance.`, added: false},
    {id: uuid(), position: 'analyst', title: 'IT Application Analyst (Provider)', salary: '$65,000 a year', city: 'Memphis', company:'Regional One Health', description: `Responsible for the lead functional support of hospital applications, processes and projects, along with understanding the technical functionality of the systems and processes for the Provider team at Regional One Health. Has direct responsibility for analyzing process re-engineering to more effectively utilize current systems’ resources in support of the initiatives of the provider application team, ensures that the system is properly maintained and all business operation needs are met. Supports the functional and technical operation of all related systems, and leads the implementation of new systems, interfaces and updates systems. `, added: false},
    {id: uuid(), position: 'analyst', title: 'IT netweork analyst', salary:'$100,000 a year', city: 'city', company: 'Genesee County', description: `Performs highly specialized work which includes the installation, configuration, maintenance and optimization of WAN, LAN, Wireless, Telecommunications, Security and related components to achieve high reliability and performance. Ensures the availability of systems, configuring new implementations, and developing processes and procedures for ongoing management of the network and telecommunications environment. Ensures the physical security, integrity, and safety of the network. Participates in the installation, monitoring, maintenance, support, and optimization of all hardware, software, and communication links.`, added: false},

    {id: uuid(), position: 'fullstack', title: 'Software Development Engineer (Fullstack) (Level 6)', salary: '$170,000 a year', city:'Austin', company: 'Amazon Web Services', description: `Amazon Web Services (AWS) is looking for a full stack engineer who is passionate about designing and building user interfaces for our data warehousing and analytics platform that will delight our users. You will work on re-imagined interfaces that keep our users at the center by understanding their workflows at a detailed level and enabling them by understanding the full stack of our product. Improving productivity of data analysts and DBA(s) by innovating and simplifying the analysis and querying of data is the goal.`, added: false},
    {id: uuid(), position: 'fullstack', title: 'Fullstack Software Engineer', salary: '$145,000 a year', city: 'Redwood City', company: 'Box', description: `Our Fullstack Engineering organization is made up of many different teams that you can join. Whether you enjoy working on building new tools and APIs to help users get their work done faster , or have a passion for building out enterprise products and features that are able to handle complex use-cases in a robust and easy-to-use way , we'll help find the right team for you and what you're interested in doing.`, added: false},
    {id: uuid(), position: 'fullstack', title: 'FullStack Developer', salary: '$128,000 a year', city: 'Plano', company: 'Intuit', description: `Intuit’s ProConnect Group is looking for a talented Software Engineer with a passion for tackling complex problems of scale which are unique to Intuit. We are looking for someone who can design, write, tune and operate highly available and performing modern software products.`, added: false},

    {id: uuid(), position: 'devOps', title: 'DevOps Engineer', salary: '$103,000 a year', city:'Durham', company:'Hewlett Packard Enterprise', description: `We are looking for a DevOps Engineer to join us in HPE’s Storage Business Unit. If you have a track record in and a passion for operations, want to be part of a business that is growing with great opportunities, and are ready for your next role, then please apply today. `, added: false},
    {id: uuid(), position: 'devOps', title: 'DevOps Engineer', salary: '$96,922 a year', city: 'Denver', company: 'VIZIO', description: `VIZIO’s DevOps team is seeking a DevOps Engineer to join their growing team. The successful candidate will have the opportunity to support the automation and process improvements which enables us to accomplish innovative, scalable and reliable systems. The DevOps Engineer will report to the Director, DevOps and provide support to the SmartCast teams.`, added: false},
    {id: uuid(), position: 'devOps', title: 'DevOps Engineer', salary: '$127,950 a year', city: 'Loveland', company: 'Nutrien Ltd', description: `We provide an attractive benefits package that includes comprehensive medical, dental, vision coverage, and life insurance and well as disability coverage for positions working more than 30 hours per week. In addition, we have a retirement program that encourages our employees to save for the longer term, with generous matching employer contributions. Our benefit package also demonstrates our culture of care with paid vacation, sick days and holidays as well as paid personal and maternity/parental leaves and an Employee and Family Assistance Program. `, added: false},

    {id: uuid(), position: 'frontend', title: 'Software Developer - Angular', salary: '$90,000 a year', city: 'Littleton', company: 'Innovar Group', description:`Innovar Group is comprised of senior talent agents who deliver top recruitment services to clients throughout the United States. We bring a new era of recruiting to the industry by aligning state-of-the-art technology with outstanding talent.`, added: false},
    {id: uuid(), position: 'frontend', title: 'Frontend Developer', salary: '$102,950 a year', city: 'Lehi', company: 'Adobe', description: `We’re looking for a great data scientist/developer to bring Adobe’s heritage of content and data management tools to the world in an entirely new way. You will be working on a small, innovative team with little hierarchy. You will directly influence engineering and product decisions. We are already working with modern technologies and practices, come help us take it to the next level. You will be joining a diverse team that knows when it is time to cut loose and have some fun and when it is time to be heads down working towards a goal. You get the agility of a startup and the work/life balance of an established business.`, added: false},
    {id: uuid(), position: 'frontend', title: 'Software Engineer: Frontend', salary: '$140,000 a year', city: 'Colorado', company: 'Digital Ocean Jobs', description: `We are looking for an experienced front-end engineer who shares our passion for making complex applications appear simple for our customers. We'll give you the freedom to do what you do best, so you should feel comfortable owning your work from start to finish, as well as bringing fresh ideas to the table that can make our products, development experience, and team better. You'll have the opportunity to work closely with designers, product managers, and other engineers across the stack to make ideas a reality.`, added: false},

    {id: uuid(), position: 'tester', title: 'IT Tester', salary: '$70,000 a year', city: 'Chantilly', company: 'BRMi', description: `BRMi Technology seeks an IT Tester for one of its large clients in the Northern Virginia area to perform integration, regression, and functional testing on systems to ensure compliance with system requirements, business practices, and policies.`, added: false},
    {id: uuid(), position: 'tester', title: `IT quality assurance tester`, salary: '$85,000 a year', city: 'Chesapeake', company: 'Dollar Tree', description: `The Quality Assurance Specialist is responsible for product testing to assure that software development and control processes are properly documented and tested. This position requires the ability to focus on business requirements, basic understanding of program life cycle, deploy disciplined processes and employ methods of product control.`, added: false},
    {id: uuid(), position: 'tester', title: 'Senior Tester', salary: '$95,000 a year', city: 'Vienna', company:'Nolij Consulting', description: `Nolij Consulting LLC is a certified Women-Owned Small Business (WOSB) that provides information technology services in test and evaluation (T&E), enterprise architecture (EA), electronic health record (EHR) modernization, infrastructure operations and maintenance (O&M), data analytics and visualization, and agile transformation. Nolij Consulting has an opening for a Senior Tester to join our team based in Vienna, VA.`, added: false},

    {id: uuid(), position: 'QA', title: 'BrightDrop - Software QA Engineer', salary: '$95,000 a year', city: 'Georgia', company: 'General Motors', description: `The General Motors BrightDrop team is seeking customer-focused team members who have a passion for innovative technologies and approaches to business. Individuals will work collaboratively in agile teams to create concepts and start new ventures that solve personal and commercial mobility challenges.`, added: false},
    {id: uuid(), position: 'QA', title: 'Quality Assurance Specialist', salary: '$141,548 a year', city: 'Carlsbad', company: 'US Department of Energy', description: `This position is part of the Carlsbad Field Office, Department Of Energy. As a Quality Assurance Specialist, you will be responsible for planning, scheduling, coordinating, and overseeing the performance of certification audits, quality assurance oversight audits, and other assessments at all National Transuranic Waste sites.`, added: false},
    {id: uuid(), position: 'QA', title: 'Quality Assurance Engineer', salary: '$160,000 a year', city: 'Denver', company: 'Amazon.com Services LLC', description: `We are seeking a highly motivated quality assurance engineer to join our team that owns the on-device software, as well as publicly facing mobile applications, used to setup and manage our devices on a global scale. Our software is inherent on many major Amazon devices, including the Echo Show and Echo Dot families, with device launches planned others.`, added: false},

    {id: uuid(), position: 'project manager', title: 'Project Manager, New Projects and Processes', salary: '$137,000 a year', city: 'Denver', company: 'Amazon.com Services LLC', description: `A successful candidate must demonstrate strong leadership skills, exceptional ability to influence, organizational expertise, strong verbal and written communication skills, and a passion for ensuring team members understand the why of changes and the ensuring “stickiness” of the change. You are self-motivated, solutions-oriented, comfortable with ambiguity, and innovative in developing best-in-class programs.`, added: false},
    {id: uuid(), position: 'project manager', title: 'Technical Project Manager II', salary: '$91,810 a year', city: 'Rochester', company: `Department Mayor's Office Bureau`, description: `Required: Bachelor's degree in Business Administration, Management Information Systems, or closely related field PLUS five (5) years of experience in information technology project management`, added: false},
    {id: uuid(), position: 'project manager', title: 'Project Manager', salary: '$100,000 a year', city: 'Denver', company: 'CBRE', description:`CBRE seeks a Project Manager in Denver Colorado. The purpose of this position is to lead individual, multi-disciplined real estate project solutions for clients, with direct accountability for project delivery.`, added: false},

    {id: uuid(), position: 'architect', title: 'Solution Architect, Digital Enablement', salary: '$165,000 a year', city: 'Centennial', company: 'Innovar Group', description: `Innovar Group is comprised of senior talent agents who deliver top recruitment services to clients throughout the United States. We bring a new era of recruiting to the industry by aligning state-of-the-art technology with outstanding talent.`, added: false},
    {id: uuid(), position: 'architect', title: 'Program Architect - IT, Digital Customer Experience', salary: '$213,900 a year', city: 'Township of Moon', company: 'Eaton', description: `The Program Architect will lead cross program and platform functional and technical strategy, requirement definition, design, testing and related processes in support of solutions to digitize Eaton's customer-facing touchpoints. Initial opportunities will focus on a high-priority Electrical Sector initiative to digitize the commercial construction industry and driving Eaton's strategy to commercialize digital products via the Brightlayer Commercial Framework.`, added: false},
    {id: uuid(), position: 'architect', title: 'Solutions Architect - OneStream', salary: '$200,000 a year', city:'Norwich', company: 'Henderson Drake', description: `This client is recognised as a Diamond level OneStream partner, due to their dedication, success and expertise in this space. This means that you will be exposed to the very best OneStream expertise, projects and training but also learn and develop alongside some of the most experienced OneStream Consultants in the United States.`, added: false},

    {id: uuid(), position: 'mobile', title: 'iOS mobile software engineer', salary: '$88,000 a year', city: 'Chicago', company:'InspiHER Tech', description: `Our client is a strategy-first app design and development firm, with employees who are passionate about helping businesses succeed. Whether the focus is a company’s customers or employees, they aim to improve people’s lives by crafting delightful mobile and technology experiences that improve business processes. You will be responsible for successful delivery of large-scale programs and projects on a global basis across one or more divisions.`, added: false},
    {id: uuid(), position: 'mobile', title: 'Mobile Developer', salary: '$95,000 a year', city: 'Arlington', company:'Piper Companies', description: `Piper Companies is currently seeking a Mobile Developer for a remote opportunity in Raleigh, North Carolina (NC) with a SaaS company. The Mobile Developer will collaborate with a dedicated team working on multiple projects. The opportunity for career and skill growth is extremely high!`, added: false},
    {id: uuid(), position: 'mobile', title: 'Mobile Developer 3', salary: '$150,000 a year', city: 'Salt Lake City', company:'CrossFit', description:`CrossFit is hiring a Senior Mobile Software Engineer to join our rapidly growing engineering organization. You will build and architect new mobile applications to support our large global user base. This includes creating apps for existing initiatives - for example the CrossFit Open which has hundreds of thousands of competitors submitting scores and following their favorite athletes. Also you will contribute to new initiatives in the health and sports competition spaces. `, added: false},

    {id: uuid(), position: 'gameDev', title: 'Game Technologies 3D Graphics Engineer', salary: '$180,000 a year', city: 'Santa Clara Valley', company:'Apple', description:`The Game Technologies team is responsible for developing the gaming foundation as well as building real time graphics based prototypes and applications that integrate with this and other graphics foundations. Responsibilities span building user facing features all the way down to creating frameworks. Taking what we learn from application development and applying it to improving the frameworks, such as SpriteKit, SceneKit, Model I/O and Metal to let developers take their apps to the next level. You will be successful in this role if you are aligned with excellent communication skills, thrive in a fast-paced environment, and possess the versatility to program and test graphics applications as well as frameworks.`, added: false},
    {id: uuid(), position: 'gameDev', title: 'Game and Simulation Developer', salary: '$150,000 a year', city: 'Livermore', company:'Lawrence Livermore National Laboratory', description:`We have an opening for a Game and Simulation Developer to work on multi-disciplinary teams in an environment that encourages the support of the academic research community while focusing on problems of interest to LLNL and Department of Energy (DOE) programs. You will contribute to data visualization and simulations to inform and visualize public and emergency response strategies in support of national security missions. This position is in the Global Security Computing Applications Division (GS-CAD) within the Computing Directorate, matrixed to Global Security’s N Program.`, added: false},
    {id: uuid(), position: 'gameDev', title: 'Game Developer', salary: '$130,000 a year', city: 'Madison', company:'University of Wisconsin–Madison', description:`The Field Day Lab based at the Wisconsin Center for Education Research at the University of Wisconsin - Madison makes learning games that bring contemporary research to the public and use the game data to understand how people learn. The Game Developer position works in coordination with the UI/UX designer, contracted artists, student developers, and the game's producer to create quality educational technology for students.`, added: false},

    {id: uuid(), position: 'UX/UI designer', title: 'KNA UX/UI Designer', salary: '$31,200 a year', city: 'Vermilion Parish', company:'Kaplan', description:`UI/UX Designer who will be responsible for the user experience (UX) and user interface (UI) design of our various digital assets. You will ensure that all elements of the online user experience are optimized for improved usability, performance, and exceptional visual design. This role will collaborate cross-functionally across various teams to develop and support new and existing websites by understanding UX concepts, techniques, best practices, and processes.`, added: false},
    {id: uuid(), position: 'UX/UI designer', title: 'UX/UI Designer', salary: '$65,000 a year', city: 'Los Angeles', company:'AvantStay', description:`We are looking for a dynamic and detail-oriented UX/UI Designer with a strong portfolio of work. This person will embody and inspire the AvantStay aesthetic through creative, high-quality, professional campaigns and will contribute to our overall supply expansion efforts. Our ideal candidate must thrive in a fast-paced environment, has an eye for style, and enthusiasm for digital conversion trends.`, added: false},
    {id: uuid(), position: 'UX/UI designer', title: 'Product Designer (UX/UI)', salary: '$120,000 a year', city: 'Denver', company:'Artifact Uprising', description:` As a product designer, you’ll create human-centered product experiences that solve our customers’ most meaningful problems, while delivering delight. Focusing on the digital experience, you’ll collaborate with product managers, engineers, and others across the business, while leading design efforts end-to-end. You believe design excellence helps drive sustained business impact.`, added: false}
]

  const [addedState, setAddedState] = React.useState(false)

  localStorage.setItem('jobOffers', JSON.stringify(jobOffers))
  return (
    <div className="App">
        <Route path='/home'>
          <Expertise isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/sign-up-as-employer' component={SignUpAsEmployer} />
        <Route path='/sign-up-as-job-seeker' component={SignUpAsJobSeeker} /> 
        <Route path='/client-services/what-we-do/'>
            <BusinessLines isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/log-in'>
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path='/account'>
            <Account isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setAddedState={setAddedState} addedState={addedState}/>
        </Route>  
        <Route path='/client-services/technology-practices'>
            <TechnologyPractices isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>  
        <Route path='/job-seekers'>
            <JobSeekers isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>  
        <Route path='/search-jobs'>
            <SearchJobs isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setAddedState={setAddedState} addedState={addedState}/>
        </Route>  
        <Route path='/employers'>
            <Employers isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/submit-offer'>
            <SubmitOffer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/client-services/industries'>
            <KeyIndustries isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/internal-careers'>
            <InternalCareers isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/modis-academy-program'>
            <AcademyProgram isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/leadership'>
            <Leadership isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path='/about-modis'>
            <About isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>  
        <Route path='/salary-guide'>
            <SalaryGuide isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Footer />
    </div>
  );
}

export default App;
