import BrandLogo from "./BrandLogo";

type Props = {
  title: string;
  subtitle?: string;
};

/** Shared header for login / register / OTP / password pages. */
export default function AuthBrandHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-4 flex justify-center">
        <BrandLogo size={72} className="ring-2 ring-emerald-100" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
        agriAid
      </p>
      <h1 className="mt-1 font-headline text-3xl font-bold text-gray-900">{title}</h1>
      {subtitle ? <p className="mt-2 text-gray-600">{subtitle}</p> : null}
    </div>
  );
}
