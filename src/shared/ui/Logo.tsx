interface LogoProps {
  className?: string;
}

export default function Logo({
  className,
}: LogoProps) {
  return (
    <img
      src="/agriAid-logo.png"
      alt="AgriAid Logo"
      className={`h-10 w-auto ${className || ''}`}
    />
  );
}