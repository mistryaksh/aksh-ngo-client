import React, { FC } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import Marquee from "react-fast-marquee";
import { AiOutlineStar } from "react-icons/ai";

type LayoutProps = {
     children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
     const Main: FC = () => children as React.ReactElement;

     return (
          <section>
               <Header />
               <Marquee className="bg-emerald-500 py-5" speed={100}>
                    <p className="text-white flex gap-3 items-center text-lg">
                         <AiOutlineStar className="text-red-300" /> Here is ads or something about your events, programs
                         or new campaigns will places here as you need you can change from admin panel
                         <AiOutlineStar className="text-red-300" />
                    </p>
               </Marquee>
               <Main />
               <Footer />
          </section>
     );
};
