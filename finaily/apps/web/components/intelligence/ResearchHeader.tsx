type ResearchHeaderProps = {
  title: string;
  symbol?: string;
  theme?: string;
};

export function ResearchHeader({ title, symbol, theme }: ResearchHeaderProps) {
  return (
    <section>
      <h1>{title}</h1>
      {symbol && <p>{symbol}</p>}
      {theme && <p>{theme}</p>}
    </section>
  );
}
