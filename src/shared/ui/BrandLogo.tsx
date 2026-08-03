type Props = {
  className?: string;
  size?: number;
  alt?: string;
};

/**
 * Official agriAid circular logo (hand + seedling + wordmark).
 * Serves from /agriAid-logo.png in the Vite public folder.
 */
export default function BrandLogo({
  className = "",
  size = 48,
  alt = "agriAid",
}: Props) {
  return (
    <img
      src="/agriAid-logo.png"
      alt={alt}
      width={size}
      height={size}
      className={`inline-block shrink-0 rounded-full object-cover shadow-sm ${className}`}
      draggable={false}
    />
  );
}
