import "../style/GlownyKoniec.css"

function GlownyKoniec(){
    return(
<section id="tiobe-ranking" className="tiobe-container">

  <div className="tiobe-header">
    <h2>Popularność języków według TIOBE</h2>
    <p>Przykładowy ranking (procentowy udział i zmiana rok do roku)</p>
  </div>

  <table className="tiobe-table" aria-describedby="tiobe-ranking">
    <thead>
      <tr>
        <th>Miejsce</th>
        <th>Język</th>
        <th>Procentowy udział</th>
        <th>Zmiana (rok do roku)</th>
        <th>Najlepsze cechy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><strong>Python</strong></td>
        <td className="percent">23.37%</td>
        <td><span className="change up">+0.52%</span></td>
        <td className="feature">Prostota, ogromny ekosystem AI/ML/Data Science, świetny w edukacji</td>
      </tr>

      <tr>
        <td>2</td>
        <td><strong>C</strong></td>
        <td className="percent">9.68%</td>
        <td><span className="change up">+0.67%</span></td>
        <td className="feature">Bardzo wysoka wydajność, kontrola nad sprzętem, niezbędny w systemach wbudowanych</td>
      </tr>

      <tr>
        <td>3</td>
        <td><strong>C++</strong></td>
        <td className="percent">8.95%</td>
        <td><span className="change down">-1.69%</span></td>
        <td className="feature">Obiektowość + wydajność, gry, silniki, systemy czasu rzeczywistego</td>
      </tr>

      <tr>
        <td>4</td>
        <td><strong>Java</strong></td>
        <td className="percent">8.54%</td>
        <td><span className="change down">-1.06%</span></td>
        <td className="feature">Stabilność, backend enterprise, JVM – przenośność aplikacji</td>
      </tr>
    </tbody>
  </table>

  <h3>🧭 Podsumowanie — każdy język jest „najlepszy” w innym świecie</h3>

  <div className="summary" role="group" aria-label="Podsumowanie języków">
    <div className="card">
      <h4>Python</h4>
      <p><strong>Największa zaleta:</strong> Prostota + AI/ML</p>
      <p><strong>Idealny dla:</strong> początkujących + analityków danych</p>
    </div>

    <div className="card">
      <h4>Java</h4>
      <p><strong>Największa zaleta:</strong> Stabilność</p>
      <p><strong>Idealny dla:</strong> korporacje, duże systemy i Android</p>
    </div>

    <div className="card">
      <h4>C</h4>
      <p><strong>Największa zaleta:</strong> Maksymalna wydajność</p>
      <p><strong>Idealny dla:</strong> systemy operacyjne, embedded</p>
    </div>

    <div className="card">
      <h4>C++</h4>
      <p><strong>Największa zaleta:</strong> Wydajność + obiektowość</p>
      <p><strong>Idealny dla:</strong> gry i aplikacje wymagające mocy</p>
    </div>
  </div>

  <div className="conclusion" aria-live="polite">
    <h4>🎯 Wniosek końcowy</h4>
    <p>Nie istnieje jeden najlepszy język — liczy się cel i zastosowanie:</p>
    <ul>
      <li>Chcesz wejść w AI lub automatyzację? → <strong>Python</strong></li>
      <li>Chcesz stabilnej posady w korpo? → <strong>Java</strong></li>
      <li>Interesuje Cię hardware i systemy operacyjne? → <strong>C</strong></li>
      <li>Marzysz o tworzeniu gier lub szybkich aplikacji? → <strong>C++</strong></li>
    </ul>
    <p className="note">Każdy z tych języków jest częścią kręgosłupa współczesnej technologii.</p>
  </div>
</section>
    )
}

export default GlownyKoniec