// import Container from "../global/container";
// import Images from "../global/images";
// import { Particles } from "../ui/particles";
// import { SectionBadge } from "../ui/section-bade";

// const Connect = () => {
//     return (
//         <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
//             <Container>
//                 <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
//                     <SectionBadge title="Connect Tools" />
//                     <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
//                         Seamless Integration with Your Tech Stack
//                     </h2>
//                     <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
//                         Connect Docuparse to your existing workflows effortlessly.
//                         Whether it’s cloud storage or databases we plug right in so your data flows without friction.
//                     </p>
//                 </div>
//             </Container>
//             <Container>
//                 <div className="w-full relative mt-12">
//                     <Images.connect className="w-full h-auto" />
//                     <Particles
//                         className="absolute inset-0"
//                         quantity={150}
//                         ease={80}
//                         color="#e4e4e7"
//                         refresh
//                     />
//                 </div>
//             </Container>
//         </div>
//     )
// };

// export default Connect





"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";

const Connect = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3); // Loop: 0 → 1 → 2 → 0
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 w-full bg-black text-white rounded-3xl">

      <Container className="bg-transparent">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="See It In Action" />
          <h2 className="text-4xl font-heading mt-6">Image to JSON Magic</h2>
          <p className="text-lg mt-4 text-zinc-400">
            Docuparse transforms document images into structured data — watch it work.
          </p>
        </div>
      </Container>

      <Container className="bg-transparent">
        <div className="mt-20 w-full flex justify-center items-center h-[500px] relative">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-[340px] h-[440px]"
              >
                <img src="/images/pdf2.png" className="absolute top-8 left-8 w-full rounded-xl shadow-xl opacity-70" />
                <img src="/images/pdf3.png" className="absolute top-4 left-4 w-full rounded-xl shadow-xl opacity-85" />
                <img src="/images/pdf1.png" className="absolute top-0 left-0 w-full rounded-xl shadow-xl z-10" />
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center space-y-4"
              >
                <Sparkles className="text-yellow-400 w-10 h-10 animate-spin-slow" />
                <p className="text-sm text-zinc-300">Processing with AI...</p>
              </motion.div>
            )}

            {step === 2 && (
            <motion.div
                key="json"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-950 text-purple-500 font-mono p-6 rounded-xl shadow-xl text-sm w-full max-w-2xl overflow-auto relative"
            >
                <pre className="whitespace-pre-wrap">
            {`{
            "document_title": "New customer's development and increasing the sale of product",
            "introduction_paragraph": "My country economy at this season keeps escaping from Odoba of business....
            "sections": [
                {
                    "title": "The main product and service at this season",
                    "content": [
                        {
                            "type": "statement",
                            "source": "From the product headquarters",
                            "text": "In the image business, ....."
                        }
                    "plot": {
                        "type": "pie_chart",
                        "title": "Satisfaction rating to new product",
                        "data_points": [
          {"category": "very good", "percentage": 47},
           ...,
          {"category": "bad", "percentage": 7}
        ],
        "summary": "A pie chart indicates.."
      }
    },

}`}
                </pre>
                <div className="absolute bottom-2 right-4 text-green-600 text-xs animate-pulse">Generated by Docuparse AI</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default Connect;
