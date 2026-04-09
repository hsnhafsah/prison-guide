import HomePage from "../pages/HomePage";
import ArrivalSearch from "../pages/arrival/ArrivalSearch";
import ArrivalHealth from "../pages/arrival/ArrivalHealth";
import ArrivalNeeds from "../pages/arrival/ArrivalNeeds";
import DailySchedule from "../pages/daily/DailySchedule";
import DailyAccount from "../pages/daily/DailyAccount";
import DailyPhone from "../pages/daily/DailyPhone";
import DailyEating from "../pages/daily/DailyEating";
import DailyEshop from "../pages/daily/DailyEshop";
import DailyLiving from "../pages/daily/DailyLiving";
import DailyHygiene from "../pages/daily/DailyHygiene";
import DailyLaundry from "../pages/daily/DailyLaundry";
import DailyMeetings from "../pages/daily/DailyMeetings";
import DailyLetters from "../pages/daily/DailyLetters";
import DailyMovement from "../pages/daily/DailyMovement";
import DailyLeisure from "../pages/daily/DailyLeisure";
import DailyTablet from "../pages/daily/DailyTablet";
import CalcPage from "../pages/CalcPage";
import RulesProcess from "../pages/rules/RulesProcess";
import RulesPunishments from "../pages/rules/RulesPunishments";
import RulesSolitary from "../pages/rules/RulesSolitary";
import HealthServices from "../pages/health/HealthServices";
import HealthDoctor from "../pages/health/HealthDoctor";
import HealthMeds from "../pages/health/HealthMeds";
import HealthPsych from "../pages/health/HealthPsych";
import HealthChaplain from "../pages/health/HealthChaplain";
import ActRisk from "../pages/activities/ActRisk";
import ActPrograms from "../pages/activities/ActPrograms";
import ActLearn from "../pages/activities/ActLearn";
import ActWork from "../pages/activities/ActWork";
import RelOpen from "../pages/release/RelOpen";
import RelETEV from "../pages/release/RelETEV";
import RelTEV from "../pages/release/RelTEV";
import PrepPage from "../pages/PrepPage";
import StaffPage from "../pages/StaffPage";
import JourneyPage from "../pages/JourneyPage";
import ActReintegration from "../pages/activities/ActReintegration";

const PAGES = {
  "arrival.search": ArrivalSearch,
  "arrival.health": ArrivalHealth,
  "arrival.needs": ArrivalNeeds,
  "daily.schedule": DailySchedule,
  "daily.account": DailyAccount,
  "daily.phone": DailyPhone,
  "daily.eating": DailyEating,
  "daily.eshop": DailyEshop,
  "daily.living": DailyLiving,
  "daily.hygiene": DailyHygiene,
  "daily.laundry": DailyLaundry,
  "daily.meetings": DailyMeetings,
  "daily.letters": DailyLetters,
  "daily.movement": DailyMovement,
  "daily.leisure": DailyLeisure,
  "daily.tablet": DailyTablet,
  calc: CalcPage,
  "rules.process": RulesProcess,
  "rules.punishments": RulesPunishments,
  "rules.solitary": RulesSolitary,
  "health.services": HealthServices,
  "health.doctor": HealthDoctor,
  "health.meds": HealthMeds,
  "health.psych": HealthPsych,
  "health.chaplain": HealthChaplain,
  "act.reintegration": ActReintegration,
  "act.risk": ActRisk,
  "act.programs": ActPrograms,
  "act.learn": ActLearn,
  "act.work": ActWork,
  "rel.open": RelOpen,
  "rel.etev": RelETEV,
  "rel.tev": RelTEV,
  prep: PrepPage,
  staff: StaffPage,
  journey: JourneyPage,
};

export default function Router({ page, onNav }) {
  const Pg = PAGES[page];
  if (page === "home" || !Pg) return <HomePage onNav={onNav} />;
  return <Pg />;
}
