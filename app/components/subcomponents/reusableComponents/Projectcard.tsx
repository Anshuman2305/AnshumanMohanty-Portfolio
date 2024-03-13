import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  web_link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, web_link }) => {
  return (
    <a href={web_link} target='blank' className='card transition ease-in-out duration-300 hover:bg-dullgreen flex basis-1/2 flex-col gap-2 justify-center border-[2px] rounded-2xl border-dullgreen px-2 py-4 md:p-4'>
      <h2 className='text-brightgreen text-[16px] md:text-lg lg:text-xl px-2 font-bold line-clamp-1'>{title}</h2>
      <p className='text-mediumgreen text-[14px] md:text-sm px-2 text-justify'>{description}</p>
    </a>
  );
};

export default ProjectCard;