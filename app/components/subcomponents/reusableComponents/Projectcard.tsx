import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className='card flex basis-1/2 flex-col gap-2 justify-center border-[3px] rounded-2xl border-dullgreen p-4'>
      <h2 className='text-brightgreen text-lg lg:text-xl px-2 font-bold line-clamp-1'>{title}</h2>
      <p className='text-mediumgreen text-sm px-2 line-clamp-2'>{description}</p>
    </div>
  );
};

export default ProjectCard;