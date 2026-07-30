export default function NewsletterPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold">Finaily Daily Intelligence</h1>
      <p className="mt-4 text-gray-600">
        Receive AI market research, industry trends and company insights.
      </p>
      <form className="mt-8 flex gap-3">
        <input className="rounded border p-3" placeholder="Email address" />
        <button className="rounded bg-black px-5 text-white">Subscribe</button>
      </form>
    </main>
  );
}
