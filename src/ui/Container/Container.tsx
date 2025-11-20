import {
  IconArrowRight,
  IconPlane,
  IconStarFilled,
  IconStarHalfFilled,
  IconThermometer,
  IconUmbrella,
} from "@tabler/icons-react";

type Variant = "primary" | "horizontal" | "compact";
type ContainerProps = {
  variant: Variant;
  children?: React.ReactNode;
};

/**
 * A container component that centers its content and applies consistent padding.
 *
 * @param children - The content to be wrapped inside the container.
 *
 * @returns A React component that centers and pads its children.
 */
export default function Container({
  children,
  variant = "primary",
}: Readonly<ContainerProps>) {
  return (
    // container-card
    <article
      className={`
        bg-white overflow-hidden cursor-pointer relative
        border border-white-border rounded-2xl shadow-md 
        transition-all duration-200 ease-in-out
        hover:-translate-y-1
        hover:shadow-pastel-rose
        hover:border-soft-beach-blue-green
        focus:outline-none focus:shadow-focus
        focus-visible:outline-none
        focus-visible:shadow-focus
        active:scale-[0.98]
        active:shadow-pastel-rose-active
        group
        ${variant === "horizontal" ? "flex flex-col md:flex-row" : ""}
        ${variant === "compact" ? "p-0" : ""}
    `}
    >
      {/* image wrapper */}
      <div
        className={`${variant == "horizontal" ? "w-full md:w-[40%] h-50 md:h-auto flex-shrink-0" : variant == "compact" ? "" : ""} 
        relative overflow-hidden bg-muted`}
      >
        {/* image overlay */}
        <img
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop"
          alt="Maldives Beach Resort"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* image overlay */}
        <div
          className={`
            absolute inset-0
            bg-[linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)] opacity-0
            transition-opacity duration-200
            group-hover:opacity-100
            `}
        />
      </div>
      {/* container content */}
      <div
        className={`p-6 ${variant == "horizontal" ? "flex-1" : variant == "compact" ? "p-4" : ""}`}
      >
        {/* container title */}
        <h1
          className={`
          text-2xl font-semibold text-foreground mb-1 font-sans
          ${variant == "compact" ? "text-lg" : ""}`}
        >
          Maldives
        </h1>
        {/* container subtitle */}
        <div className={`text-base text-muted-foreground mb-3 font-sans`}>
          <span>Indian Ocean</span>
          {/* container rating */}
          <span
            className={`inline-flex items-center gap-1 text-theme-four ml-2`}
          >
            <IconStarFilled className="w-4 h-4 inline text-theme-four" />
            <IconStarFilled className="w-4 h-4 inline text-theme-four" />
            <IconStarFilled className="w-4 h-4 inline text-theme-four" />
            <IconStarFilled className="w-4 h-4 inline text-theme-four" />
            <IconStarHalfFilled className="w-4 h-4 inline text-theme-four" />
            <span className="ml-1">4.5</span>
          </span>
        </div>
        {/* container description */}
        <p
          className={`
          text-sm leading-6 text-charcoal-gray mb-4 font-sans
          ${variant == "compact" ? "hidden" : ""}`}
        >
          Crystal clear waters, overwater bungalows, and pristine white sand
          beaches. The perfect tropical paradise for your dream vacation.
        </p>
        {/* container tags */}
        <div className={`flex flex-wrap gap-2 mb-4`}>
          <span
            className={`
              inline-flex items-center gap-1 px-3 py-1 bg-theme-two text-foreground-dark 
              rounded-xl text-xs font-medium transition-all duration-150
              hover:bg-theme-one hover:-translate-y-px`}
          >
            <IconUmbrella className="w-3 h-3" />
            Beach
          </span>
          <span
            className={`
              inline-flex items-center gap-1 px-3 py-1 bg-theme-two text-foreground-dark 
              rounded-xl text-xs font-medium transition-all duration-150
              hover:bg-theme-one hover:-translate-y-px`}
          >
            <IconThermometer className="w-3 h-3" />
            28°C
          </span>
          <span
            className={`
              inline-flex items-center gap-1 px-3 py-1 bg-theme-two text-foreground-dark 
              rounded-xl text-xs font-medium transition-all duration-150
              hover:bg-theme-one hover:-translate-y-px`}
          >
            <IconPlane className="w-3 h-3" />
            10h flight
          </span>
        </div>
        {/* container footer */}
        <div
          className={`
            pt-4 flex items-center justify-between items-center pt4 border-t border-white-border`}
        >
          {/* container action */}

          <button
            className={`
            px-4 py-2 bg-theme-one text-foreground-dark border rounded-xl font-medium 
            transition-all duration-150 ease-in border-0 cursor-pointer font-sans
            hover:bg-theme-two hover:translate-x-[2px]`}
          >
            View Details
            <IconArrowRight className="w-4 h-4 inline ml-1" />
          </button>

          {/* container price */}
          <span
            className={`
            text-lg font-bold font-sans text-destructive`}
          >
            $2,499
          </span>
        </div>
      </div>
      {children}
    </article>
  );
}
