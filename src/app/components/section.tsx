type SectionProps = {
  id: string;
  label: string;
  subtitle?: string;
  // Alternate sections use a tinted background so they read as separate blocks
  alt?: boolean;
  children: React.ReactNode;
};

const Section = ({ id, label, subtitle, alt = false, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-16 ${alt ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-sm font-medium px-5 py-1 rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
            {label}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
