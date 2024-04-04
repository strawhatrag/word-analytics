import { useState } from "react";

import Stats from "./Stats";
import Textarea from "./Textarea";
import Footer from "./Footer";

import Header from "./Header";
import Container from "./Container";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />

      <Container>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
