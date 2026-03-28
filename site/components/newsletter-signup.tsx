type NewsletterSignupProps = {
  heading: string;
  body: string;
  buttonLabel: string;
  compact?: boolean;
  label?: string;
};

export function NewsletterSignup({ heading, body, buttonLabel, compact = false, label = 'Email address' }: NewsletterSignupProps) {
  return (
    <form
      action="https://formsubmit.co/hello@saltwatersessions.co.nz"
      method="POST"
      className={`rounded-xl border border-primary/20 bg-secondary ${compact ? 'p-6' : 'p-8 md:p-10'} shadow-soft`}
    >
      <input type="hidden" name="_subject" value="Saltwater Sessions newsletter signup" />
      <input type="hidden" name="_captcha" value="false" />
      <h3 className="text-2xl text-primary md:text-3xl">{heading}</h3>
      <p className="mt-3 max-w-2xl text-primary/72">{body}</p>
      <div className={`mt-6 ${compact ? 'flex flex-col gap-3' : 'flex flex-col gap-3 md:flex-row'}`}>
        <label className="sr-only" htmlFor={`newsletter-${heading}`}>
          {label}
        </label>
        <input
          id={`newsletter-${heading}`}
          name="email"
          type="email"
          required
          placeholder={label}
          className="min-h-12 flex-1 rounded-pill border border-mist bg-white px-5 py-3 text-primary placeholder:text-muted focus:border-mist focus:ring-2 focus:ring-mist"
        />
        <button type="submit" className="button-primary min-h-12 whitespace-nowrap">
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
