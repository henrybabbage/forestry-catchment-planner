import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import trees from "/public/images/forests/forest_trees_duotone.png";

export default function Application() {
  return (
    <section id="intro" className="flex items-center justify-center">
      <div className="grid h-screen grid-cols-1 bg-background dark:bg-brand-950 md:grid-cols-2">
        <div className="relative h-full w-full">
          <Image
            src={trees}
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-fit flex-col justify-start px-6 py-6 md:h-full md:px-12 md:py-14">
          <header className="mb-14">
            <h2 className="text-balance text-xl font-bold text-brand-950 dark:text-foreground lg:text-3xl">
              Transparent and Sustainable Forestry Planning
            </h2>
          </header>
          <article className="flex flex-col">
            <Prose className="">
              <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
                The Forestry Catchment Planner aims to create a transparent,
                cohesive system for better understanding intergenerational
                harvesting cycles on a catchment scale.
              </p>
              <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
                The tool provides insights into forestry stand locations, recent
                harvests, and data on erosion susceptibility hazard for future
                harvesting schedules.
              </p>
              <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
                This enables effective environmental stewardship, improving
                water quality, promoting healthier ecosystems, and facilitating
                better holistic planning for future planting and harvesting.
              </p>
            </Prose>
          </article>
        </div>
      </div>
    </section>
  );
}