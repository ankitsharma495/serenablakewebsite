"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AreasOfFocus() {
  const areas = [
    {
      title: "Anxiety & Stress Management ",
      description:
        "Anxiety and stress can manifest in various ways, including physical symptoms like headaches, stomach issues, and fatigue, as well as emotional challenges such as irritability, difficulty concentrating, and sleep disturbances. Therapy provides a safe space to explore these feelings, develop coping strategies, and work towards a more balanced and fulfilling life.",
      image: "/anxiety.png",
      alt: "Healthcare professional hands in black and white",
    },
    {
      title: "Relationship Counseling ",
      description:
        "Healthy relationships are essential for emotional well-being, but they can also be a source of stress and conflict. Whether you're dealing with communication issues, trust concerns, or navigating the complexities of family dynamics, therapy can help you gain insight into your relationship patterns, improve communication skills, and foster deeper connections with loved ones.",
      image: "/relationship.png",
      alt: "Hands gently holding an orange flower representing healing and growth",
    },
    {
      title: "Trauma Recovery",
      description:
        "Trauma can have a profound impact on mental health, leading to symptoms like flashbacks, nightmares, and emotional numbness. Therapy offers a supportive environment to process traumatic experiences, develop coping mechanisms, and work towards healing. Through evidence-based approaches like EMDR and trauma-informed care, individuals can reclaim their lives and find a path to recovery.",
      image: "/trauma.png",
      alt: "Hands with American flag pattern representing multicultural identity",
    },
  ];

  return (
    <>
      <section id="areas-of-focus" className="py-20 px-4 bg-[#f3f0e8]">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#40403e] font-serif m-18">Areas of Focus</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {areas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={area.alt}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-2xl  font-serif mb-4 text-[#41413e]">{area.title}</h3>
                <p className="text-sm leading-relaxed text-[#7e7e6b] max-w-sm mx-auto">{area.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
