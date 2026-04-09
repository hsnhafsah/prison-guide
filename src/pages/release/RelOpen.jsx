import { useLanguage } from "../../context/LanguageContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

const COPY = {
  en: {
    title: "Open Prison",
    sub: "There is more freedom, but also greater responsibility for organizing your life. This helps you get used to normal life and prepares you smoothly for release from prison. The prison provides more support and assistance, but also monitors to ensure that you are not a danger to society.",
    introLead: "Information about early release from prison",
    introRest: "will be provided to you by a prison officer as soon as possible upon your arrival at the prison. When this opportunity arises, a report will be prepared by the prison, but the final decision will be made by the court.",
    andWord: "and",
    conditionsTitle: "Conditions for getting into an open prison",
    conditions: [
      "The date for your admission to the open prison stated in your ITK has arrived.",
      "You are not assessed as highly dangerous.",
      "You have not attempted to escape before and are not considered a flight risk by the prison.",
      "You have not had any disciplinary violations recently.",
      "You do not have any ongoing new criminal cases.",
      "You have completed the necessary social programs listed in your ITK.",
      "If you have had a drug addiction, you have completed the necessary treatment or program in a closed prison.",
      "If you have had issues with alcohol and have not completed a program, you must agree to do so in the open prison.",
    ],
    conditionsTip: "If you meet the conditions and the date for your transfer to the open prison has arrived, you will receive a written notice that your relocation will be discussed.",
    considerationTitle: "Consideration will be given to:",
    considerations: [
      "whether you meet the conditions",
      "what your behavior has been in prison",
      "how you have completed the planned activities in the ITK",
      "what the likelihood of a new offense is",
    ],
    processNote: "The process may take several months.",
    lifeTitle: "Life in Open Prison",
    life: [
      "During the day, you can move freely within the open prison territory.",
      "During quiet hours, you must remain in your room, which may be locked if necessary.",
      "It is allowed to attend previously agreed and authorized activities in the open prison: studying, working, or short outings.",
      "You have the right to communicate with your loved ones via letters and phone calls, as well as during short meetings and brief outings.",
      "You can take advantage of leisure activities, such as sports and reading books.",
      "Wearing personal clothing is allowed, but you are responsible for its cleanliness.",
      "You must follow the open prison's daily schedule, comply with the orders of prison officials, and maintain order and cleanliness in your living space.",
      "You can cook for yourself.",
    ],
    workTitle: "Work & Study Outside",
    workParas: [
      "You can work on economic tasks within the prison territory. The prison has contracts with some employers, inquire about them from the contact person.",
      "You can also find a job for yourself in a company or institution outside the prison, but the prison must approve it.",
      "Also, check for opportunities with the Unemployment Insurance Fund.",
    ],
    workTip: "There are no restrictions, but your job must not prevent you from returning on time in the evenings.",
    studyParas: [
      "If you have permission from the prison, you can study outside the open prison in a regular school.",
      "You can continue your studies in schools that have a partnership with the prison, or apply to other schools that accept you.",
    ],
    familyTitle: "Outings & Family",
    familyLead: "If you are serving your sentence in an open prison, you cannot apply for a long-term meeting with relatives.",
    familyTextStart: "In order to maintain your connection with your relatives or participate in important family events, you can apply for ",
    familyTextEnd: ".",
    familyKeywordLabel: "short-term outings",
    familyList: [
      "If something serious happens in your family, such as a close relative's serious illness or death, you can apply for a short-term outing of up to seven days.",
    ],
    familyTip: "Emergency outing does not count towards your annual 21-day outing limit. Submit your application in writing to the prison director, including a certificate if possible, such as a medical certificate or death certificate. The prison will respond within three working days.",
    otherTitle: "Other Opportunities",
    otherLead: "You can also:",
    other: [
      "Attend agreed meetings at institutions or companies, such as at the Unemployment Insurance Fund or during job interviews.",
      "Participate in courses offered by the Unemployment Insurance Fund.",
      "Participate in social programs and support groups.",
    ],
    warningTitle: "If you break the rules:",
    warning: [
      "If it is a minor violation, you may be warned or have certain rights restricted.",
      "If it is a more serious violation, you may be returned to a secure prison or punished disciplinarily.",
    ],
    finalTip: "If you have been serving a life sentence for at least 23 years, you may inquire about the possibility of applying for transfer to an open prison. If you believe you might qualify and the conditions are met, discuss this with your contact person.",
  },
  et: {
    title: "Avavangla",
    sub: "Avavanglas on kinnipeetaval rohkem vabadust, aga ka suurem vastutus oma elu korraldamisel. See aitab sul harjuda tavapärase eluga ja valmistab sind sujuvalt ette vanglast vabanemiseks. Vangla poolt on suurem tugi ja toetus, aga ka kontroll selle üle, et sa ei oleks ühiskonnale ohtlik.",
    introLead: "Vanglast ennetähtaegse vabanemise aegu",
    introRest: "tutvustab sulle vanglasse saabudes esimesel võimalusel vanglaametnik. Kui see võimalus avaneb, koostatakse vangla poolt iseloomustus, kuid lõpliku otsuse teeb kohus.",
    andWord: "ja",
    conditionsTitle: "Avavanglasse saamise tingimused",
    conditions: [
      "Sinu ITK-s kirjas olev avavanglasse saamise kuupäev on saabunud.",
      "Sind ei hinnata üliohtlikuks.",
      "Sa ei ole varem püüdnud põgeneda ega ole vangla hinnangul põgenemisohtlik.",
      "Sul ei ole viimasel ajal distsiplinaarrikkumisi olnud.",
      "Sul ei ole pooleli uusi kriminaalasju.",
      "Oled ITK-s kirjas olevad vajalikud sotsiaalprogrammid läbinud.",
      "Kui sul on olnud narkosõltuvus, oled kinnises vanglas läbinud vajaliku ravi või programmi.",
      "Kui sul on olnud alkoholiga probleeme ja sa pole programmi läbinud, pead olema nõus seda tegema avavanglas.",
    ],
    conditionsTip: "Kui sa vastad tingimustele ja avavanglasse suunamise kuupäev on saabunud, saad kirjaliku teate, et sinu ümberpaigutamist hakatakse arutama.",
    considerationTitle: "Arvesse võetakse:",
    considerations: [
      "kas vastad tingimustele",
      "milline on olnud sinu käitumine vanglas",
      "kuidas oled läbinud ITK-s planeeritud tegevusi",
      "milline on tõenäosus uueks rikkumiseks",
    ],
    processNote: "Protsess võib võtta mitu kuud.",
    lifeTitle: "Elu avavanglas",
    life: [
      "Päevasel ajal võid avavangla territooriumil vabalt liikuda.",
      "Öörahu ajal pead viibima oma toas, mis vajaduse korral lukustatakse.",
      "Välja on lubatud minna eelnevalt kokkulepitud ja loa saanud tegevusteks: õppimine, töötamine või lühiajalised väljasõidud.",
      "Sul on õigus suhelda lähedastega kirja ja telefoni teel ning lühiajalistel kokkusaamistel ja väljasõitudel.",
      "Sa võid kasutada vaba aja veetmise võimalusi, nagu sportimine ja lugemine.",
      "Isiklike riiete kandmine on lubatud, kuid nende puhtuse eest hoolitsed ise.",
      "Sa pead järgima päevakava, täitma vanglaametnike korraldusi ning hoidma korda ja puhtust oma eluruumis.",
      "Sa saad endale ise süüa teha.",
    ],
    workTitle: "Töö ja õppimine väljaspool",
    workParas: [
      "Vangla territooriumil saad töötada majandustöödel. Vanglal on lepingud mõnede tööandjatega, uuri nende kohta kontaktisikult.",
      "Samuti võid ise leida töökoha väljaspool vanglat, kuid vangla peab selle heaks kiitma.",
      "Uuri võimalusi ka Töötukassast.",
    ],
    workTip: "Töökoht ei tohi takistada sul õhtuti õigeks ajaks tagasi jõudmast.",
    studyParas: [
      "Kui sul on vangla luba, saad õppida väljaspool avavanglat tavakoolis.",
      "Võid jätkata õpinguid koolides, kellega vanglal on koostöö, või kandideerida teistesse koolidesse.",
    ],
    familyTitle: "Väljasõidud ja perekond",
    familyLead: "Kui kannad karistust avavanglas, ei ole sul võimalik taotleda pikaajalist kokkusaamist lähedastega.",
    familyTextStart: "Sidemete hoidmiseks või olulistel perekondlikel sündmustel osalemiseks saad taotleda ",
    familyTextEnd: ".",
    familyKeywordLabel: "lühiajalisi väljasõite",
    familyList: [
      "Kui sinu peres juhtub midagi tõsist (nt raske haigus või surm), saad taotleda kuni seitsmepäevast väljasõitu.",
    ],
    familyTip: "Erakorraline väljasõit ei kuulu 21-päevase aastase limiidi alla. Esita taotlus kirjalikult vangla direktorile, lisades võimalusel tõend (nt arstitõend või surmatunnistus). Vastus antakse kolme tööpäeva jooksul.",
    otherTitle: "Muud võimalused",
    otherLead: "Sa võid ka:",
    other: [
      "Osaleda kohtumistel asutustes või ettevõtetes (nt Töötukassas või tööintervjuudel).",
      "Osaleda Töötukassa kursustel.",
      "Osaleda sotsiaalprogrammides ja tugigruppides.",
    ],
    warningTitle: "Kui rikud reegleid:",
    warning: [
      "Kergemate rikkumiste korral võidakse sind hoiatada või piirata teatud õigusi.",
      "Tõsisemate rikkumiste korral võidakse sind tagasi viia kinnisesse vanglasse või karistada distsiplinaarkorras.",
    ],
    finalTip: "Kui oled kandnud eluaegset karistust vähemalt 23 aastat, võid uurida võimalust taotleda ümberpaigutamist avavanglasse. Kui arvad, et võiksid sobida ja tingimused on täidetud, räägi sellest oma kontaktisikuga.",
  },
};

