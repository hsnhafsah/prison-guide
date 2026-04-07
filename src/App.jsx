import { useState, useRef, useEffect } from "react";
import { Ctx } from "./context/ThemeContext";
import { light, dark } from "./constants/theme";
import Sidebar from "./components/layout/Sidebar";
import Router from "./components/Router";
import NAV from "./constants/navigation";

export default function App() {
  const [page, setPage] = useState("home");
  const [isDark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isTablet, setIsTablet] = useState(() => window.innerWidth < 1024);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [history, setHistory] = useState(["home"]);
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

  const nav = (id) => {
    setPage(id);
    setHistory(prev => [...prev, id]);
    if (mainRef.current) mainRef.current.scrollTop = 0;
    if (isTablet) setDrawerOpen(false);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setPage(newHistory[newHistory.length - 1]);
      if (mainRef.current) mainRef.current.scrollTop = 0;
    }
  };

  const getCurrentSection = () => {
    const mainId = page.split(".")[0];
    return NAV.find(n => n.id === mainId);
  };

  return (
    <Ctx.Provider value={t}>
      <div style={{ display:"flex", height:"100vh", fontFamily:"'Nunito',-apple-system,sans-serif", background:t.bg, color:t.text, flexDirection: isTablet ? "column" : "row" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: ${t.bg}; font-size: 16px; -webkit-tap-highlight-color: transparent; }
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: ${t.accent}; }
          ::-webkit-scrollbar-track { background: transparent; }
          button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
          @media (max-width: 1023px) {
            .pg-hero h1 { font-size: clamp(32px, 6vw, 48px) !important; }
            .pg-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important; gap: 16px !important; }
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
          isTablet={isTablet}
          drawerOpen={drawerOpen}
        />

        <main ref={mainRef} style={{ flex:1, overflowY:"auto", padding: isTablet ? "16px 20px 140px" : "32px 40px 100px" }}>
          <div style={{ maxWidth: isTablet ? "100%" : 920, margin:"0 auto" }}>
            {page !== "home" && history.length > 1 && (
              <button
                onClick={goBack}
                style={{
                  display:"flex", alignItems:"center", justifyContent:"center", gap:12,
                  padding: isTablet ? "16px 28px" : "12px 24px",
                  marginBottom: isTablet ? 32 : 24,
                  background:t.accent, color:t.accentText,
                  border:"none", borderRadius: isTablet ? 16 : 12,
                  cursor:"pointer",
                  fontSize: isTablet ? 18 : 16,
                  fontWeight:700,
                  letterSpacing:0.5,
                  minHeight: isTablet ? 56 : 44,
                  boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
                  transition:"all 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateX(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
              >
                <span style={{ fontSize: isTablet ? 24 : 20 }}>←</span>
                <span style={{ textTransform:"uppercase" }}>Back</span>
              </button>
            )}
            <Router page={page} onNav={nav} />
            <footer style={{ marginTop:56, padding:"28px 0", borderTop:`1px solid ${t.border}`, textAlign:"center", color:t.dim, fontSize: isTablet ? 14 : 13 }}>
              <p>Time in Prison: My Steps to Freedom — Estonian Prison Service © 2025</p>
              <p style={{ marginTop:3 }}>Baltic Institute of Research · TalTech · University of Tartu</p>
            </footer>
          </div>
        </main>

        {isTablet && (
          <button
            onClick={() => setDrawerOpen(true)}
            style={{
              position:"fixed", bottom:24, right:24, zIndex:97,
              width:72, height:72, borderRadius:18,
              background:t.accent, border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:32, color:t.accentText, fontWeight:700,
              boxShadow:"0 8px 32px rgba(0,0,0,0.3)",
              transition:"transform 0.15s",
            }}
            onTouchStart={e => e.currentTarget.style.transform = "scale(0.92)"}
            onTouchEnd={e => e.currentTarget.style.transform = "scale(1)"}
          >☰</button>
        )}
      </div>
    </Ctx.Provider>
  );
}
