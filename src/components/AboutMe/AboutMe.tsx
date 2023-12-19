import Image from "next/image"

export default async function AboutMe() {
  return (
    <section className="flex items-center flex-col md:flex-row justify-center">
      <div className="pr-4 md:pr-8">
        <h1 className="text-3xl md:text-5xl font-bold">Luca Palminteri</h1>
        <h4 className="text-base md:text-lg text-gray-600 font-semibold">Frontend-focused Full Stack Web Developer</h4>
        <p className="pt-2 md:pt-4 text-gray-900 font-normal text-sm md:text-base">
          Experienced Full Stack Web Engineer, specializing in Frontend development and DevOps. Proven track record in
          designing and optimizing web applications, with a focus on e-commerce solutions. Proficient in industry best practices and
          design patterns for high-quality software delivery.
        </p>
      </div>
      <div className="mt-4 md:mt-0 ml-0 md:ml-8 min-w-40 w-40">
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