import React, { useEffect } from "react";
import { GraduationCap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";

interface EducationEntry {
    institution: string;
    subject: string;
    address: string;
    passingYear: string;
    result: string;
    image: string;
}

const educationData: EducationEntry[] = [
    {
        institution: "Daffodil International University",
        subject: "M.Sc in Computing & Information System",
        address: "Daffodil Smart City, Birulia, Savar, Dhaka",
        passingYear: "2022",
        result: "3.43/4.0",
        image: "/bachelor-certificate.png"
    },
    {
        institution: "Notre Dame College",
        subject: "H.S.C (Business Studies)",
        address: "Toyenbee Circular Road, Dhaka",
        passingYear: "2018",
        result: "4.83/5.0",
        image: "/hsc-certificate.jpg"
    },
    {
        institution: "Bandura Holy School & College",
        subject: "S.S.C (Business Studies)",
        address: "Nawabgonj, Dhaka",
        passingYear: "2016",
        result: "4.72/5.0",
        image: "/ssc-certificate.jpg"
    }
];

// Sample EducationCard component with hover tooltip
const EducationCard: React.FC<{ education: EducationEntry; index: number }> = ({ education, index }) => {
    return (
        <div
            className="relative group inset-0 bg-gray-800/60  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5 rounded-lg pointer-events-none"></div>

            <div className="flex items-center space-x-3">
                <GraduationCap className="h-6 w-6 text-portfolio-accent" />
                <h3 className="text-lg font-semibold">{education.institution}</h3>
            </div>
            <p className="mt-2 text-gray-500">{education.subject}</p>
            <p className="text-sm text-gray-600">{education.address}</p>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span>Year: {education.passingYear}</span>
                <span className="text-white">Result: {education.result}</span>
            </div>
            {/* Tooltip with image */}
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-24 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gray-800/60 p-2 rounded-lg shadow-lg border">
                    <img
                        src={education.image}
                        alt={`${education.institution} certificate`}
                        className="w-72 h-54 object-cover rounded"
                    />
                </div>
                {/* Tooltip arrow */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent"></div>
            </div>
        </div>
    );
};

const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
            delay: 0
        });
    }, []);

    return (
        <section id="education" className="mt-20 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-6 lg:px-0">
                    <SectionHeader
                        title="Educational "
                        highlight="Background"
                        subtitle="A journey through my professional career and the impact I've made"
                    />
                </div>
                <div className="space-y-6">
                    {educationData.map((education, index) => (
                        <EducationCard
                            key={index}
                            education={education}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;