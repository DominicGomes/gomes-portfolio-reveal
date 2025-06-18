import 'animate.css';
import SectionHeader from './SectionHeader';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // We'll define @keyframes here

const Tools = () => {
  const tools = [
    {
      name: "Android Studio",
      icon: "devicon:androidstudio",
      description: "Native Android Development",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Visual Studio",
      icon: "devicon:visualstudio",
      description: "Full-Stack Development",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Visual Studio Code",
      icon: "logos:visual-studio-code",
      description: "Code Editor & Extensions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SQL Server Management Studio",
      icon: "devicon:microsoftsqlserver",
      description: "Database Management",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Postman",
      icon: "devicon:postman",
      description: "API Testing & Documentation",
      color: "from-orange-400 to-yellow-500",
    },
    {
      name: "ASP.NET",
      icon: "skill-icons:dotnet",
      description: "Web Development Framework",
      color: "from-purple-700 to-blue-500", 
    },
    {
      name: "Dart",
      icon: "material-icon-theme:dart",
      description: "Programming Language for Flutter",
      color: "from-cyan-400 to-blue-500", 
    },
    {
      name: "C#",
      icon: "devicon:csharp",
      description: "Object-Oriented Programming Language",
      color: "from-violet-600 to-indigo-500", 
    },
    {
      name: "Java Script",
      icon: "logos:javascript",
      description: "Dynamic Web Development Language",
      color: "from-yellow-400 to-yellow-500",
    },

    {
      name: "Java",
      icon: "logos:java",
      description: "Object-Oriented Programming Language",
      color: "from-blue-500 to-orange-400",
    },
  ];

  return (
    <section id="tools" className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <SectionHeader
          title="Technical"
          highlight="Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />
        </div>
        {/* Swiper Container */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1400px]">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              grabCursor={true}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={800}
              modules={[Navigation, Autoplay]}
              className="">
              {tools.map((tool, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group flex flex-col items-center transition-all duration-300">

                    {/* Card */}
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700/50 hover:border-white/40 transition-all duration-300 w-full h-[240px] group-hover:h-[230px] flex flex-col justify-between overflow-hidden">

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />

                      {/* Content */}
                      <div className="relative z-10 transition-all duration-300">
                        <div className="flex justify-center mb-4">
                          <Icon icon={tool.icon} className="text-4xl text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 text-center">{tool.name}</h3>
                        <p className="text-sm text-gray-300 text-center leading-relaxed">{tool.description}</p>
                      </div>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300 -z-10`} />
                    </div>

                    {/* Line */}
                    <div className={`mt-2 h-2 w-4/5 bg-gradient-to-r ${tool.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
