import TeamMemberCard from "@/components/sections/7/TeamMemberCard";
import andrewHoldaway from "/public/images/team/raw/andrew_holdaway.png";
import blaineWestern from "/public/images/team/raw/blaine_western.png";
import brendaRosser from "/public/images/team/raw/brenda_rosser.png";
import markBloomberg from "/public/images/team/raw/mark_bloomberg.png";
import markSpencer from "/public/images/team/raw/mark_spencer.png";
import peteWatt from "/public/images/team/raw/pete_watt.png";
import robBesaans from "/public/images/team/raw/rob_besaans.png";

const team = [
  {
    name: "Brenda Rosser",
    role: "Geomorphologist",
    instition: "GNS Science",
    id: "brenda-rosser",
    image: brendaRosser,
  },
  {
    name: "Mark Bloomberg",
    role: "Adjunct Senior Fellow",
    instition:
      "Te Kura Ngahere New Zealand School of Forestry, University of Canterbury",
    id: "mark-bloomberg",
    image: markBloomberg,
  },
  {
    name: "Andrew Holdaway",
    role: "Geospatial Application Specialist",
    instition: "Indufor",
    id: "andrew-holdaway",
    image: andrewHoldaway,
  },
  {
    name: "Pete Watt",
    role: "Head Of Resource Monitoring",
    instition: "Indufor",
    id: "pete-watt",
    image: peteWatt,
  },
  {
    name: "Blaine Western",
    role: "Head of Design and Interaction",
    instition: "GeoInsight",
    id: "blaine-western",
    image: blaineWestern,
  },
  {
    name: "Mark Spencer",
    role: "Director, Operations Manager",
    instition: "GeoInsight",
    id: "mark-spencer",
    image: markSpencer,
  },
  {
    name: "Rob Besaans",
    role: "Director, Geospatial & Software Lead",
    instition: "GeoInsight",
    id: "rob-besaans",
    image: robBesaans,
  },
];

export default function TeamSection() {
  return (
    <section className="flex h-full min-h-full flex-col bg-background p-6 dark:bg-zinc-900">
      <header className="mb-[40px]">
        <h2 className="w-fit py-12 text-3xl font-medium text-brand-950 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl">
          Team
        </h2>
      </header>
      <div className="grid h-full grid-cols-auto-fit-240 gap-x-2 gap-y-16 sm:gap-y-32">
        {team.map((member) => (
          <div key={member.id} className="col-span-1 w-auto">
            <TeamMemberCard
              id={member.id}
              name={member.name}
              role={member.role}
              instition={member.instition}
              image={member.image}
            />
          </div>
        ))}
      </div>
      <div className="h-12" />
    </section>
  );
}