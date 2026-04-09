import { useState, useRef, useEffect } from "react";
import { Ctx } from "./context/ThemeContext";
import { LanguageCtx } from "./context/LanguageContext";
import { light, dark } from "./constants/theme";
import Sidebar from "./components/layout/Sidebar";
import Router from "./components/Router";

export default function App() {
  const [page, setPage] = useState("home");
  const [isDark, setDark] = useState(false);
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("pg-language");
    return saved || "en";
  });
  const [collapsed, setCollapsed] = useState(false);
  const [isTablet, setIsTablet] = useState(() => window.innerWidth < 1024);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mainRef = useRef(null);
  const t = isDark ? dark : light;

  useEffect(() => {
    const check = () => {
      const tablet = window.innerWidth < 1024;
      setIsTablet(tablet);
      if (!tablet) setDrawerOpen(false);
    };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("pg-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const nav = (id) => {
    setPage(id);
    if (mainRef.current) mainRef.current.scrollTop = 0;
    if (isTablet) setDrawerOpen(false);
  };

  return (
    <Ctx.Provider value={t}>
      <LanguageCtx.Provider value={{ language, setLanguage }}>
      <div style={{ display:"flex", height:"100vh", fontFamily:"'Nunito',-apple-system,sans-serif", background:t.bg, color:t.text }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: ${t.bg}; font-size: 16px; -webkit-tap-highlight-color: transparent; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: ${t.accent}; }
          ::-webkit-scrollbar-track { background: transparent; }
          button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
          @media (max-width: 1023px) {
            .pg-hero h1 { font-size: clamp(24px, 5vw, 36px) !important; }
            .pg-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important; }
            .pg-two-col { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .pg-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        {isTablet && drawerOpen && (
          <div
            onClick={() => setDrawerOpen(false)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:98, backdropFilter:"blur(2px)" }}
          />
        )}

        <Sidebar
          active={page}
          onNav={nav}
          collapsed={isTablet ? false : collapsed}
          onToggle={isTablet ? () => setDrawerOpen(false) : () => setCollapsed(!collapsed)}
          isDark={isDark}
          toggleTheme={() => setDark(!isDark)}
          language={language}
          onLanguageChange={setLanguage}
          isTablet={isTablet}
          drawerOpen={drawerOpen}
        />

        <main ref={mainRef} style={{ flex:1, overflowY:"auto", padding: isTablet ? "24px 20px 100px" : "32px 40px 100px" }}>
          <div style={{ maxWidth:920, margin:"0 auto" }}>
            <Router page={page} onNav={nav} />
            <footer style={{ marginTop:56, padding:"22px 0", borderTop:`1px solid ${t.border}`, textAlign:"center", color:t.dim, fontSize:13 }}>
              <p>Time in Prison: My Steps to Freedom — Estonian Prison Service © 2025</p>
              <p style={{ marginTop:3 }}>Baltic Institute of Research · TalTech · University of Tartu</p>
            </footer>
          </div>
        </main>

        {isTablet && (
          <button
            onClick={() => setDrawerOpen(true)}
            style={{
              position:"fixed", bottom:28, right:28, zIndex:97,
              width:60, height:60, borderRadius:"50%",
              background:t.accent, border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:24, color:t.accentText, fontWeight:700,
              boxShadow:"0 6px 24px rgba(0,0,0,0.25)",
              transition:"transform 0.15s",
            }}
            onTouchStart={e => e.currentTarget.style.transform = "scale(0.92)"}
            onTouchEnd={e => e.currentTarget.style.transform = "scale(1)"}
          >☰</button>
        )}
      </div>
      </LanguageCtx.Provider>
    </Ctx.Provider>
  );
}
