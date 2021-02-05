import s from "./home.module.scss";
import { useState } from "react";
import cns from "classnames";

export default function Home() {
  const [showReport, setShowReport] = useState(true);

  const toggleReport = () => setShowReport((m) => !m);

  return (
    <>
      <aside className={s.sideMenu}>
        <div className={s.menuWrapper}>
          <button onClick={toggleReport}>Reports</button>
          <button>Charts</button>
          <button>Filters</button>
        </div>
      </aside>
      <div className={cns(s.layout, showReport ? s.withReport : "")}>
        <section className={s.reportList}>
          <div>ReportList</div>
          <article className={s.rowBw}>
            <div>
              <span>As of Date</span>&nbsp;
              <strong>17-12-2020</strong>
            </div>
            <div>
              <span>Published</span>&nbsp;
              <strong>12/18 04:19</strong>
            </div>
          </article>
          <article className={s.rowBw}>
            <big>Reports</big>
            <div>
              <button className={s.link}>Refresh</button>
              <button className={s.link}>New</button>
            </div>
          </article>
          <div className={s.reportTable}>
            <table cellSpacing={0}>
              <thead>
                <tr className={s.tableHeading}>
                  <td>Morning Reports</td>
                  <td>Delivered</td>
                  <td>&nbsp;</td>
                </tr>
              </thead>
              <tbody>
                {new Array(40).fill(null).map((_, idx) => (
                  <tr className={s.reportRow}>
                    <td>{`${idx + 1}-01`}</td>
                    <td className={s.tick}>✔</td>
                    <td>{"__________"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={s.mainTable}>
          <table>
            <thead>
              <tr>
                {new Array(20).fill(null).map((_, idx) => (
                  <th key={idx}>Heading{idx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {new Array(40).fill(null).map((_, idx) => (
                <tr key={`row${idx}`}>
                  {new Array(20).fill(null).map((_, idx2) => (
                    <td key={`cell${idx}-${idx2}`}>
                      V{idx + 1}-{idx2 + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={s.filterBox}>
          <label htmlFor="inputfilter" style={{ display: "none" }}>
            &nbsp;
          </label>
          <input
            type="text"
            placeholder="Add Filter..."
            className={s.filterInput}
            id="inputfilter"
            name="inputfilter"
          />

          {new Array(50).fill(null).map((_, idx) => (
            <p key={idx}>Filter{idx + 1}</p>
          ))}
        </section>
      </div>
    </>
  );
}
