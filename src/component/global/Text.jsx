export default function Text({
  as: Tag = "p",
  content = "",
  children,
  className = "",
  size = "base",
  bold = false,
  clamp = false,
}) {
  const sizeClass =
    {
      xs: "text-xs md:text-sm",
      sm: "text-sm md:text-base",
      base: "text-base md:text-lg",
      md: "text-lg md:text-xl",
      lg: "text-xl md:text-2xl",
      xl: "text-2xl md:text-3xl",
      "2xl": "text-3xl md:text-4xl",
      "3xl": "text-4xl md:text-5xl",
      "4xl": "text-5xl md:text-6xl",
    }[size] || "";

  const fontClass =
    Tag === "h1"
      ? "font-extrabold"
      : Tag === "h2"
      ? "font-bold"
      : Tag === "h3"
      ? "font-semibold"
      : Tag === "h4"
      ? "font-medium"
      : Tag === "h5"
      ? "font-normal"
      : Tag === "h6"
      ? "font-light"
      : bold
      ? "font-bold"
      : "font-normal";

  return (
    <Tag
      className={`${sizeClass} ${fontClass} ${
        clamp && "line-clamp-3"
      } ${className}`}
    >
      {content || children}
    </Tag>
  );
}
