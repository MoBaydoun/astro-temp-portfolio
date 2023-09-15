type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "bydn.mo@gmail.com",
  title: "Hi, I’m Mo 👋",
  profile: "/profile.webp",
  description:
    "I am a *full stack developer* with over *2 years* of web experience (less than a year formally). I am currently working with *Next.js and Typescript*. Outside of work, I like working on my own projects and cooking.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/MoBaydoun",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/mo-baydoun/",
    },
  ],
};

export default presentation;
