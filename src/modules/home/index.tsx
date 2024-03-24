import React from "react";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../core/enums";
import { Button } from "../../core/components";
import { MissionModule, AboutModule, ProgramsModule } from "../../modules";

export const HomeModule = () => {
     const navigate = useNavigate();

     return (
          <div className="w-full max-h-full">
               {/* <div className="w-full h-screen"> */}
               <div
                    className="w-full sm:h-screen h-min"
                    style={{
                         backgroundImage: "url('./hero.png')",
                         backgroundPosition: "center",
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "cover",
                    }}
               >
                    <div className="container mx-auto">
                         <div className="flex items-center justify-start px-8 sm:px-14 py-20 sm:py-52">
                              <div>
                                   <div className="animate__animated animate__fadeInUp animate__delay-0.8s">
                                        <h1 className="text-blue-950 text-4xl sm:text-7xl tracking-wide sm:tracking-wider font-bold leading-tight mb-4 sm:mb-6">
                                             Empowering Health, <br />
                                             Inspiring Lives
                                        </h1>
                                        <p className="text-blue-950 text-sm sm:text-base tracking-wider font-light leading-relaxed mb-12">
                                             Empowering Health, Inspiring Lives Together, We Create a Stronger Tomorrow
                                        </p>
                                   </div>
                                   <div className="flex items-center">
                                        <div className="sm:inline hidden">
                                             <Button
                                                  value="Donate Now"
                                                  styles="animate__animated animate__fadeInLeft animate__delay-1s"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                             />
                                             <Button
                                                  styles="animate__animated animate__fadeInRight animate__delay-1s"
                                                  transparent
                                             >
                                                  <div className="flex items-center gap-x-2">
                                                       <FaPhone />
                                                       <span className="text-md font-semibold text-blue-950">
                                                            +91 1234567890
                                                       </span>
                                                  </div>
                                             </Button>
                                        </div>
                                        <div className="sm:hidden inline">
                                             <Button
                                                  value="Donate Now"
                                                  styles="animate__animated animate__fadeInLeft animate__delay-1s"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                                  sm
                                             />
                                             <Button
                                                  styles="animate__animated animate__fadeInRight animate__delay-1s"
                                                  transparent
                                                  sm
                                             >
                                                  <div className="flex items-center gap-x-2">
                                                       <FaPhone />
                                                       <span className="text-md font-semibold text-blue-950">
                                                            +91 1234567890
                                                       </span>
                                                  </div>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className=" py-20">
                    <div className="container mx-auto">
                         <h6 className="text-3xl capitalize">What our numbers says!</h6>
                         <div className="grid xl:grid-cols-4 gap-5 mt-5 grid-cols-12 lg:grid-cols-6 items-start">
                              <div className=" flex flex-col items-center shadow-xl p-3 py-10 hover:py-12 rounded-xl group transition-all">
                                   <p className="text-6xl text-gray-500 group-hover:text-gray-900">5000</p>
                                   <h6 className="text-xl group-hover:text-emerald-500 font-semibold">Happy Faces</h6>
                              </div>
                              <div className=" flex flex-col items-center shadow-xl p-3 py-10 hover:py-12 rounded-xl group transition-all">
                                   <p className="text-6xl text-gray-500 group-hover:text-gray-900">2000</p>
                                   <h6 className="text-xl group-hover:text-emerald-500 font-semibold">
                                        Success Mission
                                   </h6>
                              </div>

                              <div className=" flex flex-col items-center shadow-xl p-3 py-10 hover:py-12 rounded-xl group transition-all">
                                   <p className="text-6xl text-gray-500 group-hover:text-gray-900">20,000</p>
                                   <h6 className="text-xl group-hover:text-emerald-500 font-semibold">
                                        Volunteer Reached
                                   </h6>
                              </div>

                              <div className=" flex flex-col items-center shadow-xl p-3 py-10 hover:py-12 rounded-xl group transition-all">
                                   <p className="text-6xl text-gray-500 group-hover:text-gray-900">150</p>
                                   <h6 className="text-xl group-hover:text-emerald-500 font-semibold">
                                        Globalization Work
                                   </h6>
                              </div>
                         </div>
                    </div>
               </div>
               <ProgramsModule
                    tagLine="Our Cases You Can See"
                    heading="Explore Our Latest Programs That We Works"
                    isHomePage
               />
               <AboutModule />
               <MissionModule />
          </div>
     );
};
