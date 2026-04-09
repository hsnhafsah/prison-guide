const KW = {
  "cell terminal":"Device next to cell for radio and communicating with guard room.",
  "chaplain":"Prison minister providing spiritual support regardless of denomination.",
  "closed cell":"Cell locked 23 hrs/day. Movement only under escort.",
  "contact person":"Your main support (inspector-contact person or case manager). Ask them first for most questions.",
  "count":"Daily roll call — officer checks you're in place and everything is in order.",
  "disciplinary proceedings":"Formal process for rule violations — evidence gathered, punishment determined.",
  "economic work":"Basic jobs (cleaning, food distribution) — usually your first assignment.",
  "e-shop":"Prison online store for food, hygiene, clothing, electronics via personal account.",
  "ETEV":"Electronic monitoring — early release with ankle bracelet tracking your location.",
  "family doctor":"Your assigned GP in prison (perearst). Visits at least once a week.",
  "IIP":"Individual Implementation Plan — same as ITK, your roadmap for studying, working, and programs.",
  "ITK":"Individual Execution Plan (Individuaalne Täitmiskava) — your personal action plan outlining activities and goals for reintegration.",
  "name tag":"ID worn around neck on strap when outside your cell.",
  "open department":"Cell doors open during day, free movement within department.",
  "open prison":"Lower-security facility. Free movement during day, may work/study outside.",
  "personal account":"A financial account opened for you in prison. All transactions go through this — cash is not allowed.",
  "phone card":"Card for prison calls. Transfer money from personal account. Personal phones prohibited.",
  "probation officer":"Official supervising you after early release, similar to contact person inside.",
  "reintegration":"Support and activities to ensure you can live law-abiding after release.",
  "release fund":"Saved portion of your personal account given upon release. Max = 3× Estonian minimum wage.",
  "risk assessment":"Evaluation of how likely you are to re-offend, based on history and circumstances.",
  "short-term outings":" Outings that are up to 21 calendar days per year. It is regardless of how long you have been serving your sentence",
  "social programs":"Structured programs (anger, addiction, violence) — part of your ITK.",
  "solitary confinement":"Disciplinary punishment: alone in cell, restricted rights. Max 14 days (3 if under 21).",
  "TEV":"Conditional early release on probation — serving remaining sentence in freedom under supervision.",
  "VEK":"Vangla Ettevõtluskeskus (Prison Entrepreneurship Center) — professional/industrial work in prison.",
};
const glossary = {
  "kambri terminal": "Kambri juures asuv seade raadioside ja valvuriruumiga suhtlemiseks.",
  "kaplan": "Vangla vaimulik, kes pakub vaimset tuge sõltumata usutunnistusest.",
  "suletud kamber": "Kamber on lukustatud 23 tundi päevas. Liikumine on lubatud ainult saatja juuresolekul.",
  "kontaktisik": "Teie peamine tugi (inspektor-kontaktisik või juhtumikorraldaja). Küsige enamiku küsimuste puhul esmalt neilt.",
  "loendus": "Igapäevane nimekirja lugemine — ametnik kontrollib, kas oled kohal ja kas kõik on korras.",
  "distsiplinaarmenetlus": "Ametlik protsess reeglite rikkumise korral — kogutakse tõendeid, määratakse karistus.",
  "majandustööd": "Põhitööd (koristamine, toidu jagamine) — tavaliselt sinu esimene ülesanne.",
  "e-pood": "Vangla veebipood toidu, hügieenitarvete, riiete ja elektroonika ostmiseks isikliku konto kaudu.",
  "ETEV": "Elektrooniline järelevalve — ennetähtaegne vabastamine koos asukoha jälgimiseks mõeldud pahkluu-jälgimisseadmega.",
  "perearst": "Teile vanglas määratud perearst. Külastab teid vähemalt kord nädalas.",
  "IIP": "Individuaalne rakenduskava — sama mis ITK, teie tegevuskava õppimiseks, töötamiseks ja programmide läbimiseks.",
  "ITK": "Individuaalne täitmiskava — teie isiklik tegevuskava, milles on kirjas tegevused ja eesmärgid ühiskonda taasintegreerumiseks.",
  "nimesilt": "Kaelarihmaga kaelas kantav ID-kaart, kui oled väljaspool kambrit.",
  "avatud osakond": "Kambri uksed on päeval avatud, vaba liikumine osakonna piires.",
  "avatud vangla": "Madalama turvalisusega asutus. Vaba liikumine päeval, võib töötada või õppida väljaspool.",
  "isiklik konto": "Vanglas teie jaoks avatud pangakonto. Kõik tehingud toimuvad selle kaudu — sularaha kasutamine ei ole lubatud.",
  "telefonikaart": "Kaart vanglakõnede tegemiseks. Raha saab kanda üle isiklikult kontolt. Isiklikud telefonid on keelatud.",
  "kriminaalhooldaja": "Ametnik, kes teid ennetähtaegse vabastamise järel jälgib, sarnaselt vanglas olevale kontaktisikule.",
  "taasintegreerimine": "Toetus ja tegevused, mis aitavad pärast vabanemist elada seaduskuulekalt.",
  "vabanemisfond": "Teie isiklikult kontolt säästetud summa, mis antakse vabanemisel. Maksimaalselt 3× Eesti miinimumpalk.",
  "riskihindamine": "Hinnang sellele, kui tõenäoline on korduskuritegu, lähtudes teie minevikust ja asjaoludest.",
  "lühiajalised väljasõidud": "Väljasõidud, mis kestavad kuni 21 kalendripäeva aastas.",
  "sotsiaalprogrammid": "Struktureeritud programmid (viha, sõltuvus, vägivald) — osa sinu ITK-st.",
  "üksikvangistus": "Distsiplinaarkaristus: üksi kambris, piiratud õigused. Maksimaalselt 14 päeva (3 päeva, kui oled alla 21-aastane).",
  "TEV": "Tingimisi ennetähtaegne vabastamine katseajaga — järelejäänud karistuse kandmine vabaduses järelevalve all.",
  "VEK": "Vangla Ettevõtluskeskus — kutse- ja tööstustöö vanglas."
};

