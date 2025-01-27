"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { Briefcase, Calendar, GraduationCap, User } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "About me", value: "about", icon: User },
];

const tabsContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Fullstack Developer",
        Description:
          "I learnt Fullstack Development with experience of building different websites and web applications involving the use of different technologies such as Next.js, TypeScript, JavaScript, Tailwind CSS, HTML.",
        highlights: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Team Leadership"],
      },
      {
        role: "Frontend Developer",
        Description:
          "I learnt Frontend Development by building websites and web applications. I specialize in HTML, CSS, and JavaScript.",
        highlights: ["HTML", "CSS", "JavaScript", "Team Leadership"],
      },
      {
        role: "OOP Developer",
        Description:
          "OOP Developer working with C, C++, C# and Python. I have experience in building different projects and applications.",
        highlights: ["C", "C++", "C# (basic)", "Python (Intermediate)"],
      },
    ],
  },

  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelors of software engineering",
        period: "2020-2024",
        university: "PUCIT",
        Description:
          "I graduated with a degree in Software Engineering from the Punjab University College of Information Technology (PUCIT). Throughout my studies, I gained a solid foundation in software development, programming languages, and problem-solving techniques. My academic journey equipped me with both theoretical knowledge and practical skills, preparing me to tackle real-world challenges in the tech industry",
        highlights: [
          "Programming Fundamentals", "ICT", "Assembly Language", "Discrete Structures", 
          "Digital Logic Design", "Calculus & Analytical Geometry", "Linear Algebra", "Applied Physics"
        ],
      },
    ],
  },

  about: {
    title: "About Me",
    bio: "Passionate software developer with over 1 year of experience in building modern websites and web applications. I specialize in HTML, CSS, and JavaScript. I am a quick learner and a team player who is always looking to grow and improve my skills.",
    interests: [
      "Software Development", "Web Development", "Open Source Contribution", "Machine Learning", 
      "Team Leadership", "Artificial Intelligence", "Ethical Hacking",
    ],
    Languages: [
      "Urdu (Native)", "Punjabi (Native)", "English (Professional level)", "Hindi (Intermediate)", 
      "Arabic (Intermediate)",
    ],
  },
};

const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-lightSky hover:bg-lightSky/60 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h-[400px]">
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.experience.title}
              </motion.h2>

              <div className="space-y-6">
                {tabsContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.education.title}
              </motion.h2>

              <div className="space-y-6">
                {tabsContent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.degree}</h3>
                        <p className="text-muted-foreground">{item?.university}</p>
                      </div>

                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.about.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border rounded-lg border-lightSky/20 p-6"
              >
                <p className="mb-6 text-lg">{tabsContent.about.bio}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {tabsContent.about.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {tabsContent.about.Languages.map((language, i) => (
                        <Badge key={i} variant="secondary">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
