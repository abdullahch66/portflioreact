import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";

const socialData = [
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/abdullahch66",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/abdullah-pu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "YouTube",
    icon: <Youtube />,
    href: "",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "",
  },
];

const SocialLinks = () => {
  
    return (
        <TooltipProvider>

    <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
      {socialData?.map((item)=>(

        <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
            <div 
                className=" text-lightSky/80 border 
                border-lightSky/30 p-2.5
                hover:bg-hoverColor/10
                hover:border-lightSky
                hoverEffect
                rounded-full"
                >
    
              <Link href={item?.href} target="_blank">
                <span>{item?.icon}</span>
              </Link>
            </div>
            </TooltipTrigger>
            <TooltipContent className="lowercase">{item?.title}</TooltipContent>
         </Tooltip>
          )
          )}
    </div>
    </TooltipProvider>
  );
 
 
};

export default SocialLinks;
