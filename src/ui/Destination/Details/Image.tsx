import type { Image } from "../../../types/image";
import type { Variant } from "./Types";

type DestinationImageProps = {
  image: Image;
  variant: Variant;
};

export default function DestinationImage({
  image,
  variant,
}: Readonly<DestinationImageProps>) {
  return (
    <div
      className={`
        relative overflow-hidden bg-muted
        ${variant === "horizontal" && "w-full md:w-[40%] h-50 md:h-auto flex-shrink-0"}`}
    >
      <img
        src={image.url}
        alt={image.description ?? "Destination image"}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`
            absolute inset-0
            bg-[linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)] opacity-0
            transition-opacity duration-200
            group-hover:opacity-100
            `}
      />
    </div>
  );
}
