export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "E-Invite",
    techs: ["Next.js", "TypeScript", "tRPC", "Prisma", "zod"],
    link: "https://github.com/MoBaydoun/link-shortener",
  },
  {
    title: "Waddle",
    techs: ["Next.js", "TypeScript", "Node.js"],
    link: "https://github.com/Nosewall/Waddle",
  },
  {
    title: "Snake",
    techs: ["C++", "OpenGL ES", "Swift"],
    link: "https://github.com/MoBaydoun/Snake",
  },
];

export default projects;
