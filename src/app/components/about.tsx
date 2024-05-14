
import Image from "next/image";
import hero from "@/app/images/hero.jpg"

const About = () => {
  return (
    <div className="flex items-center justify-between flex-wrap m-32">
    <h2 className="text-3xl font-bold underline">Hello I'm Krister</h2>
    <div className="flex flex-row">
      <div className="about-text">
        <p className="text-sm mt-2">
          As a developer, I have always been passionate about creating elegant and effective solutions to
          complex problems. I have a strong foundation in software development, with a focus on web
          technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and
          back-end of applications, and I am always looking for ways to optimize performance, improve user
          experience, and ensure the highest level of code quality.
        </p>
        <p className="text-sm mt-2">Throughout my career, I have worked on a wide range of projects, from simple static websites to
          complex enterprise-level applications. I am experienced in working with a variety of development
          tools and frameworks, including React and Angular. I am always eager to learn and explore new technologies,
          and I am constantly seeking out opportunities to improve my skills and knowledge.</p>
      </div>
      <div className="">
        <Image src={hero} className="profile-img" width={300} height={500} alt={"My photo"}/>
      </div>
    </div>
  </div>
  )
}

export default About;