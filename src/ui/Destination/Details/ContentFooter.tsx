import { IconArrowRight } from "@tabler/icons-react";
import Button from "../../Button/Button";
import type { Variant } from "./Types";

type DestinationFooterProps = {
  price: number;
  variant: Variant;
};

export default function DestinationFooter({
  price,
  variant,
}: Readonly<DestinationFooterProps>) {
  return (
    <div
      className={`pt-4 flex items-center justify-between items-center pt-4 
        border-t border-white-border`}
    >
      <Button variant="details" size="small">
        View Details
        {variant !== "compact" && <IconArrowRight className="w-4 h-4" />}
      </Button>
      <span className={`text-lg font-bold font-sans text-destructive`}>
        <span>
          <abbr title="EUR">€</abbr>
          {price}
        </span>
      </span>
    </div>
  );
}
