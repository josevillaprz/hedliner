import Image from "next/image";

export default function ImageGrid() {
  // TODO: make an interface of this
  const images = [
    {
      path: '/images/grid-images/grid-image-1.webp',
      height: "240px",
    },
    {
      path: '/images/grid-images/grid-image-2.webp',
      height: "380px",
    },
    {
      path: '/images/grid-images/grid-image-3.webp',
      height: "240px",
    },
    {
      path: '/images/grid-images/grid-image-4.webp',
      height: "280px",
    },
    {
      path: '/images/grid-images/grid-image-5.webp',
      height: "400px",
    },
    {
      path: '/images/grid-images/grid-image-6.webp',
      height: "280px",
    },
  ];

  return (
    <div className="flex gap-3 items-center">
      {images.map((image, index) => (
        <div
          className="relative w-full max-h-full"
          style={{ height: image.height }}
          key={index}
        >
          <Image
            src={image.path}
            className="rounded-md"
            alt="image"
            // placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}