export default function RelOpen() {
  const { language } = useLanguage();
  const copy = COPY[language] || COPY.en;

  return (
    <Sec title={copy.title} sub={copy.sub}>
      <Tp>
        {copy.introLead} (<Kw word="ETEV" /> {copy.andWord} <Kw word="TEV" />) {copy.introRest}
      </Tp>

      <Acc title={copy.conditionsTitle} open>
        <ul style={{ marginTop: 8, paddingLeft: 50 }}>
          {copy.conditions.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <Tp>{copy.conditionsTip}</Tp>

        <p>{copy.considerationTitle}</p>
        <ul style={{ marginTop: 8, listStyleType: "none", paddingLeft: 20 }}>
          {copy.considerations.map((item) => (
            <li key={item}>➤ {item}</li>
          ))}
        </ul>
        <p style={{ marginTop:8 }}>{copy.processNote}</p>
      </Acc>

      <Acc title={copy.lifeTitle}>
        <ul style={{ marginTop: 8, paddingLeft: 50 }}>
          {copy.life.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Acc>

      <Acc title={copy.workTitle}>
        {copy.workParas.map((text) => <p key={text}>{text}</p>)}
        <Tp>{copy.workTip}</Tp>
        {copy.studyParas.map((text) => <p key={text}>{text}</p>)}
      </Acc>

      <Acc title={copy.familyTitle}>
        <p><strong>{copy.familyLead}</strong></p>
        <p>
          {copy.familyTextStart}
          <Kw word="short-term outings">{copy.familyKeywordLabel}</Kw>
          {copy.familyTextEnd}
        </p>
        <ul>
          {copy.familyList.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Tp>{copy.familyTip}</Tp>
      </Acc>

      <Acc title={copy.otherTitle}>
        <p>{copy.otherLead}</p>
        <ul style={{ marginTop: 8, paddingLeft: 50 }}>
          {copy.other.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Acc>

      <W>
        <strong>{copy.warningTitle}</strong>
        <ul style={{ marginTop: 8, paddingLeft: 24 }}>
          {copy.warning.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </W>

      <Tp>{copy.finalTip}</Tp>
    </Sec>
  );
}
