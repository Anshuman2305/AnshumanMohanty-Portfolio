import React from 'react';

type ExperienceCardProps = {
    designation: string;
    timeperiod: string;
    company: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ designation, timeperiod, company }) => {
    return (
        <div className="card flex flex-col justify-center border-[3px] rounded-2xl border-dullgreen p-4">
            <div className="chip-container flex flex-row gap-2 mb-4">
                <div className="my-position text-mediumgreen text-sm bg-dullgreen py-1 px-3 rounded-full">{designation}</div>
                <div className="timefrom text-mediumgreen text-sm bg-dullgreen py-1 px-3 rounded-full">{timeperiod}</div>
            </div>
            <h3 className="text-brightgreen text-lg lg:text-xl px-2">{company}</h3>
        </div>
    );
};

export default ExperienceCard;