import { useEffect, useRef, useState } from "react";
import { useT } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";
import Tp from "../../components/ui/Tip";

function StepIcon({ type, color }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" };

  if (type === "plus") {
    return (
      <svg {...common}>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 3v6" />
        <path d="M16 3v6" />
        <path d="M4 10h16" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg {...common}>
        <path d="M4 10.5 12 4l8 6.5" />
        <path d="M6.5 9.5V20h11V9.5" />
      </svg>
    );
  }

  if (type === "wrench") {
    return (
      <svg {...common}>
        <path d="M14.5 6.5a4 4 0 0 0 3.9 5 7.8 7.8 0 0 1-6.9 6.9 4 4 0 0 0-5-3.9l4.5-4.5" />
        <circle cx="7.5" cy="16.5" r="1" fill={color} stroke="none" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 3" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

const COPY = {
  en: {
    title: "Electronic Monitoring (ETEV)",
    sub: [
      "Electronic monitoring is an opportunity to be released from prison earlier than the usual conditions of early release on parole. In this case, you will wear an ankle bracelet that monitors your location while living in freedom.",
      "You have the option to request this when your parole term has arrived. The decision for electronic monitoring release is made by the court based on the report submitted by the prison. The court will consider your activities and behavior while in prison.",
      "To apply for electrical monitoring, submit a request to the contact person upon expiration of the electrical monitoring period",
    ],
    eligibilityTitle: "When conditional early release is possible",
    tableHeaders: ["Sentence", "ETEV is Eligible After"],
    tableRows: [
      ["All sentences <= 5 years", "After serving 1/3 of your sentence (at least 4 months)"],
      ["All sentences > 5 years", "After serving 1/2 of your sentence (at least 4 months)"],
    ],
    tipItems: [
      "You may only leave your residence with the permission of your probation officer and for limited activities",
      "The duration of electronic monitoring can be from 1 to 12 months.",
    ],
    bodyParas: [
      "An ankle bracelet will be installed on you to monitor your location. Devices related to the ankle bracelet will be set up at your residence.",
      "Together with your probation officer, you will establish a specific schedule for when and where you may be present. You must adhere to this schedule. You must not violate the agreed-upon rules or leave the permitted area.",
    ],
    conditionsTitle: "Conditions for installation of electronic monitoring",
    conditions: [
      "The owner of the residence must confirm that you have permission to live there.",
      "There must be electricity and mobile coverage.",
      "The residence must be lockable.",
      "All other adults living in that place must agree to the ankle bracelet and the installation of its equipment",
    ],
    timelineTitle: "How the electrical monitoring device is installed",
    timelineHeading: "How is the electronic monitoring device installed?",
    steps: [
      "If the judge decides that you can serve your sentence at home under electronic monitoring, you will receive a summons in prison. The summons states that you must go to the probation officer within 3 working days after your release and explains the rules you need to follow.",
      "The probation officer agrees with you on the exact day and time when the monitoring devices will be installed.",
      "The probation officer comes to your home and chooses a suitable place to install the devices.",
      "The devices are set up so that they disturb you as little as possible. The ankle bracelet is secured and checked to make sure it stays in place.",
      "Your electronic monitoring period starts from the moment the devices are installed in your home and on your ankle.",
      "When the monitoring period is over, the officer comes to remove the devices and your electronic monitoring ends.",
    ],
    warningPrefix: "If you violate the conditions of electronic monitoring (for example, leaving your residence without permission or not adhering to the schedule), the consequence may be the continuation of your sentence in prison. The time spent under electronic monitoring will ",
    warningStrong: "NOT",
    warningSuffix: " be deducted from your assigned sentence.",
  },
  et: {
    title: "Elektrooniline valve (ETEV)",
    sub: [
      "Elektrooniline valve on võimalus vabaneda vanglast varem kui tavapärase tingimisi ennetähtaegse vabastamise korral. Sel juhul kannad jalavõru, mis jälgib Sinu asukohta vabaduses.",
      "Sul on võimalus avaldada soovi, kui Sinu ETEV tähtaeg on saabunud. Vabastamise otsustab kohus vangla poolt esitatud iseloomustuse põhjal, arvestades Sinu tegevusi ja käitumist vanglas.",
      "Elektroonilise valve taotlemiseks esita sooviavaldus kontaktisikule pärast valve tähtaega",
    ],
    eligibilityTitle: "Millal on tingimuslik ennetähtaegne vabastamine võimalik",
    tableHeaders: ["Karistus", "ETEV tähtaeg pärast"],
    tableRows: [
      ["Kõik karistused <= 5 aastat", "Pärast 1/3 karistuse kandmist (vähemalt 4 kuud)"],
      ["Kõik karistused > 5 aastat", "Pärast 1/2 karistuse kandmist (vähemalt 4 kuud)"],
    ],
    tipItems: [
      "Elukohast lahkuda tohid ainult kriminaalhooldaja loal ja piiratud tegevusteks",
      "Elektroonilise valve kestus võib olla 1–12 kuud",
    ],
    bodyParas: [
      "Sulle paigaldatakse jalavõru, mis jälgib Sinu asukohta. Seadmed paigaldatakse Sinu elukohta.",
      "Koos kriminaalhooldusametnikuga lepitakse kokku kindel ajakava, millal ja kus viibida võid. Pead sellest kinni pidama ega tohi rikkuda reegleid ega lahkuda lubatud alalt.",
    ],
    conditionsTitle: "Elektroonilise valve paigaldamise tingimused",
    conditions: [
      "Elukoha omanik peab kinnitama, et Sul on luba seal elada",
      "Seal peab olema elekter ja mobiililevi",
      "Elukoht peab olema lukustatav",
      "Kõik teised täiskasvanud, kes elavad samas kohas, peavad nõustuma jalavõru ja seadmete paigaldamisega",
    ],
    timelineTitle: "Kuidas elektrooniline valve paigaldatakse",
    timelineHeading: "Kuidas elektrooniline valve paigaldatakse?",
    steps: [
      "Kui kohus otsustab, et saad kanda karistust kodus elektroonilise valve all, antakse vanglas Sulle kutse. Kutse ütleb, et pead 3 tööpäeva jooksul pärast vanglast vabanemist minema kriminaalhooldusametniku juurde ja selgitab reeglid, mida pead järgima.",
      "Kriminaalhooldusametnik lepib Sinuga kokku täpse kuupäeva ja kellaaja, millal seadmed paigaldatakse.",
      "Kriminaalhooldusametnik tuleb Sinu koju ja valib sobiva koha seadmete paigaldamiseks.",
      "Seadmed pannakse paika nii, et need Sinu elu võimalikult vähe häiriks. Jalavõru kinnitatakse kindlalt ja kontrollitakse, et see püsiks paigas.",
      "Sinu elektroonilise valve aeg algab hetkest, kui seadmed on Sinu koju ja jalale paigaldatud.",
      "Kui valveperiood lõpeb, tuleb ametnik seadmed eemaldama ja Sinu elektrooniline valve lõpeb.",
    ],
    warningPrefix: "Kui rikud elektroonilise valve tingimusi (näiteks lahkud elukohast ilma loata või ei järgi ajakava), võib tagajärjeks olla karistuse jätkamine vanglas. Elektroonilise valve all oldud aega ",
    warningStrong: "ei",
    warningSuffix: " arvutata Sinu määratud karistusest maha.",
  },
};

function MonitoringTimeline({ t, copy }) {
  const accent = "#f98b4d";
  const steps = [
    { id: 1, side: "left", icon: "plus", text: copy.steps[0] },
    { id: 2, side: "right", icon: "calendar", text: copy.steps[1] },
    { id: 3, side: "left", icon: "home", text: copy.steps[2] },
    { id: 4, side: "right", icon: "wrench", text: copy.steps[3] },
    { id: 5, side: "left", icon: "clock", text: copy.steps[4] },
    { id: 6, side: "right", icon: "close", text: copy.steps[5] },
  ];
  const stepRefs = useRef([]);
  const [visibleSteps, setVisibleSteps] = useState(() => steps.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSteps((prev) => {
          const next = [...prev];
          let changed = false;

          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-step-index"));
            const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.18;

            if (next[index] !== isVisible) {
              next[index] = isVisible;
              changed = true;
            }
          });

          return changed ? next : prev;
        });
      },
      {
        threshold: [0.08, 0.18, 0.32, 0.48],
        rootMargin: "-4% 0px -4% 0px",
      },
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const iconCircle = (iconType) => (
    <div style={{
      width: 48, height: 48, borderRadius: "50%",
      background: accent, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <StepIcon type={iconType} color="#fff" />
    </div>
  );

  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ marginBottom: 24, color: t.text, fontSize: 19, fontWeight: 700, lineHeight: 1.4 }}>
        {copy.timelineHeading}
      </div>

      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: "50%", width: 2,
          transform: "translateX(-50%)",
          background: accent, opacity: 0.85,
        }} />

        {steps.map((step, i) => {
          const isLeft = step.side === "left";
          const isLast = i === steps.length - 1;
          const isVisible = visibleSteps[i];

          const connector = (
            <div style={{
              display: "flex", alignItems: "center",
              height: 48,
              width: "100%",
              minWidth: 0,
              marginRight: isLeft ? "-28px" : 0,
              marginLeft: !isLeft ? "-28px" : 0,
              position: "relative",
              zIndex: 0,
            }}>
              {isLeft && iconCircle(step.icon)}
              <div style={{
                flex: 1,
                height: 0,
                borderTop: `2px dotted ${accent}`,
              }} />
              {!isLeft && iconCircle(step.icon)}
            </div>
          );

          return (
            <div
              key={step.id}
              data-step-index={i}
              ref={(node) => {
                stepRefs.current[i] = node;
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) 56px minmax(0,1fr)",
                alignItems: "flex-start",
                marginBottom: isLast ? 0 : 32,
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translate3d(0, 0, 0) scale(1)"
                  : `translate3d(${isLeft ? "-12px" : "12px"}, 16px, 0) scale(0.992)`,
                filter: isVisible ? "blur(0px)" : "blur(1.25px)",
                transition: "opacity 680ms cubic-bezier(0.22, 1, 0.36, 1), transform 760ms cubic-bezier(0.22, 1, 0.36, 1), filter 620ms ease-out",
                transitionDelay: isVisible ? `${i * 55}ms` : "0ms",
                willChange: "opacity, transform, filter",
                backfaceVisibility: "hidden",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", overflow: "visible", position: "relative", zIndex: 0, width: "100%", minWidth: 0 }}>
                {isLeft && (
                  <>
                    {connector}
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: t.text, marginTop: 10, maxWidth: 200 }}>
                      {step.text}
                    </div>
                  </>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "center", paddingTop: 9, position: "relative", zIndex: 1, overflow: "visible" }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: accent, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 15, fontWeight: 800,
                }}>
                  {step.id}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", overflow: "visible", position: "relative", zIndex: 0, width: "100%", minWidth: 0 }}>
                {!isLeft && (
                  <>
                    {connector}
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: t.text, marginTop: 10, maxWidth: 200, textAlign: "right" }}>
                      {step.text}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RelETEV() {
  const t = useT();
  const { language } = useLanguage();
  const copy = COPY[language] || COPY.en;

  return (
    <Sec title={copy.title} sub={
      <>
        <p style={{ lineHeight: 1.6 }}>{copy.sub[0]}</p>
        <p style={{ lineHeight: 1.6 }}>{copy.sub[1]}</p>
        <p style={{ margin:"10px 0" }}><i>{copy.sub[2]}</i></p>
      </>
    }>
      <p style={{ fontSize: 18, fontWeight: 600 }}>{copy.eligibilityTitle}</p>
      <Tbl
        headers={copy.tableHeaders}
        rows={copy.tableRows}
      />
      <Tp>
        <ul style={{ listStyle:"none" }}>
          {copy.tipItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Tp>
      {copy.bodyParas.map((text) => (
        <p key={text} style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, margin:"10px 0" }}>{text}</p>
      ))}
      <Acc title={copy.conditionsTitle} open>
        <ul style={{ marginTop: 8, paddingLeft: 50 }}>
          {copy.conditions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Acc>
      <Acc title={copy.timelineTitle}>
        <MonitoringTimeline t={t} copy={copy} />
      </Acc>
      <W>
        {copy.warningPrefix}
        <strong>{copy.warningStrong}</strong>
        {copy.warningSuffix}
      </W>
    </Sec>
  );
}
