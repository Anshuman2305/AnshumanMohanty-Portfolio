import React from 'react';

type EducationCardProps = {
    timeperiod: string;
    marks: string;
    institute_name: string;
    short_institute_name: string;
    description: string;
};

const EducationCard: React.FC<EducationCardProps> = ({ timeperiod, marks, institute_name, short_institute_name=institute_name, description }) => {
    return (
        <div className="card flex flex-col justify-center rounded-2xl bg-dullgreen p-4">
            <div className="chip-container flex flex-row gap-2 mb-2">
                <div className="timefrom text-mediumgreen text-xs md:text-sm bg-darkgreen-bg py-1 px-3 rounded-full">{timeperiod}</div>
                <div className="timefrom text-mediumgreen text-xs md:text-sm bg-darkgreen-bg py-1 px-3 rounded-full">{marks}</div>
            </div>
            <h3 className="text-brightgreen text-[15px] md:text-lg px-2 mb-1 hidden md:block">{institute_name}</h3>
            <h3 className="text-brightgreen text-[15px] md:text-lg px-2 mb-1 block md:hidden">{short_institute_name}</h3>
            <p className="text-[12px] md:text-base px-3 text-mediumgreen">- {description}</p>
        </div>
    );
};


export default EducationCard;