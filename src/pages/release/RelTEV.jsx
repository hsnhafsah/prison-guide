import { useT } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Sec from "../../components/ui/Section";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

const COPY = {
  en: {
    title: "Probation (TEV)",
    subLead: "Many prisoners get the opportunity to be released from prison early and continue serving their sentence in freedom under probation supervision.",
    eligibilityTitle: "When conditional early release is possible",
    tableHeaders: ["Sentence", "TEV Eligible After"],
    tableRows: [
      ["All sentences <= 5 years", "After serving 1/2 of your sentence (at least 4 months)"],
      ["All sentences > 5 years", "After serving 2/3 of your sentence (at least 4 months)"],
    ],
    requirementsTitle: "Requirements",
    requirements: [
      "You must live in a place designated by the court as your permanent residence.",
      "You must attend all scheduled meetings with your probation officer.",
      "Alcohol or drug tests, which are conducted on you from time to time during probation, must be satisfactory.",
      "You may be required to work, study, undergo treatment, or participate in social programs.",
      "During the probation period, it will be monitored whether you comply with the rules.",
    ],
    violationsTitle: "What Happens If You Violate Rules of Probation?",
    violationsSteps: [
      "The probation officer will meet with you immediately to understand what happened and why you violated the rules.",
      "They may refer you to a social program, addiction counseling, or other support activities.",
      "If necessary, you may need to attend meetings with your probation officer more frequently.",
    ],
    violationsLead: "If the violations are serious or repeated, an emergency report will be submitted to the court describing what has happened. The court may:",
    violationsResults: [
      "Impose additional obligations on you (such as treatment, work requirements, movement restrictions, etc.).",
      "Extend your probation period by up to 1 year.",
      "Decide to send you back to prison to serve your sentence.",
    ],
    tip: "If you encounter difficulties, always talk to your probation officer early; addressing issues early prevents bigger problems.",
  },
  et: {
    title: "Karistuse kandmine kriminaalhooldusel (TEV)",
    subLead: "Paljudel kinnipeetavatel tekib võimalus vabaneda vanglast ennetähtaegselt ning jätkata karistuse kandmist vabaduses kriminaalhooldusel.",
    eligibilityTitle: "Millal on tingimuslik ennetähtaegne vabastamine võimalik",
    tableHeaders: ["Karistus", "TEV võimalik pärast"],
    tableRows: [
      ["Kõik karistused <= 5 aastat", "Pärast 1/2 karistuse kandmist (vähemalt 4 kuud)"],
      ["Kõik karistused > 5 aastat", "Pärast 2/3 karistuse kandmist (vähemalt 4 kuud)"],
    ],
    requirementsTitle: "Nõuded",
    requirements: [
      "Sul tuleb elada kohas, mille kohus on määranud sinu püsivaks elukohaks.",
      "Sul tuleb käia kõikidel ettenähtud kohtumistel kriminaalhooldajaga.",
      "Alkoholi- või narkojoobe testid peavad olema korras.",
      "Sul võib olla kohustus töötada, õppida, käia ravil või osaleda sotsiaalprogrammis.",
      "Katseaja jooksul jälgitakse, kas pead reeglitest kinni.",
    ],
    violationsTitle: "Mis juhtub, kui rikud kriminaalhoolduse reegleid?",
    violationsSteps: [
      "Kriminaalhooldusametnik kohtub Sinuga kohe, et aru saada, mis juhtus ja miks reegleid rikuti.",
      "Ta võib Sind suunata sotsiaalprogrammi, sõltuvusnõustamisele või muule abitegevusele.",
      "Vajadusel pead hakkama sagedamini kriminaalhooldajaga kohtuma.",
    ],
    violationsLead: "Kui rikkumised on tõsised või korduvad, esitatakse kohtule erakorraline ettekanne. Kohus võib:",
    violationsResults: [
      "Lisada täiendavaid kohustusi (nt ravi, töötamiskohustus, liikumispiirang jne).",
      "Pikendada katseaega kuni 1 aasta võrra.",
      "Otsustada, et Sind saadetakse tagasi vanglasse karistust kandma.",
    ],
    tip: "Kui Sul tekib raskusi või tagasilööke, räägi alati varakult oma kriminaalhooldusametnikuga – varajane suhtlemine aitab vältida suuremaid probleeme.",
  },
};

export default function RelTEV() {
  useT();
  const { language } = useLanguage();
  const copy = COPY[language] || COPY.en;

  return (
    <Sec
      title={copy.title}
      sub={
        <>
          <p style={{ lineHeight:1.7, margin:"10px 0" }}>{copy.subLead}</p>
          <p style={{ lineHeight:1.7, margin:"10px 0" }}>
            {language === "et" ? (
              <>
                Karistuse kandmine kriminaalhooldusel tähendab, et Sa ei pea karistust kandma vanglas, vaid saad olla vabaduses. Sulle kehtivad määratud reeglid (kontrollnõuded) ja kohustused, Sinuga suheldakse regulaarselt ning koostöös <Kw word="probation officer">kriminaalhooldusametnikuga</Kw> koostatakse Sulle kriminaalhoolduse perioodiks hoolduskava ehk karistusaja plaan.
              </>
            ) : (
              <>
                Serving a sentence on probation means that you do not have to serve your sentence in prison, but can be in freedom. You are subject to certain rules (control requirements) and obligations, you will be in regular contact, and a care plan or sentence plan will be developed for you in cooperation with your <Kw word="probation officer" /> during the probation period.
              </>
            )}
          </p>
        </>
      }
    >
      <p style={{ fontSize:18, fontWeight:600 }}>{copy.eligibilityTitle}</p>

      <Tbl headers={copy.tableHeaders} rows={copy.tableRows} />

      <Acc title={copy.requirementsTitle} open>
        <ul style={{ paddingLeft:20, lineHeight:1.7 }}>
          {copy.requirements.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Acc>

      <Acc title={copy.violationsTitle}>
        <ul style={{ paddingLeft:20, lineHeight:1.7 }}>
          {copy.violationsSteps.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <p>{copy.violationsLead}</p>

        <ul style={{ paddingLeft:20, lineHeight:1.7 }}>
          {copy.violationsResults.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Acc>

      <Tp>{copy.tip}</Tp>
    </Sec>
  );
}
