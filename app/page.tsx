export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Your Name</h1>
        <p className="tagline">a senior at UH Manoa studying linguistics</p>
      </header>

      <main>
        <section className="section">
          <h2>About</h2>
          <p>
            I&apos;m a senior at the University of Hawai&apos;i at M&#257;noa
            studying linguistics, interested in how language is structured
            and how it changes across communities. I enjoy combining close
            analysis of language data with hands-on projects, and I&apos;m
            looking forward to bringing that background into whatever comes
            after graduation.
          </p>
        </section>

        <section className="section">
          <h2>This semester</h2>
          {/* Placeholder items inferred from my major/year — I will replace these myself later */}
          <ul className="list">
            <li>Coursework in syntax and sociolinguistics</li>
            <li>A research project on language documentation</li>
            <li>Practicing data analysis and transcription tools</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          Your Name &middot; {year}
        </p>
      </footer>
    </>
  );
}
