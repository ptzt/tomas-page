import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
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
  );
}
