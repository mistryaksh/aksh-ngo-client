import React, { FC } from "react";

export const IntroductionModule: FC = () => {
     return (
          <div className="flex flex-col items-center justify-center w-full">
               <div className="flex flex-col items-center justify-center w-full">
                    <p className="text-emerald-500 text-lg sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5">
                         Who Are We
                    </p>
                    <div className="bg-emerald-500 h-0.5 w-12 sm:w-24 mb-6" />
                    <div className="flex flex-col items-center justify-center mb-8 sm:mb-14">
                         <img
                              src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt="introduction-img"
                              className="aspect-video w-full rounded"
                         />
                    </div>
                    <h1 className="text-blue-950 text-xl sm:text-3xl font-semibold tracking-wide leading-normal mb-6 sm:mb-10 text-center">
                         An NGO (Non-Governmental Organization) focused on content could encompass various areas
                         depending on its mission and objectives. Here's a general outline of what such an NGO might
                         focus on.
                    </h1>
               </div>

               <div className="w-full sm:w-3/4 mb-10 sm:mb-16">
                    <p className="text-slate-500 text-sm sm:text-lg font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
                         The NGO could produce various types of content—articles, videos, infographics, podcasts—on
                         topics aligned with its mission. This content could be disseminated through various channels
                         such as social media, newsletters, websites, or even partnerships with traditional media
                         outlets.
                    </p>
               </div>

               <div className="w-full sm:w-3/4 mb-4 sm:mb-8">
                    <p className="text-emerald-500 text-xl sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5 text-center">
                         Vision
                    </p>
                    <div className="flex flex-col items-center justify-center w-full">
                         <div className="bg-emerald-500 h-0.5 w-8 sm:w-12 mb-3.5 sm:mb-6" />
                    </div>
                    <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
                         We envision making a significant to quality education and environment.
                    </p>
               </div>

               <div className="w-full sm:w-3/4 mb-4 sm:mb-8">
                    <p className="text-emerald-500 text-xl sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5 text-center">
                         Mission
                    </p>
                    <div className="flex flex-col items-center justify-center w-full">
                         <div className="bg-emerald-500 h-0.5 w-8 sm:w-16 mb-4 sm:mb-6" />
                    </div>
                    <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
                         One of the key roles of the NGO could be to educate and raise awareness about important issues
                         through content. This could involve creating educational materials, organizing workshops or
                         webinars, and leveraging digital platforms to reach a wide audience.
                    </p>
               </div>

               <div className="w-full sm:w-3/4">
                    <p className="text-emerald-500 text-xl sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5 text-center">
                         Beneficiary Groups
                    </p>
                    <div className="flex flex-col items-center justify-center w-full">
                         <div className="bg-emerald-500 h-0.5 w-28 sm:w-40 mb-4 sm:mb-6" />
                    </div>
                    <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
                         Overall, an NGO focused on content would aim to leverage the power of storytelling, information
                         dissemination, and digital communication to advance its mission and create positive social
                         change.
                    </p>
               </div>
          </div>
     );
};
