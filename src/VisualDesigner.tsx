import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import prBwlow1 from "./pr_bwlow.png";
import loanLensImage from "../Loanlens_project1_cover.png";
import autoopsImage from "../Autoops_project2_cover.png";
import scangoImage from "../Scango_project3_cover.png";
import mediSenseImage from "../Medisense_project4_cover.png";
import loanLensArchiImage from "../loanlens_archi.png";
import autoopsArchiImage from "../autoops_archi.png";
import scangoArchiImage from "../scango_archi.png";
import mediSenseArchiImage from "../medisense_ai_archi.png";
import githubIcon from "./githubicon.svg";
import linkedinIcon from "./linkedinicon.svg";
import BorderGlow from "./BorderGlow";
import TiltedCard from "./components/ui/tilted-card";
import LogoLoop, { LogoItem } from "./components/LogoLoop";
import {
  SiReact,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { updateMetaTags } from "./utils/seoMetaTags";

export const VisualDesigner = (): JSX.Element => {
  const DESIGN_W = 1440;
  const DESIGN_H = 810;

  const [scale, setScale] = useState(1);
  const [activePage, setActivePage] = useState("home");
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [imageHovered, setImageHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [enlargedArchImage, setEnlargedArchImage] = useState<string | null>(
    null,
  );

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [formMessage, setFormMessage] = useState("");

  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMountRef = useRef(true);

  const projects = [
    {
      id: 1,
      name: "LoanLens AI",
      description:
        "Production-grade credit risk and loan underwriting platform with an ensemble ML model for PD, LGD, and EAD scoring, RAG-powered document grounding, and SHAP explainability.",
      github: "https://github.com/charan270469/loanlens",
      tech: [
        "FastAPI",
        "React",
        "XGBoost",
        "LightGBM",
        "LangChain",
        "FAISS",
        "SHAP",
        "Python",
      ],
      displayTech: [
        "FastAPI",
        "React",
        "XGBoost",
        "LightGBM",
        "LangChain",
        "FAISS",
      ],
      image: loanLensImage,
      architectureImage: loanLensArchiImage,
      caseStudy:
        "Building a real-world credit risk engine meant going far beyond a single ML model. LoanLens AI orchestrates a 10-phase pipeline — from document ingestion via Landing AI's Agentic Data Extraction, through KPI calculation (income stability, debt ratios, account patterns), dual-mode fraud detection (text anomalies + OpenCV image tampering), all the way to an ensemble of XGBoost, LightGBM, and CatBoost models computing Probability of Default, Loss Given Default, and Exposure at Default. A policy decision engine then applies risk thresholds to auto-approve, flag for manual review, or reject. Every decision is explained via SHAP TreeExplainer and compiled into a human-readable Credit Assessment Memo (CAM), with LangChain RAG + FAISS enabling document-grounded Q&A. Key achievements: full PD/LGD/EAD scoring pipeline with configurable model modes (synthetic, shadow, real), SHAP-driven explainability surfacing the top 5 risk drivers per decision, and a React dashboard with Recharts visualizations and KaTeX-rendered risk math.",
    },
    {
      id: 2,
      name: "AutoOps AI",
      description:
        "Autonomous multi-agent workflow engine for enterprise operations with self-healing failure recovery, LLM-powered meeting intelligence, and a real-time audit dashboard.",
      github: "https://github.com/charan270469/autoops-ai",
      tech: [
        "Groq",
        "Llama 3.3 70B",
        "n8n",
        "Node.js",
        "React",
        "WebSocket",
        "Tailwind CSS",
      ],
      displayTech: ["Groq", "Llama 3.3 70B", "n8n", "Node.js", "React"],
      image: autoopsImage,
      architectureImage: autoopsArchiImage,
      caseStudy:
        "Enterprise workflows fail silently — steps get blocked, tasks fall through, and there's no visibility until damage is done. AutoOps AI was built to solve exactly that. Six specialized AI agents (Orchestrator, Decision, HR, IT, Finance, Compliance) coordinate over three active n8n workflows to run a full 6-step employee onboarding end-to-end without human intervention. When failures occur, a self-healing engine classifies them as transient, dependency-based, or hard — then autonomously retries, reorders, or escalates with a drafted message, each decision logged with timestamp and confidence score. A separate Meeting Intelligence module lets you paste any transcript and get auto-extracted tasks with owners and deadlines via Groq + Llama 3.3 70B. Key achievements: reduced simulated onboarding time from 8 days to 2, achieved 80%+ autonomous workflow completion, delivered 100% decision auditability, and a live WebSocket dashboard with predictive SLA breach detection — all built for the ET GenAI Hackathon 2026.",
    },
    {
      id: 3,
      name: "ScanGo",
      description:
        "AI-powered smart retail system bridging physical shopping and digital convenience with real-time inventory sync, blockchain-signed QR receipts, and a dual-mode cashier/guard terminal.",
      github: "https://github.com/charan270469/scango_modified",
      tech: [
        "React",
        "Node.js",
        "TypeScript",
        "Groq LLM",
        "Ethers.js",
        "Supabase",
        "Twilio",
        "WebSocket",
      ],
      displayTech: [
        "React",
        "Node.js",
        "TypeScript",
        "Groq LLM",
        "Ethers.js",
        "Supabase",
      ],
      image: scangoImage,
      architectureImage: scangoArchiImage,
      caseStudy:
        "Traditional retail checkout is fragmented — long queues, no intelligence at the shelf, and zero fraud prevention at exit. ScanGo reimagines the entire journey across three phases. Customers scan barcodes to build a live cart with real-time subtotals and savings, assisted by a Groq-powered AI chat for in-store queries. At checkout, Ethers.js generates cryptographically signed QR receipt payloads stored against Supabase. At the exit, a dedicated Guard Terminal (separate React app) validates the QR against database state in real time, preventing shrinkage. A Twilio integration handles phone-based customer authentication. Key achievements: end-to-end retail flow from scan to verified exit in a single platform, blockchain-signed receipts for tamper-proof verification, dual-mode employee terminal adapting UI for cashier vs. guard roles, and a fully event-driven architecture with shared backend services across both apps.",
    },
    {
      id: 4,
      name: "MediSense AI",
      description:
        "Patient-first AI medical assistant using RAG to provide accurate, personalized health insights from uploaded reports, with biomarker tracking, prescription analysis, and an always-on AI doctor.",
      github: "https://github.com/charan270469/medisense",
      tech: [
        "React",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Groq LLM",
        "RAG",
        "Vite",
        "Tailwind CSS",
      ],
      displayTech: [
        "React",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Groq LLM",
        "RAG",
      ],
      image: mediSenseImage,
      architectureImage: mediSenseArchiImage,
      caseStudy:
        "Medical reports are dense, jargon-heavy, and disconnected from each other — patients leave clinics with PDFs they can't interpret and no longitudinal view of their own health. MediSense AI tackles this by building a full personal health intelligence layer on top of your medical history. Users upload lab reports, imaging scans, or prescriptions (JPG, PNG, or PDF); a Groq vision model (Llama 3.2 11B) extracts biomarkers and clinical data, generates a patient-friendly summary, and persists it to MongoDB. Every saved record then feeds into the RAG context for the AI Doctor — a chat interface powered by Llama 3.3 70B that answers health questions with awareness of your actual biomarkers, past risks, and current medications, not generic internet advice. A dedicated Prescription Analysis module identifies medications, suggests alternatives, and flags interactions. Recharts renders longitudinal biomarker trends across multiple reports, turning scattered uploads into a coherent health timeline. Key achievements: full RAG pipeline grounding every AI response in the user's own records, multi-modal ingestion across PDFs and images, Google OAuth 2.0 with JWT-scoped per-user data isolation in MongoDB, and a floating chat assistant available across all screens for instant triage and symptom severity assessment.",
    },
  ];

  const techLogos: LogoItem[] = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPython />,
      title: "Python",
      href: "https://www.python.org",
    },
    {
      node: <SiFastapi />,
      title: "FastAPI",
      href: "https://fastapi.tiangolo.com",
    },
    {
      node: <SiNodedotjs />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <FaCloud />,
      title: "Azure",
      href: "https://azure.microsoft.com",
    },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  useEffect(() => {
    const recalc = () => {
      const scaleX = window.innerWidth / DESIGN_W;
      const scaleY = window.innerHeight / DESIGN_H;
      // Cap scale at 1.0 to prevent things from becoming too big on large screens
      setScale(Math.min(1, scaleX, scaleY));
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  useEffect(() => {
    // After the initial mount, set isInitialMountRef to false
    // This prevents entry animations from re-triggering on every section change
    // We use a longer timeout (3s) to ensure initial animations (2s) complete
    // even if re-renders occur (e.g., from hover events)
    const timer = setTimeout(() => {
      isInitialMountRef.current = false;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent scroll when modals are open
    if (showAboutMe || showProjectDetail || enlargedArchImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showAboutMe, showProjectDetail, enlargedArchImage]);

  useEffect(() => {
    if (showProjectDetail && selectedProject !== null) {
      const proj = projects.find((p) => p.id === selectedProject);
      if (proj) {
        updateMetaTags({
          title: `${proj.name} Case Study — Sai Charan Portfolio`,
          description: proj.description,
          ogTitle: `${proj.name} — AI & Full-Stack Case Study`,
          ogDescription: proj.description,
          canonicalUrl: `https://saicharan.dev/#projects`,
        });
      }
    } else if (showAboutMe) {
      updateMetaTags({
        title: "About Sai Charan — Full-Stack & AI Engineer Portfolio",
        description:
          "Learn more about Sai Charan, a B.Tech student in Data Science & AI with production experience building LLM pipelines, RAG systems, and cloud deployments.",
        ogTitle: "About Sai Charan — Software Engineer",
        canonicalUrl: `https://saicharan.dev/#aboutme`,
      });
    } else if (activePage === "projects") {
      updateMetaTags({
        title: "Featured AI/ML & Full-Stack Projects — Sai Charan",
        description:
          "Explore Sai Charan's featured production-ready AI applications, workflow engines, and smart retail systems built with FastAPI, React, Groq, and n8n.",
        ogTitle: "Featured Work — Sai Charan",
        canonicalUrl: `https://saicharan.dev/#projects`,
      });
    } else if (activePage === "experience") {
      updateMetaTags({
        title: "Professional Timeline & Experience — Sai Charan",
        description:
          "Professional journey of Sai Charan, including AI development at Viswam.AI, cloud engineering at Mindenious Edutech, and UI/UX design.",
        ogTitle: "Experience Timeline — Sai Charan Portfolio",
        canonicalUrl: `https://saicharan.dev/#experience`,
      });
    } else {
      updateMetaTags({
        title:
          "Sai Charan – Full-Stack Developer & Software Engineer Portfolio",
        description:
          "Sai Charan's portfolio showcasing full-stack development projects including LoanLens, AutoOps, Scango, and MediSense. Expert in React, Python, TypeScript, and cloud technologies.",
        ogTitle: "Sai Charan – Full-Stack Developer & Software Engineer",
        canonicalUrl: `https://saicharan.dev`,
      });
    }
  }, [activePage, showAboutMe, showProjectDetail, selectedProject]);

  const handleNavClick = (page: string) => {
    if (page === "home") {
      homeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (page === "aboutme") {
      setShowAboutMe(true);
    } else if (page === "projects") {
      portfolioSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (page === "experience") {
      experienceSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setActivePage(page);
  };

  const renderNavLink = (label: string, page: string) => {
    const isActive = activePage === page;
    return (
      <a
        key={page}
        href={`#${page}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(page);
        }}
        style={{
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: isActive ? "#0a0a0a" : "#a8a29e",
          backgroundColor: isActive ? "#c5956e" : "transparent",
          paddingLeft: isActive ? "1rem" : "0",
          paddingRight: isActive ? "1rem" : "0",
          paddingTop: isActive ? "0.5rem" : "0",
          paddingBottom: isActive ? "0.5rem" : "0",
          borderRadius: isActive ? 9999 : "0",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            const el = e.target as HTMLElement;
            el.style.backgroundColor = "#d3d3d3";
            el.style.color = "#0a0a0a";
            el.style.paddingLeft = "1rem";
            el.style.paddingRight = "1rem";
            el.style.paddingTop = "0.5rem";
            el.style.paddingBottom = "0.5rem";
            el.style.borderRadius = "9999px";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            const el = e.target as HTMLElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "#a8a29e";
            el.style.paddingLeft = "0";
            el.style.paddingRight = "0";
            el.style.paddingTop = "0";
            el.style.paddingBottom = "0";
            el.style.borderRadius = "0";
          }
        }}
      >
        {label}
      </a>
    );
  };

  const handleImageHover = (e: React.MouseEvent) => {
    setImageHovered(true);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleImageMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleImageLeave = () => {
    setImageHovered(false);
  };

  const handleImageClick = () => {
    setShowAboutMe(true);
    setActivePage("aboutme");
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus("error");
      setFormMessage("Please fill in all fields");
      setTimeout(() => setFormStatus("idle"), 5000);
      return;
    }

    setFormSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xanjgorj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `⭐ NEW PORTFOLIO INQUIRY: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setFormMessage("Failed to send message. Please try again.");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage("An error occurred. Please try again.");
      setTimeout(() => setFormStatus("idle"), 5000);
    } finally {
      setFormSubmitting(false);
    }
  };

  // Scroll detection for active section
  useEffect(() => {
    const container = mainContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Get scroll position
      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;
      const viewportCenter = scrollPosition + containerHeight / 2; // Use center of viewport to determine active section

      // Helper function to get section position relative to scroll container
      const getSectionPos = (ref: React.RefObject<HTMLDivElement>) => {
        if (!ref.current) return Infinity;
        let pos = 0;
        let element: HTMLElement | null = ref.current;

        // Calculate position relative to main container
        while (element && element !== container) {
          pos += element.offsetTop;
          element = element.offsetParent as HTMLElement;
        }
        return pos;
      };

      // Get positions of all sections
      const portfolioPos = getSectionPos(portfolioSectionRef);
      const experiencePos = getSectionPos(experienceSectionRef);
      const contactPos = getSectionPos(contactSectionRef);

      // Determine which section is currently in view (based on center of viewport)
      if (scrollPosition < 50) {
        setActivePage("home");
      } else if (viewportCenter < portfolioPos) {
        setActivePage("home");
      } else if (viewportCenter < experiencePos) {
        setActivePage("projects");
      } else if (viewportCenter < contactPos) {
        setActivePage("experience");
      } else {
        setActivePage("experience"); // Contact section
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={mainContainerRef}
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "rgba(30,29,28,1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
      className="main-container"
    >
      <style>{`
        .main-container::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
        .main-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>
      {/* Container to handle the scaled height in layout flow */}
      <div
        ref={homeSectionRef}
        style={{
          width: "100%",
          height: DESIGN_H * scale,
          display: "flex",
          justifyContent: "center",
          overflow: "visible",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Full-bleed background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(30,29,28,1)",
            }}
          />

          {/* ── Main rounded card ── */}
          <div
            style={{
              position: "absolute",
              top: 50,
              left: -40,
              width: 1520,
              height: 736,
              display: showAboutMe ? "none" : "block",
            }}
          >
            <BorderGlow
              backgroundColor="rgba(30,29,28,1)"
              borderRadius={24}
              glowColor="40 80 80"
              glowRadius={40}
              glowIntensity={0.7}
              edgeSensitivity={30}
              coneSpread={25}
              colors={["#C5956E", "#8A7361", "#1A1A1A"]}
              fillOpacity={0.5}
              className="border-glow-wrapper"
            >
              {/* "Design that speaks" — top-right inside card */}
              <p
                className={
                  isInitialMountRef.current ? "animate-slide-in-right" : ""
                }
                style={{
                  position: "absolute",
                  top: 120,
                  right: 52,
                  width: 150,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  color: "#d1d4db",
                  fontSize: 15.5,
                  textAlign: "right",
                  lineHeight: "24px",
                  margin: 0,
                }}
              >
                Code that thinks.
                <br />
                Systems that scale.
              </p>

              {/* Giant PORTFOLIO text — inside card, two lines */}
              <div
                className={
                  isInitialMountRef.current ? "animate-slide-in-top" : ""
                }
                style={{
                  position: "absolute",
                  top: 210,
                  left: 30,
                  width: 1450,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: 250,
                  textAlign: "center",
                  letterSpacing: "-2px",
                  lineHeight: "0.9",
                  background:
                    "linear-gradient(128deg, rgba(201,138,94,1) 0%, rgba(254,221,177,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.85,
                  userSelect: "none",
                }}
              >
                PORTFOLIO
              </div>

              {/* ── Bottom-left: social links + bio  ── */}
              {/* Positioned using original coords: page y=614, card starts y=37 → card-relative y=577 */}
              <div
                className={
                  isInitialMountRef.current ? "animate-slide-in-left" : ""
                }
                style={{
                  position: "absolute",
                  top: 570,
                  left: 52,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  cursor: "pointer",
                }}
              >
                {/* Social links row */}
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <a
                    href="https://github.com/charan270469"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      style={{ width: 18, height: 18 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        color: "#e4e7eb",
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                      }}
                    >
                      charan270469
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sai-charan-77071b281/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 18, height: 18 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        color: "#e4e7eb",
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                      }}
                    >
                      saicharan
                    </span>
                  </a>
                </div>

                {/* Bio paragraph */}
                <p
                  style={{
                    width: 387,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    color: "#d1d4db",
                    fontSize: 13,
                    lineHeight: "20px",
                    margin: 0,
                  }}
                >
                  Between data and intelligence lies the space where I build.
                  From engineering LLM pipelines to architecting agentic
                  systems, my work revolves around precision, scalability, and
                  real-world impact. Through every project, I help ideas evolve
                  into systems that think, adapt, and deliver with purpose.
                </p>
              </div>

              {/* ── Bottom-right: DEVELOPER & DESIGNER ── */}
              {/* Original: page y=640, card y=37 → card-relative y=603, height=100 → ends at 703, well inside 736 */}
              <div
                className={
                  isInitialMountRef.current ? "animate-slide-in-right" : ""
                }
                style={{
                  position: "absolute",
                  top: 610,
                  right: 50,
                  width: 363,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  color: "#d2b48b",
                  fontSize: 48.1,
                  textAlign: "right",
                  letterSpacing: "2.4px",
                  lineHeight: "48px",
                }}
              >
                DEVELOPER &amp; DESIGNER
              </div>
            </BorderGlow>
          </div>

          {/* ── Name + tagline (overlapping card top-left) ── */}
          <div
            className={isInitialMountRef.current ? "animate-slide-in-left" : ""}
            style={{
              position: "absolute",
              top: 172,
              left: 12,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                color: "#d2b48b",
                fontSize: 24.3,
                letterSpacing: "0.6px",
                lineHeight: "32px",
                whiteSpace: "nowrap",
              }}
            >
              SAI CHARAN
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                color: "#d1d4db",
                fontSize: 16.1,
                lineHeight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              Detach &amp; do it...
            </div>
          </div>

          {/* ── Navigation bar ── */}
          <header
            className={isInitialMountRef.current ? "animate-slide-in-top" : ""}
            style={{
              position: "fixed",
              top: 40,
              left: 0,
              width: "100%",
              zIndex: 50,
              display: showAboutMe || showProjectDetail ? "none" : "flex",
              justifyContent: "center",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "1rem",
            }}
          >
            <nav
              style={{
                borderRadius: 9999,
                marginTop: "1.5rem",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "rgba(19, 19, 19, 0.8)",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
                className="md:flex"
              >
                {renderNavLink("Home", "home")}
                {renderNavLink("AboutMe", "aboutme")}
                {renderNavLink("Projects", "projects")}
                {renderNavLink("Experience", "experience")}
              </div>
              <button
                onClick={() => {
                  contactSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                style={{
                  backgroundColor: "#c5956e",
                  color: "#0a0a0a",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "scale(1)";
                }}
                onMouseDown={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "scale(0.95)";
                }}
                onMouseUp={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "scale(1.05)";
                }}
              >
                Connect
              </button>
            </nav>
          </header>

          {/* ── Portrait photo (centered on card, anchored to bottom) ── */}
          <div
            className={
              isInitialMountRef.current ? "animate-slide-in-bottom" : ""
            }
            style={{
              position: "absolute",
              top: 32,
              left: 20,
              width: 1400,
              height: 753,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              pointerEvents: "none",
            }}
            onMouseEnter={handleImageHover}
            onMouseMove={handleImageMove}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={prBwlow1}
              alt="Sai Charan"
              onClick={handleImageClick}
              style={{
                maxWidth: 650,
                maxHeight: 770,
                width: "auto",
                height: "auto",
                objectFit: "contain",
                pointerEvents: "auto",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
            />

            {/* About Me Tooltip */}
            {imageHovered && (
              <div
                style={{
                  position: "fixed",
                  left: tooltipPos.x + 5,
                  top: tooltipPos.y - 35,
                  backgroundColor: "#feddb1",
                  border: "1px solid #C5956E",
                  borderRadius: 8,
                  padding: "6px 12px",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.75rem)",
                  fontWeight: 500,
                  color: "#000000ff",
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  zIndex: 1000,
                }}
              >
                Click to know me
              </div>
            )}
          </div>

          {/* ── About Me Modal Section (Portal) ── */}
          {showAboutMe &&
            ReactDOM.createPortal(
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
                onClick={() => setShowAboutMe(false)}
              >
                <div
                  className="animate-modal-slide-in"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "relative",
                    width: "95%",
                    maxWidth: 1600,
                    maxHeight: "95vh",
                    backgroundColor: "rgba(30, 29, 28, 1)",
                    borderRadius: 24,
                    cursor: "default",
                    overflow: "hidden",
                  }}
                >
                  <BorderGlow
                    backgroundColor="rgba(30,29,28,1)"
                    borderRadius={24}
                    glowColor="40 80 80"
                    glowRadius={40}
                    glowIntensity={0.7}
                    edgeSensitivity={30}
                    coneSpread={25}
                    colors={["#C5956E", "#8A7361", "#1A1A1A"]}
                    fillOpacity={0.5}
                    className="border-glow-wrapper"
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setShowAboutMe(false)}
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "rgba(197, 149, 110, 0.2)",
                        border: "1px solid rgba(197, 149, 110, 0.4)",
                        color: "#d2b48b",
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(197, 149, 110, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(197, 149, 110, 0.2)";
                      }}
                    >
                      ✕
                    </button>

                    {/* Content */}
                    <div
                      style={{
                        padding: "40px 60px 20px 60px",
                        height: "100%",
                        display: "grid",
                        gridTemplateColumns: "1fr 1.2fr",
                        gap: 40,
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Left: Text Content */}
                      <div>
                        <h1
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(1.75rem, 4vw, 3rem)",
                            color: "#d2b48b",
                            margin: "0 0 16px 0",
                            letterSpacing: "-1px",
                          }}
                        >
                          About Me
                        </h1>

                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontSize: "11px",
                            color: "#d1d4db",
                            lineHeight: "18px",
                            margin: "0 0 12px 0",
                            maxWidth: "600px",
                          }}
                        >
                          I'm a B.Tech student in Data Science & AI (2023–2027)
                          at IFHE Hyderabad, with hands-on production experience
                          building AI/ML systems, LLM pipelines, and full-stack
                          applications well before graduation. At Viswam.AI, I
                          contributed to India's first large-scale Telugu LLM —
                          working directly on data collection, corpus
                          refinement, and supervised fine-tuning inside a
                          Linux-based NLP pipeline. At Mindenious Edutech, I
                          completed an Azure Cloud Computing program spanning
                          compute, networking, storage, and security, delivering
                          a capstone cloud deployment. Earlier, at Seponty, I
                          translated user requirements into interaction patterns
                          for a production chatbot application as a UI/UX
                          intern.
                        </p>

                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontSize: "11px",
                            color: "#d1d4db",
                            lineHeight: "18px",
                            margin: "0 0 12px 0",
                            maxWidth: "600px",
                          }}
                        >
                          My project work reflects the same production-first
                          mindset — a credit risk platform with an ensemble ML
                          model and SHAP explainability, a multi-agent workflow
                          engine with self-healing failure recovery, an
                          AI-powered retail system with blockchain-signed
                          receipts, and a medical assistant with full RAG
                          grounding on personal health records. Beyond the work,
                          I'm a national hackathon finalist, a Top 20 team pick
                          at TechSprint nationwide, and part of the team that
                          built a real-time voice-first AI banking assistant at
                          the Agentathon 2025 Guinness World Record event.
                        </p>

                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontSize: "11px",
                            color: "#d1d4db",
                            lineHeight: "18px",
                            margin: 0,
                            maxWidth: "600px",
                          }}
                        >
                          When I'm not coding, you'll find me exploring emerging
                          technologies, contributing to open-source projects, or
                          crafting pixel-perfect interfaces. I believe in the
                          power of clean code, thoughtful design, and solving
                          complex problems with elegant solutions. I'm actively
                          seeking internships and full-time roles in AI/ML
                          engineering, LLM development, and full-stack AI — and
                          ready to contribute from day one.
                        </p>
                      </div>

                      {/* Right: Skill Boxes Bento Grid */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gridTemplateRows: "auto auto auto",
                          gap: 8,
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {/* AI & Intelligence - Large Box (spans 2 rows, 1 col) */}
                        <div
                          style={{
                            gridColumn: "1 / 3",
                            gridRow: "1 / 2",
                            backgroundColor: "rgba(70, 70, 70, 0.4)",
                            borderRadius: 12,
                            padding: 16,
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 800,
                              fontSize: "14px",
                              color: "#d1d4db",
                              margin: 0,
                              letterSpacing: "-0.3px",
                            }}
                          >
                            AI & Intelligence
                          </h3>
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 300,
                              fontSize: "11px",
                              color: "#feddb1",
                              lineHeight: "16px",
                              margin: 0,
                            }}
                          >
                            Building LLM pipelines, agentic workflows, and
                            retrieval systems for production.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 6,
                            }}
                          >
                            <div>
                              <p
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 600,
                                  fontSize: "12px",
                                  color: "#d2b48b",
                                  margin: "0 0 4px 0",
                                  textTransform: "uppercase",
                                }}
                              >
                                LLMs & RAG
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 6,
                                }}
                              >
                                {[
                                  "LangChain",
                                  "Hugging Face",
                                  "FAISS",
                                  "DeepFace",
                                  "OpenCV",
                                ].map((skill) => (
                                  <span
                                    key={skill}
                                    style={{
                                      fontSize: "10px",
                                      color: "#d1d4db",
                                      backgroundColor:
                                        "rgba(210, 180, 139, 0.1)",
                                      padding: "2px 6px",
                                      borderRadius: 4,
                                      fontFamily: "'Inter', sans-serif",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Full-Stack - Small Box */}
                        <div
                          style={{
                            gridColumn: "1 / 2",
                            gridRow: "2 / 3",
                            backgroundColor: "rgba(70, 70, 70, 0.4)",
                            borderRadius: 12,
                            padding: 12,
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 800,
                              fontSize: "14px",
                              color: "#d1d4db",
                              margin: 0,
                              letterSpacing: "-0.2px",
                            }}
                          >
                            Full-Stack
                          </h3>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 6,
                            }}
                          >
                            {[
                              "FastAPI",
                              "React",
                              "Node.js",
                              "Tailwind",
                              "WebSocket",
                              "Ethers.js",
                            ].map((skill) => (
                              <span
                                key={skill}
                                style={{
                                  fontSize: "10px",
                                  color: "#d1d4db",
                                  backgroundColor: "rgba(210, 180, 139, 0.1)",
                                  padding: "2px 6px",
                                  borderRadius: 3,
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 500,
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Infra & Tools - Small Box */}
                        <div
                          style={{
                            gridColumn: "2 / 3",
                            gridRow: "2 / 3",
                            backgroundColor: "rgba(70, 70, 70, 0.4)",
                            borderRadius: 12,
                            padding: 12,
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 800,
                              fontSize: "14px",
                              color: "#d1d4db",
                              margin: 0,
                              letterSpacing: "-0.2px",
                            }}
                          >
                            Infra & Tools
                          </h3>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 6,
                            }}
                          >
                            {[
                              "Linux",
                              "Azure",
                              "Groq",
                              "n8n",
                              "Cursor",
                              "Git",
                            ].map((skill) => (
                              <span
                                key={skill}
                                style={{
                                  fontSize: "10px",
                                  color: "#d1d4db",
                                  backgroundColor: "rgba(210, 180, 139, 0.1)",
                                  padding: "2px 6px",
                                  borderRadius: 3,
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 500,
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Data & ML - Large Square Box */}
                        <div
                          style={{
                            gridColumn: "1 / 3",
                            gridRow: "3 / 4",
                            backgroundColor: "rgba(210, 180, 139, 0.12)",
                            borderRadius: 12,
                            padding: 16,
                            border: "1px solid rgba(210, 180, 139, 0.3)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 800,
                              fontSize: "14px",
                              color: "#d2b48b",
                              margin: 0,
                              letterSpacing: "-0.3px",
                            }}
                          >
                            Data & ML
                          </h3>
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 300,
                              fontSize: "11px",
                              color: "#ffffff",
                              lineHeight: "16px",
                              margin: 0,
                            }}
                          >
                            Crafting ensemble models, explainable predictions,
                            and end-to-end ML pipelines.
                          </p>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: 8,
                            }}
                          >
                            <div>
                              <p
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 700,
                                  fontSize: "11px",
                                  color: "#d2b48b",
                                  margin: "0 0 4px 0",
                                  textTransform: "uppercase",
                                }}
                              >
                                Algorithms
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 6,
                                }}
                              >
                                {[
                                  "XGBoost",
                                  "LightGBM",
                                  "CatBoost",
                                  "Scikit-learn",
                                ].map((skill) => (
                                  <span
                                    key={skill}
                                    style={{
                                      fontSize: "10px",
                                      color: "#1a1a1a",
                                      backgroundColor: "#d2b48b",
                                      padding: "2px 6px",
                                      borderRadius: 3,
                                      fontFamily: "'Inter', sans-serif",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 700,
                                  fontSize: "11px",
                                  color: "#d2b48b",
                                  margin: "0 0 4px 0",
                                  textTransform: "uppercase",
                                }}
                              >
                                Explainability
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 6,
                                }}
                              >
                                {["SHAP", "Neural Nets"].map((skill) => (
                                  <span
                                    key={skill}
                                    style={{
                                      fontSize: "10px",
                                      color: "#1a1a1a",
                                      backgroundColor: "#d2b48b",
                                      padding: "2px 6px",
                                      borderRadius: 3,
                                      fontFamily: "'Inter', sans-serif",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 700,
                                  fontSize: "11px",
                                  color: "#d2b48b",
                                  margin: "0 0 4px 0",
                                  textTransform: "uppercase",
                                }}
                              >
                                Languages & Data
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 6,
                                }}
                              >
                                {[
                                  "Python",
                                  "MySQL",
                                  "MongoDB",
                                  "C/C++",
                                  "Java",
                                ].map((skill) => (
                                  <span
                                    key={skill}
                                    style={{
                                      fontSize: "10px",
                                      color: "#1a1a1a",
                                      backgroundColor: "#d2b48b",
                                      padding: "2px 6px",
                                      borderRadius: 3,
                                      fontFamily: "'Inter', sans-serif",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Logo Loop - Full Width Below */}
                      <div
                        style={{
                          gridColumn: "1 / 3",
                          width: "100%",
                          height: 80,
                          marginTop: 5,
                          marginBottom: 0,
                        }}
                      >
                        <LogoLoop
                          logos={techLogos}
                          speed={80}
                          direction="left"
                          logoHeight={40}
                          gap={30}
                          pauseOnHover
                          scaleOnHover
                          fadeOut
                          fadeOutColor="rgba(30, 29, 28, 1)"
                          ariaLabel="Technology stack"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            filter:
                              "brightness(0) saturate(100%) invert(88%) sepia(23%) saturate(85%) hue-rotate(4deg)",
                          }}
                        />
                      </div>
                    </div>
                  </BorderGlow>
                </div>
              </div>,
              document.body,
            )}

          {/* ── Project Detail Modal (Portal) ── */}
          {showProjectDetail &&
            selectedProject &&
            ReactDOM.createPortal(
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
                onClick={() => setShowProjectDetail(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "relative",
                    width: "98%",
                    maxWidth: 1440,
                    height: "90vh",
                    backgroundColor: "rgba(30, 29, 28, 1)",
                    borderRadius: 24,
                    cursor: "default",
                    animation: "slideUp 0.3s ease-out",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <style>
                    {`
                  @keyframes slideUp {
                    from {
                      transform: translateY(60px);
                      opacity: 0;
                    }
                    to {
                      transform: translateY(0);
                      opacity: 1;
                    }
                  }
                  .project-modal-content::-webkit-scrollbar {
                    width: 0;
                    height: 0;
                    display: none;
                  }
                  .project-modal-content {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}
                  </style>
                  <BorderGlow
                    backgroundColor="rgba(30,29,28,1)"
                    borderRadius={24}
                    glowColor="40 80 80"
                    glowRadius={40}
                    glowIntensity={0.7}
                    edgeSensitivity={30}
                    coneSpread={25}
                    colors={["#C5956E", "#8A7361", "#1A1A1A"]}
                    fillOpacity={0.5}
                    className="border-glow-wrapper"
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setShowProjectDetail(false)}
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "rgba(197, 149, 110, 0.2)",
                        border: "1px solid rgba(197, 149, 110, 0.4)",
                        color: "#d2b48b",
                        fontSize: 24,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s",
                        zIndex: 10,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(197, 149, 110, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(197, 149, 110, 0.2)";
                      }}
                    >
                      ✕
                    </button>

                    {/* Content */}
                    <div
                      className="project-modal-content"
                      style={{
                        padding: "50px 60px 60px 60px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        overflowY: "auto",
                        maxHeight: "calc(100vh - 100px)",
                        gap: "0px",
                      }}
                    >
                      {projects
                        .filter((p) => p.id === selectedProject)
                        .map((project) => (
                          <div key={project.id}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 24,
                                marginBottom: "20px",
                              }}
                            >
                              <h1
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 900,
                                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                                  color: "#d2b48b",
                                  margin: 0,
                                  letterSpacing: "-1px",
                                }}
                              >
                                {project.name}
                              </h1>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  width: "16%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: 10,
                                  background:
                                    "linear-gradient(135deg, #c98a5e 0%, #feddb1 100%)",
                                  border: "none",
                                  color: "#000000",
                                  padding: "16px 10px",
                                  borderRadius: 100,
                                  fontSize: "clamp(0.875rem, 1vw, 1rem)",
                                  fontWeight: 1000,
                                  fontFamily: "'Inter', sans-serif",
                                  textDecoration: "none",
                                  cursor: "pointer",
                                  transition: "all 0.3s",
                                  whiteSpace: "nowrap",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                                onMouseEnter={(e) => {
                                  const el = e.currentTarget as HTMLElement;
                                  el.style.transform = "translateY(-2px)";
                                  el.style.boxShadow =
                                    "0 8px 24px rgba(201, 138, 94, 0.3)";
                                }}
                                onMouseLeave={(e) => {
                                  const el = e.currentTarget as HTMLElement;
                                  el.style.transform = "translateY(0)";
                                  el.style.boxShadow = "none";
                                }}
                              >
                                View Project
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="7 17 17 7"></polyline>
                                  <line x1="17" y1="7" x2="17" y2="17"></line>
                                  <line x1="17" y1="7" x2="7" y2="7"></line>
                                </svg>
                              </a>
                            </div>

                            {/* Tech Stack */}
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 8,
                                marginBottom: 24,
                              }}
                            >
                              {project.tech.map((tech, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    backgroundColor: "rgba(201, 138, 94, 0.2)",
                                    border: "1px solid rgba(201, 138, 94, 0.5)",
                                    color: "#d2b48b",
                                    fontSize: "clamp(0.75rem, 0.9vw, 0.875rem)",
                                    fontWeight: 500,
                                    padding: "6px 14px",
                                    borderRadius: 12,
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <p
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 300,
                                fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                                color: "#d1d4db",
                                lineHeight: "28px",
                                margin: "0 0 20px 0",
                                maxWidth: "1000px",
                              }}
                            >
                              {project.description}
                            </p>

                            <h2
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
                                color: "#d2b48b",
                                margin: "24px 0 12px 0",
                              }}
                            >
                              Case Study
                            </h2>

                            <p
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 300,
                                fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                                color: "#d1d4db",
                                lineHeight: "28px",
                                margin: "0 0 30px 0",
                                maxWidth: "1650px",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {project.caseStudy}
                            </p>

                            {project.architectureImage && (
                              <div
                                style={{
                                  marginTop: "30px",
                                  marginBottom: "30px",
                                  display: "flex",
                                  justifyContent: "center",
                                  position: "relative",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                  onMouseEnter={(e) => {
                                    const img = e.currentTarget.querySelector(
                                      "img",
                                    ) as HTMLImageElement;
                                    const tooltip =
                                      e.currentTarget.querySelector(
                                        "[data-arch-tooltip]",
                                      ) as HTMLElement;
                                    if (img) {
                                      img.style.transform = "scale(1.02)";
                                      img.style.boxShadow =
                                        "0 8px 32px rgba(201, 138, 94, 0.3)";
                                    }
                                    if (tooltip) {
                                      tooltip.style.opacity = "1";
                                      tooltip.style.pointerEvents = "auto";
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    const img = e.currentTarget.querySelector(
                                      "img",
                                    ) as HTMLImageElement;
                                    const tooltip =
                                      e.currentTarget.querySelector(
                                        "[data-arch-tooltip]",
                                      ) as HTMLElement;
                                    if (img) {
                                      img.style.transform = "scale(1)";
                                      img.style.boxShadow = "none";
                                    }
                                    if (tooltip) {
                                      tooltip.style.opacity = "0";
                                      tooltip.style.pointerEvents = "none";
                                    }
                                  }}
                                >
                                  <img
                                    src={project.architectureImage}
                                    alt={`${project.name} Architecture`}
                                    onClick={() =>
                                      setEnlargedArchImage(
                                        project.architectureImage,
                                      )
                                    }
                                    style={{
                                      maxWidth: "2000px",
                                      height: "auto",
                                      maxHeight: "2000px",
                                      borderRadius: "12px",
                                      border:
                                        "1px solid rgba(201, 138, 94, 0.3)",
                                      cursor: "pointer",
                                      transition: "all 0.3s ease",
                                    }}
                                  />
                                  {/* Tooltip */}
                                  <div
                                    data-arch-tooltip
                                    style={{
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                                      color: "#feddb1",
                                      padding: "10px 16px",
                                      borderRadius: "8px",
                                      fontSize: "14px",
                                      fontWeight: 600,
                                      whiteSpace: "nowrap",
                                      opacity: 0,
                                      pointerEvents: "none",
                                      transition: "opacity 0.3s ease",
                                      zIndex: 100,
                                      fontFamily: "'Inter', sans-serif",
                                    }}
                                  >
                                    View Enlarged Image
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </BorderGlow>
                </div>
              </div>,
              document.body,
            )}

          {/* ── Enlarged Architecture Image Modal (Portal) ── */}
          {enlargedArchImage &&
            ReactDOM.createPortal(
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10000,
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                }}
                onClick={() => setEnlargedArchImage(null)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "75vw",
                    height: "75vh",
                    cursor: "default",
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setEnlargedArchImage(null)}
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 149, 110, 0.25)",
                      border: "2px solid rgba(197, 149, 110, 0.5)",
                      color: "#d2b48b",
                      fontSize: 28,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      zIndex: 10001,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(197, 149, 110, 0.4)";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(197, 149, 110, 0.25)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    ✕
                  </button>

                  {/* Enlarged image */}
                  <img
                    src={enlargedArchImage}
                    alt="Architecture Diagram"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "16px",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                      animation: "zoomIn 0.3s ease-out",
                    }}
                  />
                </div>
                <style>
                  {`
                  @keyframes zoomIn {
                    from {
                      opacity: 0;
                      transform: scale(0.9);
                    }
                    to {
                      opacity: 1;
                      transform: scale(1);
                    }
                  }
                `}
                </style>
              </div>,
              document.body,
            )}
        </div>
      </div>

      {/* ── Scrollable Portfolio Section ── */}
      <div
        ref={portfolioSectionRef}
        style={{
          width: "100%",
          minHeight: "auto",
          padding: "60px 40px",
          backgroundColor: "rgba(30, 29, 28, 1)",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          flexShrink: 0,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              background: "linear-gradient(128deg, #c98a5e 0%, #feddb1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 16px 0",
              letterSpacing: "-1px",
            }}
          >
            FEATURED WORK
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              color: "#d1d4db",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              margin: 0,
            }}
          >
            Scroll to explore selected projects
          </p>
        </div>

        {/* Grid Container for Projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 40,
            justifyContent: "center",
            width: "100%",
            maxWidth: 1440,
            margin: "0 auto",
          }}
          className="portfolio-grid"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project.id);
                setShowProjectDetail(true);
              }}
              style={{
                cursor: "pointer",
                height: 420,
                width: "100%",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const tooltip = e.currentTarget.querySelector(
                  "[data-project-tooltip]",
                ) as HTMLElement;
                if (tooltip) tooltip.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.querySelector(
                  "[data-project-tooltip]",
                ) as HTMLElement;
                if (tooltip) tooltip.style.opacity = "0";
              }}
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.name}
                captionText="click for more details"
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <>
                    {/* Dark gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1) 100%)",
                        zIndex: 1,
                        borderRadius: 15,
                      }}
                    />

                    {/* Content Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 30,
                        zIndex: 2,
                        borderRadius: 15,
                        boxSizing: "border-box",
                      }}
                    >
                      {/* Top Section: Project Name and Tech Stack */}
                      <div>
                        {/* Project Name */}
                        <h3
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            fontSize: "32px",
                            color: "#f0cea0",
                            margin: "6px 10px 8px 6px",
                            letterSpacing: "-0.5px",
                          }}
                        >
                          {project.name}
                        </h3>

                        {/* Tech Stack */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 0,
                          }}
                        >
                          {/* Row 1: First 3 */}
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: -10,
                            }}
                          >
                            {(project.displayTech || project.tech)
                              .slice(0, 4)
                              .map((tech, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    margin: 4,
                                    backgroundColor: "#d2b48b",
                                    color: "#000000",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    padding: "6px 12px",
                                    borderRadius: 8,
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>
                          {/* Row 2: Remaining techs (up to 4 more) */}
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: -10,
                            }}
                          >
                            {(project.displayTech || project.tech)
                              .slice(4, 7)
                              .map((tech, idx) => (
                                <span
                                  key={idx + 3}
                                  style={{
                                    margin: 4,
                                    backgroundColor: "#d2b48b",
                                    color: "#000000",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    padding: "6px 12px",
                                    borderRadius: 8,
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section: Description */}
                      <div>
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontSize: "14px",
                            color: "#ffffff",
                            lineHeight: "20px",
                            margin: 8,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Experience Section ── */}
      <div
        ref={experienceSectionRef}
        style={{
          width: "100%",
          minHeight: "auto",
          padding: "60px 40px",
          backgroundColor: "rgba(30, 29, 28, 1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1440,
            margin: "0 auto",
          }}
        >
          {/* Top divider line */}
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(197, 149, 110, 0.2)",
              marginBottom: 40,
            }}
          />

          {/* Content layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 80,
              alignItems: "flex-start",
            }}
          >
            {/* Left column */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#feddb1",
                  margin: "0 0 24px 0",
                }}
              >
                Timeline
              </p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  background:
                    "linear-gradient(128deg, #c98a5e 0%, #feddb1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  margin: "0 0 32px 0",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.1",
                }}
              >
                EXPERIENCE
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                  color: "#f0efee",
                  lineHeight: "1.8",
                  margin: 0,
                  maxWidth: 500,
                }}
              >
                Professional journey focused on AI implementation, cloud
                infrastructure, and human-centric design.
              </p>
            </div>

            {/* Right column - Timeline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 56,
              }}
            >
              {/* Experience 1 */}
              <div
                style={{
                  position: "relative",
                  paddingLeft: 40,
                  borderLeft: "2px solid rgba(197, 149, 110, 0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -8,
                    top: 4,
                    width: 14,
                    height: 14,
                    backgroundColor: "#c5956e",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 4px rgba(197, 149, 110, 0.15)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                    gap: 24,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      color: "#c98a5e",
                      margin: 0,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    MINDENIOUS EDUTECH
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.7rem, 0.9vw, 0.75rem)",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#feddb1",
                      backgroundColor: "#c5956e1f",
                      padding: "10px 16px",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                    }}
                  >
                    Nov '25 — Jan '26
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    margin: "0 0 16px 0",
                  }}
                >
                  Cloud Computing Intern
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                    color: "#d1d4db",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Driving remote cloud architecture initiatives with a
                  specialized focus on Microsoft Azure. Architecting robust
                  networking protocols, managing elastic compute resources, and
                  implementing zero-trust security patterns across distributed
                  storage systems.
                </p>
              </div>

              {/* Experience 2 */}
              <div
                style={{
                  position: "relative",
                  paddingLeft: 40,
                  borderLeft: "2px solid rgba(197, 149, 110, 0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -8,
                    top: 4,
                    width: 14,
                    height: 14,
                    backgroundColor: "rgba(197, 149, 110, 0.5)",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 4px rgba(197, 149, 110, 0.08)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                    gap: 24,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      color: "#c98a5e",
                      margin: 0,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    VISWAM.AI
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.7rem, 0.9vw, 0.75rem)",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#feddb1",
                      backgroundColor: "#c5956e1f",
                      padding: "10px 16px",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                    }}
                  >
                    May '25 — Jul '25
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    margin: "0 0 16px 0",
                  }}
                >
                  Artificial Intelligence Developer Intern
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                    color: "#d1d4db",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Pioneered a specialized Telugu LLM initiative in Hyderabad.
                  Engineered comprehensive NLP inference pipelines and curated
                  high-quality datasets for regional language modeling, pushing
                  the boundaries of localized AI communication.
                </p>
              </div>

              {/* Experience 3 */}
              <div
                style={{
                  position: "relative",
                  paddingLeft: 40,
                  borderLeft: "2px solid rgba(197, 149, 110, 0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -8,
                    top: 4,
                    width: 14,
                    height: 14,
                    backgroundColor: "rgba(197, 149, 110, 0.5)",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 4px rgba(197, 149, 110, 0.08)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                    gap: 24,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      color: "#c98a5e",
                      margin: 0,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    SEPONTY
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.7rem, 0.9vw, 0.75rem)",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#feddb1",
                      backgroundColor: "#c5956e1f",
                      padding: "10px 16px",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                    }}
                  >
                    Feb '24 — Apr '24
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    margin: "0 0 16px 0",
                  }}
                >
                  UI/UX Design Intern
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                    color: "#d1d4db",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Crafted high-fidelity interaction patterns for the Seponty
                  chatbot. Focused on reducing cognitive load through refined
                  conversational UI components and creating intuitive user
                  journeys within the digital ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom divider line */}
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#c5956e33",
              marginTop: 40,
            }}
          />
        </div>
      </div>

      {/* ── Contact Section ── */}
      <div
        ref={contactSectionRef}
        style={{
          width: "100%",
          minHeight: "auto",
          padding: "60px 40px",
          backgroundColor: "rgba(30, 29, 28, 1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1440,
            marginBottom: 10,
          }}
        >
          {/* Contact content layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 80,
              alignItems: "flex-start",
            }}
          >
            {/* Left column - Let's Connect */}
            <div style={{ paddingTop: 40 }}>
              {/* Main Heading */}
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "50px",
                  background:
                    "linear-gradient(128deg, #c98a5e 0%, #feddb1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  margin: "-30px 10px 16px 0",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.1",
                }}
              >
                Let's talk. I'm all ears.
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                  color: "#a8a29e",
                  margin: "0 0 48px 0",
                  lineHeight: "1.6",
                }}
              >
                Got a project in mind? Let's chat about it over virtual coffee.
              </p>

              {/* Let's Connect Section */}
              <div style={{ marginBottom: 48 }}>
                {/* Contact Info Cards */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {/* Email Card */}
                  <button
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      color: "#feddb1",
                      backgroundColor: "#c5956e1f",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      letterSpacing: "0.05em",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      justifyContent: "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "rgba(197, 149, 110, 0.3)";
                      el.style.borderColor = "#c5956e";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#c5956e1f";
                      el.style.borderColor = "rgba(197, 149, 110, 0.2)";
                      el.style.transform = "translateX(0)";
                    }}
                    onClick={() =>
                      (window.location.href = "mailto:narahc2704@gmail.com")
                    }
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    narahc2704@gmail.com
                  </button>

                  {/* Location Card */}
                  <button
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      color: "#feddb1",
                      backgroundColor: "#c5956e1f",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      letterSpacing: "0.05em",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      justifyContent: "flex-start",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "rgba(197, 149, 110, 0.3)";
                      el.style.borderColor = "#c5956e";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#c5956e1f";
                      el.style.borderColor = "rgba(197, 149, 110, 0.2)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Hyderabad, Telangana, India
                  </button>

                  {/* Phone Card */}
                  <button
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      color: "#feddb1",
                      backgroundColor: "#c5956e1f",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      letterSpacing: "0.05em",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      justifyContent: "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "rgba(197, 149, 110, 0.3)";
                      el.style.borderColor = "#c5956e";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#c5956e1f";
                      el.style.borderColor = "rgba(197, 149, 110, 0.2)";
                      el.style.transform = "translateX(0)";
                    }}
                    onClick={() => (window.location.href = "tel:+918074057617")}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    +91 8074057617
                  </button>

                  {/* Download CV Button */}
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/charan_resume.pdf";
                      link.download = "charan_resume.pdf";
                      link.click();
                    }}
                    style={{
                      width: "100%",
                      padding: "16px 24px",
                      background:
                        "linear-gradient(135deg, #c98a5e 0%, #feddb1 100%)",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      border: "none",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 1000,
                      color: "#000000",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      justifyContent: "center",
                      marginTop: 8,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 8px 24px rgba(201, 138, 94, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download CV
                  </button>
                </div>
              </div>

              {/* Find me online section */}
              <div
                style={{
                  marginTop: 48,
                  paddingTop: 32,
                  borderTop: "1px solid rgba(197, 149, 110, 0.2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#f0efee",
                    margin: "0 0 20px 0",
                  }}
                >
                  Find me online
                </p>

                {/* Social Links */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 28,
                  }}
                >
                  {[
                    {
                      label: "GitHub",
                      url: "https://github.com/charan270469",
                      svg: (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      label: "LinkedIn",
                      url: "https://www.linkedin.com/in/sai-charan-77071b281/",
                      svg: (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      ),
                    },
                    {
                      label: "LeetCode",
                      url: "https://leetcode.com/u/charan_2369/",
                      svg: (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        backgroundColor: "#c5956e1f",
                        border: "2px solid rgba(197, 149, 110, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "all 0.3s",
                        cursor: "pointer",
                        color: "#feddb1",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "#c5956e";
                        el.style.borderColor = "#c5956e";
                        el.style.transform = "scale(1.1)";
                        el.style.color = "#1e1d1c";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "#c5956e1f";
                        el.style.borderColor = "rgba(197, 149, 110, 0.3)";
                        el.style.transform = "scale(1)";
                        el.style.color = "#feddb1";
                      }}
                      title={social.label}
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Contact Form */}
            <div
              style={{
                padding: 40,
                backgroundColor: "rgba(40, 39, 38, 0.8)",
                border: "1px solid rgba(197, 149, 110, 0.15)",
                borderRadius: 16,
                backdropFilter: "blur(10px)",
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
                onSubmit={handleFormSubmit}
              >
                {/* Name Field */}
                <div>
                  <label
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 600,
                      color: "#f0efee",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="What should I call you?"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "rgba(50, 49, 48, 0.6)",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      borderRadius: 8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                      color: "#f0efee",
                      transition: "all 0.3s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(60, 59, 58, 0.8)";
                      e.currentTarget.style.borderColor = "#c5956e";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(197, 149, 110, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(50, 49, 48, 0.6)";
                      e.currentTarget.style.borderColor =
                        "rgba(197, 149, 110, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 600,
                      color: "#f0efee",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "rgba(50, 49, 48, 0.6)",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      borderRadius: 8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                      color: "#f0efee",
                      transition: "all 0.3s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(60, 59, 58, 0.8)";
                      e.currentTarget.style.borderColor = "#c5956e";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(197, 149, 110, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(50, 49, 48, 0.6)";
                      e.currentTarget.style.borderColor =
                        "rgba(197, 149, 110, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 600,
                      color: "#f0efee",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "rgba(50, 49, 48, 0.6)",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      borderRadius: 8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                      color: "#f0efee",
                      transition: "all 0.3s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(60, 59, 58, 0.8)";
                      e.currentTarget.style.borderColor = "#c5956e";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(197, 149, 110, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(50, 49, 48, 0.6)";
                      e.currentTarget.style.borderColor =
                        "rgba(197, 149, 110, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 600,
                      color: "#f0efee",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project, or just say hi!"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "rgba(50, 49, 48, 0.6)",
                      border: "1px solid rgba(197, 149, 110, 0.2)",
                      borderRadius: 8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                      color: "#f0efee",
                      transition: "all 0.3s",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(60, 59, 58, 0.8)";
                      e.currentTarget.style.borderColor = "#c5956e";
                      e.currentTarget.style.boxShadow =
                        "0 0 12px rgba(197, 149, 110, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(50, 49, 48, 0.6)";
                      e.currentTarget.style.borderColor =
                        "rgba(197, 149, 110, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Status Message */}
                {formStatus !== "idle" && (
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.75rem, 0.9vw, 0.8125rem)",
                      fontWeight: 500,
                      textAlign: "center",
                      backgroundColor:
                        formStatus === "success"
                          ? "rgba(76, 175, 80, 0.15)"
                          : "rgba(244, 67, 54, 0.15)",
                      color: formStatus === "success" ? "#4caf50" : "#f44336",
                      border:
                        formStatus === "success"
                          ? "1px solid rgba(76, 175, 80, 0.3)"
                          : "1px solid rgba(244, 67, 54, 0.3)",
                    }}
                  >
                    {formMessage}
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={formSubmitting}
                  style={{
                    padding: "14px 24px",
                    background: formSubmitting
                      ? "linear-gradient(135deg, #a0704f 0%, #c9a88a 100%)"
                      : "linear-gradient(135deg, #c98a5e 0%, #feddb1 100%)",
                    border: "none",
                    borderRadius: 8,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.8rem, 1vw, 0.875rem)",
                    fontWeight: 1000,
                    color: "#000000",
                    cursor: formSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginTop: 8,
                    opacity: formSubmitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!formSubmitting) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 8px 24px rgba(201, 138, 94, 0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!formSubmitting) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }
                  }}
                >
                  {formSubmitting ? "⏳ Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
