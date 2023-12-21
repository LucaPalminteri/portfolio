import { Work } from "../types/types";

const works: Work[] = [
  {
    title: "La Mutual AMR, Rosario, AR",
    position: "Full Stack Developer and DevOps Engineer",
    duration: "2022 - Present",
    description: `
        Played a pivotal role as a Full Stack developer and DevOps engineer at La Mutual AMR.
        Led the development of the e-commerce platform, LaMedica, including frontend, backend, and database implementation. Achieved optimal performance through the use of Redis and gRPC, ensuring security measures were in place.
        Spearheaded a project to optimize the website, defining the architecture from the ground up. Utilized RESTful APIs and gRPC for backend communication, later transitioning to MongoDB for networking improvements.
        Implemented incremental integration into the existing code base and managed the project using Jira's agile methodology with tickets and sprints.
      `,
    link: 'https://www.mutualamr.org.ar/'
  },
  {
    title: "Restaurant Administration Website",
    position: "Full Stack Developer",
    duration: "2023 - Present",
    description: `
        Collaborated on a side project with a coworker to create a comprehensive restaurant management application.
        Developed both frontend and backend applications, including a client booking system and a dashboard for restaurant owners to access key business metrics.
        Took charge of deployments, ensuring a seamless user experience for both clients and restaurant owners.
      `,
  },
  {
    title: "ASM Electronics",
    position: "Software Engineer",
    duration: "2021 - 2022",
    description: `
          Contributed as a Software Engineer at Tech Innovations Ltd.
          Collaborated on the development of a cutting-edge mobile application, enhancing user experience and functionality.
          Implemented RESTful APIs for seamless communication between the frontend and backend components.
          Conducted code reviews and participated in team retrospectives to improve development processes.
        `,
    link: 'http://asmelectronic.com.ar/'
  },
];

export default works