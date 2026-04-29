// ============================================================
//  KRISH KA DATA FILE — SIRF YE FILE EDIT KARNA HAI KABHI BHI
//  Index.html mat chhona — ye file hi sab kuch control karti hai
// ============================================================

const PORTFOLIO_DATA = {

  // ── BASIC INFO ──────────────────────────────────────────────
  name: "Krish Kondabatni",
  title: "Data Analyst",
  tagline: "Turning raw data into real decisions.",
  location: "Bengaluru, India",
  available: true, // true = "Open to work" badge dikhega, false = hat jaega

  // ── CONTACT ─────────────────────────────────────────────────
  contact: {
    email: "krishkonda89@gmail.com",
    phone: "+91 7984921563",
    linkedin: "https://linkedin.com/in/krishkonda",
    github: "https://github.com/crossboww",
  },

  // ── STATS (hero ke neeche dikhte hain) ──────────────────────
  stats: [
    { number: "1+",  label: "Years Experience" },
    { number: "15+", label: "Datasets / Week"  },
    { number: "30%", label: "Processing Time Saved" },
    { number: "20+", label: "SQL Queries Optimized" },
  ],

  // ── SKILLS ──────────────────────────────────────────────────
  // Naya skill add karna ho: bas "New Skill" likho array mein
  skills: [
    {
      category: "Programming",
      items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      category: "Data & Analytics",
      items: ["SQL", "Advanced Excel", "Power BI", "EDA", "ETL", "Data Pipelines"],
    },
    {
      category: "ML & AI",
      items: ["Scikit-learn", "NLP", "NLTK", "SpaCy", "LLM Fundamentals"],
    },
    {
      category: "Databases & DevOps",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS EC2"],
    },
    // NAYI SKILL CATEGORY ADD KARNE KE LIYE — COPY PASTE KARO YE:
    // {
    //   category: "New Category",
    //   items: ["Skill 1", "Skill 2", "Skill 3"],
    // },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────
  // Nayi job add karne ke liye — copy paste karo neeche wala block
  experience: [
    {
      role: "Data Analyst",
      company: "Aviasole Technologies",
      location: "Vadodara, Gujarat",
      duration: "May 2024 – March 2025",
      points: [
        "Analyzed and validated 15+ datasets per week from internal portals and backend pipelines",
        "Automated data cleaning workflows using Python (Pandas), reducing processing time by ~30%",
        "Wrote and optimized 20+ advanced SQL queries for reporting and business analysis",
        "Coordinated with cross-functional teams (backend, operations, analytics) for pipeline maintenance",
      ],
    },
    // NAYI JOB ADD KARNE KE LIYE — COPY PASTE KARO YE:
    // {
    //   role: "Your New Role",
    //   company: "Company Name",
    //   location: "City, State",
    //   duration: "Month Year – Month Year",
    //   points: [
    //     "Kya kiya point 1",
    //     "Kya kiya point 2",
    //   ],
    // },
  ],

  // ── CERTIFICATIONS ──────────────────────────────────────────
  // Nayi cert add karne ke liye — copy paste karo neeche wala block
  certifications: [
    {
      name: "Data Science Certification",
      issuer: "Besant Technologies",
      location: "Marathahalli, Bangalore",
      duration: "Aug 2024 – March 2025",
      description: "9-month intensive training covering Python, SQL, Excel, Power BI — hands-on focus on data cleaning, EDA, statistical analysis, and dashboard reporting.",
    },
    // NAYI CERT ADD KARNE KE LIYE — COPY PASTE KARO YE:
    // {
    //   name: "Cert Name",
    //   issuer: "Platform (Coursera / Udemy / Google etc.)",
    //   location: "Online",
    //   duration: "Month Year",
    //   description: "Short description.",
    // },
  ],

  // ── PROJECTS ────────────────────────────────────────────────
  // Naya project add karne ke liye — copy paste karo neeche wala block
  projects: [
    {
      emoji: "📉",
      name: "Customer Churn Analysis",
      description: "Comprehensive EDA on 7,000+ customer records to identify key churn predictors — payment method, contract type, and tenure — using Python visualization libraries.",
      tech: ["Python", "Pandas", "Seaborn", "EDA"],
      link: "https://github.com/crossboww", // apna actual repo link daalo
    },
    {
      emoji: "☕",
      name: "Coffee Shop Sales Analysis",
      description: "SQL-driven analytics with an interactive Power BI dashboard providing real-time insights into monthly sales, order volumes, and product performance.",
      tech: ["SQL", "Power BI", "Dashboard", "Analytics"],
      link: "https://github.com/crossboww",
    },
    // NAYA PROJECT ADD KARNE KE LIYE — COPY PASTE KARO YE:
    // {
    //   emoji: "🔥",          // koi bhi emoji daalo
    //   name: "Project Name",
    //   description: "Kya banaya short mein.",
    //   tech: ["Tech1", "Tech2", "Tech3"],
    //   link: "https://github.com/crossboww/repo-name",
    // },
  ],

  // ── EDUCATION ───────────────────────────────────────────────
  education: {
    degree: "B.E. – Information Science & Engineering",
    college: "Brindavan College of Engineering (VTU)",
    duration: "Dec 2020 – July 2024",
    cgpa: "7.8",
  },

};
