import Text from "./Text";


export default function Heading({
  as: Tag = "h2",
  content = "",
  children,
  size = "base",
  className = "",
  bold = true,
  clamp = false,
}) {
  return (
    <Text as={Tag} size={size} bold={bold} clamp={clamp} className={`capitalize ${className}`}>
      {content || children}
    </Text>
  );
}

