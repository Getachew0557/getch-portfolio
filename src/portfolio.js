/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Getachew",
  logo_name: "Getachew",
  nickname: "Getch / Getu",
  full_name: "Getachew Getu",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1ybVY2oliC0HvwYRqmFdpFB7RAtXFQJFl/view?usp=drive_link",
  mail: "mailto:getachewgetu2010@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Getachew0557",
  linkedin: "https://www.linkedin.com/in/getachew-getu-9534041a4/",
  gmail: "getachewgetu2010@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/EnyewGetu",
  instagram: "https://www.instagram.com/getachewgetu12/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Kotlin",
        //   fontAwesomeClassname: "simple-icons:kotlin",
        //   style: {
        //     color: "#5c79df",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Go",
        //   fontAwesomeClassname: "simple-icons:go",
        //   style: {
        //     color: "#00A7D0",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "C#",
        //   fontAwesomeClassname: "simple-icons:csharp",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#8CC84B",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android App Development",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in Machine Learning and Generative AI",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by 10 Academy, IBM and Stanford Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Addis Ababa Science and Technology University",
      subtitle: "Masters Degree in Computer Engineering",
      logo_path: "aastu.jpg",
      alt_name: "DAL",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Gained in-depth knowledge in advanced fields such as Machine Learning, Image Processing, Cybersecurity, High-Performance Computing, Distributed Systems, and Parallel Computing.",
        "⚡ Conducted research and implemented projects focused on Customer Churn Prediction and Brain Tumor Detection using machine learning and data analysis techniques.",
        "⚡ Completed a Master's thesis titled 'Road Traffic Accident Severity Classification Using Machine Learning Approaches,' receiving a 'Very Good' grade for the research and findings.",
        "⚡ Developed skills in handling complex data structures, optimizing computational models, and deploying solutions for real-world problems in engineering and data science.",
      ],
      website_link: "https://www.aastu.edu.et/",
    },
    {
      title: "Addis Ababa Science and Technology University",
      subtitle:
        "Bachillors Degree in Electrical Engineering (Computer Engineering Specialization)",
      logo_path: "aastu.jpg",
      alt_name: "SETI",
      duration: "2017 - 2022",
      descriptions: [
        "⚡ Studied key areas in computer science and engineering, including Object-Oriented Programming, Java, Python, Data Structures, DBMS, C++, Computer Networking, Embedded Systems, Microprocessors, and Interfacing.",
        "⚡ Developed strong technical foundations in both hardware and software engineering, with a focus on computational systems and networking.",
        "⚡ Completed a Bachelor's thesis project titled 'Computer Vision-Based Authentication and Employee Monitoring System,' which earned an 'Excellent' grade.",
        "⚡ Published a journal article on the thesis topic in the International Journal of Innovative Science and Research Technology (IJISRT). You can view the paper here: [Computer Vision-Based Authentication and Employee Monitoring System](https://ijisrt.com/computer-vision-based-authentication-and-employee-monitoring-system).",
      ],
      website_link: "https://www.aastu.edu.et/",
    },

    {
      title: "10 Academy",
      subtitle: "Artificail Intelligence Mastery",
      logo_path: "10academy.jpg",
      alt_name: "SETI",
      duration: "Aug 2024 - Nov 2024",
      descriptions: [
        "💡 Gained hands-on experience in the basics of Machine Learning, including Data Analysis, Visualization, and Machine Learning workflows.",
        "💡 Learned about version control and management tools like MLflow and DVC, along with the integration of Docker for deployment.",
        "💡 Explored advanced topics such as Natural Language Processing (NLP), Large Language Models (LLM), and Telegram scraping for data collection.",
        "💡 Worked on multiple classification and regression problems, honing practical skills in building and deploying machine learning models.",
        "💡 Gained expertise in Generative AI, including deep learning models, GANs, and AI-driven content generation.",
      ],
      website_link: "https://10academy.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Machine Learning",
      subtitle: "Stamford University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1YGIw7KRlEHeDhag50Ict47f_WA2y1UuE/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AI Career Essential",
      subtitle: "ALX",
      logo_path: "alx.png",
      certificate_link:
        "https://drive.google.com/file/d/1x98T7hU1hakSxPw5JuqzSpjAZEny4Kb5/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Computer Networking",
      subtitle: "11/21/2021",
      logo_path: "cisco.jpg",
      certificate_link:
        "https://www.credly.com/badges/70802195-a2dd-42f8-a156-8236609378d3",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Introduction to Packet Tracer",
      subtitle: "8/12/2021",
      logo_path: "cisco.jpg",
      certificate_link:
        "https://www.credly.com/badges/22e397af-5a27-4b78-83f1-6924107e3f59",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Artificial Intelligence Intro",
      subtitle: "IBM ",
      logo_path: "IBM.png",
      certificate_link:
        "https://www.credly.com/badges/3ac35dc1-8fd0-4a2f-9fed-0298982a7c30",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Data Analysis Fundamental",
      subtitle: "Udacity",
      logo_path: "100.png",
      certificate_link:
        "https://www.udacity.com/certificate/e/c799bb20-4a9b-11ef-abb6-fb4251be614c",
      alt_name: "deeplearning.ai",
      color_code: "#C5E2EE",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "Digital Guarage",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ayg8kTdc6SrgVWm0zuYHyIXf4gclFNrE/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "NSE Network Security Associate",
      subtitle: "Fortinet",
      logo_path: "fortinet.png",
      certificate_link:
        "https://drive.google.com/file/d/1wVgBGz4RqLP_tzN7KKX7ZcD_65zYGffY/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Author Certification",
      subtitle:
        " International Journal of Innovative Science and Research Technology (IJISRT)",
      logo_path: "author.png",
      certificate_link:
        "https://drive.google.com/file/d/16vnw45yxywnXsJL9etgyI2TA0jsztaTs/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link:
        "https://www.udacity.com/certificate/e/230a58ec-97be-11ef-b7d5-37a75f522899",
      alt_name: "Stanford University",
      color_code: "#C5E2EE",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://www.udacity.com/certificate/e/230a58ec-97be-11ef-b7d5-37a75f522899",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Application Developer",
          company: "Information Network Security Administration (INSA)",
          company_url: "https://insa.gov.et/",
          logo_path: "insa.jpg",
          duration: "March 2023 - Ongoing",
          location: "Addis Ababa, Ethiopia",
          description:
            "Developed and maintained scalable web applications using Python and AWS infrastructure services. • Contributed to the Web Application Firewall and Antivirus, ensuring the protection of organizational assets. • Integrated machine learning models for advanced threat intelligence, enhancing network security measures. • Implemented and managed CI/CD pipelines using Git, facilitating continuous integration and deployment. • Worked collaboratively with cross-functional teams to identify and resolve technical challenges.",
          color: "#f10000",
        },
        {
          title: "Junior Software Support Engineer",
          company: "Moti Engineering PLC",
          company_url: "https://www.motiengineering.com/",
          logo_path: "moti_eng.jpg",
          duration: "December 2022 - March 2023",
          location: "Addis Ababa, Ethiopia",
          description:
            "Developed a Voice Guidance application, assisted clients with software troubleshooting, and conducted training sessions on new software features.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Cyber Talent",
          company: "Information Network Security Administration (INSA)",
          company_url: "https://insa.gov.et/",
          logo_path: "insa.jpg",
          duration: "July 2022 - Dec 2022",
          location: "Addis Ababa, Ethiopia",
          description:
            "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
          color: "#ee3c26",
        },
        // {
        //   title: "Android App Developer Intern",
        //   company: "IAS4Sure",
        //   company_url: " ",
        //   logo_path: "buld.jpg",
        //   duration: "December 2019 - February 2020",
        //   location: "Work From Home",
        //   description:
        //     "Internship task was to make a native Android application. ",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Web Developer",
        //   company: "Wrighter Writing Solutions",
        //   company_url: " ",
        //   logo_path: "wrighter.jpg",
        //   duration: "August 2020",
        //   location: "",
        //   description: "Develop a website using PHP and jQuery.",
        //   color: "#56A4D3",
        // },
        // {
        //   title: "Front-End Developer",
        //   company: "VJ TechServe",
        //   company_url: " ",
        //   logo_path: "vjt.png",
        //   duration: "September 2020",
        //   location: "",
        //   description: "Develop a portfolio website using ReactJS",
        //   color: "#800000",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "INSA Cyber Talent Summr camp Mentor",
          company: "Collaboration of AASTU and INSA",
          company_url: "",
          logo_path: "insa.jpg",
          duration: "Summer of 2023 and 2024",
          location: " ",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        // {
        //   title: "Google Code-In Mentor",
        //   company: "Sugar Labs / GSoC",
        //   company_url: "https://sugarlabs.org/",
        //   logo_path: "google_logo.png",
        //   duration: "Winter of 2017 / 18 / 19",
        //   location: " ",
        //   description:
        //     "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Board Member at Codeuino",
        //   company: " ",
        //   company_url: " ",
        //   logo_path: "codeuino.jpg",
        //   duration: "2018 - 2019",
        //   location: " ",
        //   description: "Previous Board during early days of Codeuino",
        //   color: "#D83B01",
        // },
        // {
        //   title: "BluWings Club",
        //   company: " ",
        //   company_url: " ",
        //   logo_path: "b.png",
        //   duration: "2018 - On Going",
        //   location: " ",
        //   description:
        //     "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
        //   color: "#D83B01",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@getachewgetu2010",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    // project
    // {
    //   name: "CineScope",
    //   url: "https://github.com/Hrishi1999/CineScope",
    //   description: "An IMDB-like application.",
    //   languages: [
    //     {
    //       name: "React.js",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TypeScript",
    //       iconifyClass: "devicon-typescript",
    //     },
    //     {
    //       name: "Node.js",
    //       iconifyClass: "devicon-nodejs",
    //     },
    //     {
    //       name: "Express.js",
    //       iconifyClass: "devicon-express",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "Journalify",
    //   url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
    //   description:
    //     "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "RecipesAPI",
    //   url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
    //   description: "Get recipes for hundreds and thousands of dishes",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    // },
    // {
    //   name: "opPortfolio",
    //   url: "https://github.com/Hrishi1999/opPortfolio",
    //   description: "(This) A clean and full customizable portfolio template.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
    // {
    //   name: "Cab Security System",
    //   url: " ",
    //   description:
    //     "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Lensinator",
    //   url: " ",
    //   description:
    //     "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "Doorbell.io",
    //   url: "https://github.com/Hrishi1999/Doorbell.io",
    //   description:
    //     "A sound-classifier webapp made with ReactJS + TensorflowJS.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TensorflowJS",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Video Summarization",
    //   url: "https://github.com/Hrishi1999/Video-Summarization",
    //   description:
    //     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Dashboard Activity",
    //   url: "https://github.com/Hrishi1999/Dashboard.activity",
    //   description:
    //     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Pickle",
    //   url: " ",
    //   description:
    //     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
    //   languages: [
    //     {
    //       name: "Java",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Health Card",
    //   url: "",
    //   description:
    //     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "Food Classifier",
    //   url: " ",
    //   description:
    //     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Dart",
    //       iconifyClass: "logos-dart",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Antivirus",
    //   url: " ",
    //   description:
    //     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //   ],
    // },
    // {
    //   name: "Sugar on Windows",
    //   url: " ",
    //   description:
    //     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Object + Face Detection",
    //   url: " ",
    //   description: "2017 project. Object detection + accurate face detection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Captioning with Visual Attention",
    //   url: " ",
    //   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "DalSocial",
    //   url: " ",
    //   description:
    //     "An Android app to meet new people in the university, organize and join events. ",
    //   languages: [
    //     {
    //       name: "Kotlin",
    //       iconifyClass: "simple-icons:kotlin",
    //       color: "#F18E33",
    //     },
    //     {
    //       name: "Android",
    //       iconifyClass: "simple-icons:android",
    //       color: "#3DDC84",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "HalifaxFoodie",
    //   url: " ",
    //   description:
    //     "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "AWS",
    //       iconifyClass: "logos-aws",
    //     },
    //     {
    //       name: "Google Cloud",
    //       iconifyClass: "logos-google-cloud",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