const ET_LABELS = {
  "cell terminal": "kambri terminal",
  "chaplain": "kaplan",
  "closed cell": "suletud kamber",
  "contact person": "kontaktisik",
  "count": "loendus",
  "disciplinary proceedings": "distsiplinaarmenetlus",
  "economic work": "majandustÃ¶Ã¶d",
  "e-shop": "e-pood",
  "ETEV": "ETEV",
  "family doctor": "perearst",
  "IIP": "IIP",
  "ITK": "ITK",
  "name tag": "nimesilt",
  "open department": "avatud osakond",
  "open prison": "avatud vangla",
  "personal account": "isiklik konto",
  "phone card": "telefonikaart",
  "probation officer": "kriminaalhooldaja",
  "reintegration": "taasintegreerimine",
  "release fund": "vabanemisfond",
  "risk assessment": "riskihindamine",
  "short-term outings": "lÃ¼hiajalised vÃ¤ljasÃµidud",
  "social programs": "sotsiaalprogrammid",
  "solitary confinement": "Ã¼ksikvangistus",
  "TEV": "TEV",
  "VEK": "VEK",
};

ET_LABELS["economic work"] = "majandustÃ¶Ã¶d";
ET_LABELS["short-term outings"] = "lÃ¼hiajalised vÃ¤ljasÃµidud";
ET_LABELS["solitary confinement"] = "Ã¼ksikvangistus";

function normalizeWord(word) {
  if (typeof word !== "string") return "";
  return word.trim().toLowerCase();
}

const EN_INDEX = Object.keys(KW).reduce((acc, key) => {
  acc[normalizeWord(key)] = key;
  return acc;
}, {});

const ET_INDEX = Object.values(ET_LABELS).reduce((acc, label) => {
  acc[normalizeWord(label)] = label;
  return acc;
}, {});

export function getKeywordEntry(word, language = "en") {
  const normalizedWord = normalizeWord(word);
  const englishKey = EN_INDEX[normalizedWord] || null;

  if (englishKey) {
    const etLabel = ET_LABELS[englishKey] || englishKey;
    return {
      label: language === "et" ? etLabel : englishKey,
      definition: language === "et" ? glossary[etLabel] || KW[englishKey] : KW[englishKey],
    };
  }

  const estonianLabel = ET_INDEX[normalizedWord] || null;
  if (estonianLabel && glossary[estonianLabel]) {
    return {
      label: estonianLabel,
      definition: glossary[estonianLabel],
    };
  }

  return null;
}

export default KW;
