import Image from "next/image";

export default function Sponsors() {
  // TODO: make an interface of this
  const sponsorDetails = [
    {
      path: "/sponsor-images/sponsor-1.svg",
      alt: "spn",
    },
    {
      path: "/sponsor-images/sponsor-2.svg",
      alt: "spn",
    },
    {
      path: "/sponsor-images/sponsor-3.svg",
      alt: "spn",
    },
    {
      path: "/sponsor-images/sponsor-4.svg",
      alt: "spn",
    },
    {
      path: "/sponsor-images/sponsor-5.svg",
      alt: "spn",
    },
  ];

  return (
    <section className="py-8 md:py-32">
      <ul className="flex justify-around items-center gap-4">
        {sponsorDetails.map((item, index) => (
          <li key={index}>
            <Image src={item.path} width={130} height={100} alt={item.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
