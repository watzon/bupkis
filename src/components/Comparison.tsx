import { comparisonRows } from '../data/content'

export default function Comparison() {
  return (
    <section className="comparison section" aria-labelledby="comparison-heading">
      <div className="container">
        <p className="section-label">Compare</p>
        <h2 id="comparison-heading" className="section-title">
          Bupkis vs Nothing
        </h2>
        <p className="section-subtitle">
          A fair, totally unbiased comparison between us and the other app that does
          nothing.
        </p>

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">
                  <span className="comparison-brand comparison-brand-bupkis">bupkis.</span>
                </th>
                <th scope="col">
                  <span className="comparison-brand">nothing.</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="comparison-winner">{row.bupkis}</td>
                  <td>{row.nothing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
