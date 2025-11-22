import {
  IconStar,
  IconStarFilled,
  IconStarHalf,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import { type Variant, type Size } from "../../types/component";

type RatingProps = {
  rating: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  size?: Size;
  variant?: Variant;
};

/**
 * A Rating component to display user ratings.
 *
 * @param {number} props.rating - The rating value (0 to 5).
 *
 * @param {Size} [props.size] - The size of the rating component.
 *
 * @param {Variant} [props.variant] - The variant style of the rating component.
 *
 * @returns A React component that renders a rating interface.
 */
export default function Rating({
  rating,
  size = "medium",
  variant = "primary",
}: Readonly<RatingProps>) {
  const wholeStars = Math.floor(rating);
  const colorVariant =
    variant === "secondary" ? "text-theme-four" : "text-soft-beach-bright-blue";
  const starClassNames = `inline text ${size === "large" ? "w-6 h-6" : "w-4 h-4"} ${colorVariant}`;

  return (
    <span className={`inline-flex items-center gap-1 text-theme-four ml-2`}>
      {Array.from({ length: wholeStars }).map((_, index) =>
        variant === "outline" ? (
          <IconStar
            key={`star-filled-${rating}-${index}`}
            className={starClassNames}
          />
        ) : (
          <IconStarFilled
            key={`star-filled-${rating}-${index}`}
            className={starClassNames}
          />
        )
      )}
      {rating % 1 !== 0 &&
        (variant === "outline" ? (
          <IconStarHalf
            key={`star-half-filled-${rating}`}
            className={starClassNames}
          />
        ) : (
          <IconStarHalfFilled
            key={`star-half-filled-${rating}`}
            className={starClassNames}
          />
        ))}
      {Array.from({ length: 5 - Math.ceil(rating) }).map(
        (_, index) =>
          variant !== "outline" && (
            <IconStar
              key={`star-empty-${rating}-${index}`}
              className={`${starClassNames} opacity-70`}
            />
          )
      )}
      <span
        className={`
        ${size === "small" ? "hidden" : "ml-1 inline"}
        ${size === "large" ? "text-xl" : "text-md"}
        ${colorVariant}`}
      >
        {rating}
      </span>
    </span>
  );
}
