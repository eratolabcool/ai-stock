type RelatedCompaniesProps = {
  companies: string[];
};

export function RelatedCompanies({ companies }: RelatedCompaniesProps) {
  return (
    <section>
      <h2>Related Companies</h2>
      <ul>
        {companies.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
    </section>
  );
}
