export default function ThemesPage() {
  const themes = [
    'AI Semiconductor',
    'Cloud AI',
    'Robotics',
    'AI Agents'
  ];

  return (
    <main>
      <h1>AI Investment Themes</h1>
      <ul>
        {themes.map((theme) => <li key={theme}>{theme}</li>)}
      </ul>
    </main>
  );
}
