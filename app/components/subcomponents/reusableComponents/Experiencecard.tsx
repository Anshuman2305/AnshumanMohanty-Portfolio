import React from 'react';

type ExperienceCardProps = {
    designation: string;
    timeperiod: string;
    company: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ designation, timeperiod, company }) => {
    return (
        <div className="card flex flex-col justify-center border-[2px] rounded-2xl border-dullgreen p-4">
            <div className="chip-container flex flex-row gap-2 mb-4">
                <div className="my-position text-mediumgreen text-xs md:text-sm bg-dullgreen py-1 px-3 rounded-full">{designation}</div>
                <div className="timefrom text-mediumgreen text-xs md:text-sm bg-dullgreen py-1 px-3 rounded-full">{timeperiod}</div>
            </div>
            <h3 className="text-brightgreen text-[15px] lg:text-xl px-2 font-semibold md:font-normal">{company}</h3>
        </div>
    );
};

export default ExperienceCard;