import { IconPlane, IconThermometer, IconUmbrella } from "@tabler/icons-react";
import Rating from "../../Rating/Rating";
import Tag from "../../Tag/Tag";
import TagGroup from "../../Tag/TagGroup";
import type { Variant } from "./Types";

type DestinationDetailsProps = {
  title: string;
  subtitle: string;
  description: string;
  variant: Variant;
};

export default function DestinationDetails({
  title,
  subtitle,
  description,
  variant,
}: Readonly<DestinationDetailsProps>) {
  return (
    <div className="flex-grow">
      <h1
        className={`
          text-2xl font-semibold text-foreground mb-1 font-sans
          ${variant == "compact" ? "text-lg" : ""}`}
      >
        {title}
      </h1>
      <div className={`text-base text-muted-foreground mb-3 font-sans`}>
        <span>{subtitle}</span>
        <Rating rating={4.5} variant="secondary" />
      </div>
      {/* container description */}
      <p
        className={`
          text-sm leading-6 text-charcoal-gray mb-4 font-sans
          ${variant == "compact" ? "hidden" : ""}`}
      >
        {description}
      </p>
      <TagGroup alignment="left" aria-label="Destination tags">
        <Tag variant="primary" size="small" textValue="Beach">
          <IconUmbrella className="w-3 h-3" />
          Beach
        </Tag>
        <Tag variant="primary" size="small" textValue="28°C">
          <IconThermometer className="w-3 h-3" />
          28°C
        </Tag>
        <Tag variant="primary" size="small" textValue="10h flight">
          <IconPlane className="w-3 h-3" />
          10h flight
        </Tag>
      </TagGroup>
    </div>
  );
}
