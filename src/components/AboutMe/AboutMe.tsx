import Image from "next/image"

export default async function AboutMe() {
  return (
    <section className="flex flex-row items-center justify-center">
        <div className="pr-2">
           <h1 className="text-5xl font-bold">Luca Palminteri</h1>
           <h4 className="text-lg text-gray-600 font-semibold">Frontend-focused Full Stack Web Developer</h4>
           <p className="pt-4 text-gray-900 font-normal">Experienced Full Stack Web Engineer, specializing in Frontend development and DevOps. Proven track record in 
           designing and optimizing web applications, with a focus on e-commerce solutions. Proficient in industry best practices and 
           design patterns for high-quality software delivery.
           </p>
        </div>
        <div className="ml-8 min-w-40 w-40">
            <Image 
                className="rounded-full" 
                src={'/LucaPalminteri.jpg'} 
                alt="Luca Palminteri" 
                width={200} 
                height={200}
            />
        </div>
    </section>
  )
}