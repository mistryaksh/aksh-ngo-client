import React, { FC } from "react";

export const ActivitiesModule: FC = () => {
     const renderActivities = () => {
          return (
               <>
                    <div className="text-center">
                         <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-8 sm:mb-20">
                              Activities Photos
                         </h1>
                    </div>
                    <div className="">
                         <div className="flex flex-wrap sm:flex-nowrap gap-6 w-full">
                              <div className="flex flex-col-reverse sm:flex-col gap-y-6">
                                   <div className="border-[6px] sm:border-[10px] border-y-slate-300 border-x-emerald-400 pl-1.5 sm:pl-2.5 pt-1.5 sm:pt-2.5 rounded">
                                        <img
                                             src="https://images.pexels.com/photos/6647051/pexels-photo-6647051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                             alt="activity"
                                             className="aspect-video rounded"
                                        />
                                   </div>
                                   <div className="border-[6px] sm:border-[10px] border-y-slate-300 border-x-emerald-400 pr-1.5 sm:pr-2.5 pb-1.5 sm:pb-2.5 rounded">
                                        <img
                                             src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                             alt="activity"
                                             className="aspect-video rounded"
                                        />
                                   </div>
                                   <div className="border-[6px] sm:border-[10px] border-y-slate-300 border-x-emerald-400 pl-1.5 sm:pl-2.5 pt-1.5 sm:pt-2.5 rounded">
                                        <img
                                             src="https://images.pexels.com/photos/6647038/pexels-photo-6647038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                             alt="activity"
                                             className="rounded"
                                        />
                                   </div>
                              </div>
                              <div className="flex flex-col gap-y-6">
                                   <div className="border-[6px] sm:border-[10px] border-y-slate-300 border-x-emerald-400 pr-1.5 sm:pr-2.5 pb-1.5 sm:pb-2.5 rounded">
                                        <img
                                             src="https://images.pexels.com/photos/6646767/pexels-photo-6646767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                             alt="activity"
                                        />
                                   </div>
                                   <div className="border-[6px] sm:border-[10px] border-y-slate-300 border-x-emerald-400 pl-1.5 sm:pl-2.5 pt-1.5 sm:pt-2.5 rounded">
                                        <img
                                             src="https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                             alt="activity"
                                             className="aspect-video"
                                        />
                                   </div>
                                   <div className="border-[6px] sm:border-[10px] border-y-slate-300 border-x-emerald-400 pr-1.5 sm:pr-2.5 pb-1.5 sm:pb-2.5 rounded">
                                        <img
                                             src="https://images.pexels.com/photos/6646781/pexels-photo-6646781.jpeg?auto=compress&cs=tinysrgb&w=800"
                                             alt="activity"
                                             className="aspect-video"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          );
     };

     return <div className="bg-white px-8 sm:px-40 py-16 sm:py-40">{renderActivities()}</div>;
};
