import Image from "next/image";
import imageOne from "../../public/grid-images/grid-image-1.jpg";
import imageTwo from "../../public/grid-images/grid-image-2.jpg";
import imageThree from "../../public/grid-images/grid-image-3.jpg";
import imageFour from "../../public/grid-images/grid-image-4.jpg";
import imageFive from "../../public/grid-images/grid-image-5.jpg";
import imageSix from "../../public/grid-images/grid-image-6.jpg";

export default function ImageGrid() {
  // TODO: make an interface of this
  const images = [
    {
      path: imageOne,
      height: "240px",
    },
    {
      path: imageTwo,
      height: "380px",
    },
    {
      path: imageThree,
      height: "240px",
    },
    {
      path: imageFour,
      height: "280px",
    },
    {
      path: imageFive,
      height: "400px",
    },
    {
      path: imageSix,
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
            placeholder="blur"
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
