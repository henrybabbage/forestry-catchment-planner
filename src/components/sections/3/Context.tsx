import Image from "next-export-optimize-images/image";
import ContextText from "./ContextText";
import forest from "/public/images/forests/forest_river_duotone.png";

export default function Context() {
  return (
    <section id="context" className="mx-auto flex max-w-screen-2xl">
      <div className="grid h-full grid-cols-1 bg-background pb-14 dark:bg-brand-950 md:h-full md:grid-cols-2 md:pb-0">
        <div className="order-2 h-fit px-6 py-6 md:order-2 md:h-full md:px-14 md:py-14">
          <ContextText />
        </div>
        <div className="relative order-1 h-96 w-full md:order-2 md:h-full">
          <Image
            src={forest}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
