import Image from "next/image";
import Link from "next/link";
import { experiences } from "./experience-data";

export default function Page() {
  return (
    <>
      <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale "
          unoptimized
          width={160}
          height={160}
          priority />
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Soy de Tucumán, actualmente viviendo en Buenos Aires, Argentina. Estoy estudiando una Tecnicatura Universitaria en Desarrollo y Calidad de Software en la <a href="https://www.unsta.edu.ar/" target="_blank">UNSTA</a>, y planeo graduarme el próximo año.
          </p>
          <p>
            En este momento mantengo activamente los dos últimos proyectos en los que trabajé: <a target="_blank" href="https://www.feca.app/es">Feca App</a> y <a target="_blank" href="https://www.errede.com/">Errede</a>.
          </p>
          <p>
            En mi tiempo libre disfruto resolver problemas de programación en <a href="https://leetcode.com/u/ptzt/" target="_blank">LeetCode</a>, y trabajar en pequeños proyectos personales donde pueda experimentar y aprender nuevas tecnologías.
          </p>
          <p>

          </p>
        </div>
      </section>
      <section>
        <h1 className="my-4 text-2xl font-medium">Experiencia</h1>
        <div className="space-y-6">
          {experiences.map((experience, index) => {
            const Content = (
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h2 className="text-lg font-semibold text-black dark:text-white group-hover:underline">
                  {experience.title}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                  {experience.year}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {experience.description}
                </p>
              </div>
            );

            return experience.url && experience.url !== "#" ? (
              <Link
                key={index}
                href={experience.url}
                className="block group transition-opacity duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Content}
              </Link>
            ) : (
              <div
                key={index}
                className="block opacity-90 cursor-default"
              >
                {Content}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
