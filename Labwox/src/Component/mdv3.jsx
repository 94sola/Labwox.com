import React from "react";
import Wrapper from "./wrapper";

export default function LabwoxProcess() {
const steps = [
{
number: "01",
title: "Analyze Your Needs",
text: "At Labwox, we start by understanding your laboratory objectives, technology requirements, and operational challenges to set a precise roadmap.",
},
{
number: "02",
title: "Custom Workflow Design",
text: "Our experts create tailored laboratory workflows, integrating innovative tools and processes to maximize efficiency and accuracy.",
},
{
number: "03",
title: "Implementation & Optimization",
text: "We deploy solutions seamlessly and continuously optimize them, ensuring smooth integration with your existing systems and team operations.",
},
{
number: "04",
title: "Continuous Support & Evolution",
text: "Labwox provides ongoing monitoring, updates, and support to keep your lab at the forefront of scientific and technological standards.",
},
];

return ( 
    <Wrapper> 
        <section className="bg-white font-manrope w-full py-20"> 
            <div className="max-w-6xl mx-auto px-6 mb-16"> 
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                Our 4-Step Approach 
                </h2> 
            </div>
            <div className="max-w-6xl mx-auto px-6 space-y-10">  
            {steps.map((step, index) => (  
                <div  
                key={index}  
                className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-10"  
                >  
                <div>  
                    <p className="text-gray-400 text-xl md:text-2xl font-medium">  
                    {step.number}  
                    </p>  
                </div>  

                <div>  
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">  
                    {step.title}  
                    </h3>  
                </div>  

                <div>  
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">  
                    {step.text}  
                    </p>  
                </div>  
            </div>  
            ))}  
            </div>  
        </section>  
    </Wrapper>  
);
}
