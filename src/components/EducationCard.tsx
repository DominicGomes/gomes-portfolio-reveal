import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

interface EducationEntry {
  institution: string;
  subject: string;
  passingYear: string;
  result: string;
}

interface EducationCardProps {
  education: EducationEntry;
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  const animationDelay = index * 100;

  return (
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <Card className="w-full transition-all duration-300 border border-gray-700/50 bg-gray-800/60 backdrop-blur-md rounded-lg hover:border-[#3c799e]/60 hover:scale-105 hover:shadow-[0_4px_15px_rgba(60,121,158,0.6)] overflow-hidden will-change-transform preserve-3d">
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5 rounded-lg pointer-events-none"></div>
<CardContent className="p-6 relative z-20">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center items-start">
    {/* Education Item */}
    {[
      {
        icon: "fluent-emoji-flat:school",
        text: education.institution,
      },
      {
        icon: "noto:blue-book",
        text: education.subject,
      },
      {
        icon: "uim:calender",
        text: education.passingYear,
      },
      {
        icon: "noto:sports-medal",
        text: education.result,
      },
    ].map((item, idx) => (
      <div key={idx} className="flex flex-col items-center">
        {/* Fixed Icon Area */}
        <div className="h-8 flex items-center justify-center">
          <Icon icon={item.icon} className="h-6 w-6 text-[#3c799e]" />
        </div>

        {/* Text Below (can wrap) */}
        <div className="mt-2">
          <span className="font-medium text-gray-200 break-words whitespace-normal text-md">
            {item.text}
          </span>
        </div>
      </div>
    ))}
  </div>
</CardContent>

      </Card>
    </div>
  );
};

export default EducationCard;
