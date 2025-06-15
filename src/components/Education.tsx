import React, { useEffect } from "react";
import { GraduationCap } from "lucide-react";
import EducationCard from "./EducationCard";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";

interface EducationEntry {
    institution: string;
    subject: string;
    address: string;
    passingYear: string;
    result: string;
}

const educationData: EducationEntry[] = [
    {
        institution: "Daffodil International University",
        subject: "M.Sc in Computing & Information System",
        address: "Daffodil Smart City, Birulia, Savar, Dhaka",
        passingYear: "2022",
        result: "3.43/4.0"
    },
    {
        institution: "Nore Dame College",
        subject: "H.S.C (Business Studies)",
        address: "Toyenbee Circular Road, Dhaka",
        passingYear: "2018",
        result: "4.83/5.0"
    },
    {
        institution: "Bandura Holy School & College",
        subject: "S.S.C (Business Studies)",
        address: "Nawabgonj, Dhaka",
        passingYear: "2016",
        result: "4.72/5.0"
    }
];

const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: false, // Animation will occur every time the element scrolls into view
            offset: 50,
            delay: 0
        });
    }, []);

    return (
        <section id="education" className="mt-20 py-10">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    title="Educational "
                    highlight="Background"
                    subtitle="A journey through my professional career and the impact I've made"
                />

                {/* Education List */}
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
