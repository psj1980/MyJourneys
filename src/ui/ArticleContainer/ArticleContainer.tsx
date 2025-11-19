import { Link } from "@tanstack/react-router";

type ArticleContainerProps = {
  children: React.ReactNode;
  href?: string;
};

/**
 * @remarks
 * - Container component for articles with optional clickable behavior.
 *
 *@param children - The content to be displayed inside the container.
 *
 * @param href - Intended for future use to wrap the container in a link.
 *
 * @returns React component wrapping the provided children.
 */
export default function ArticleContainer({
  children,
  href,
}: Readonly<ArticleContainerProps>) {
  const classNames = `
    flex flex-col justify-between items-center border border-border p-4 rounded-lg shadow-lg  bg-white 
    dark:bg-neutral-600
    ${href ? "hover:shadow-2xl dark:hover:shadow-neutral-800 cursor-pointer transition-shadow" : ""}`;

  return href ? (
    <Link to={href} className={classNames}>
      {children}
    </Link>
  ) : (
    <section className={classNames}>{children}</section>
  );
}
