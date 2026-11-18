export const projects = [
  {
    title: "Bearcat Hockey Analytics",
    description:
      "Opponent scouting, special-teams analysis and a rebuilt national ranking for UC club hockey, built from the ACHA's public league data and approved by the league. A penalty simulator derives power-play time the league never publishes, the rebuilt ranking matches the official one for 71 of 81 teams (all within 2 places), and the site updates and deploys itself every morning. Live site available on request.",
    tech: ["Python", "PostgreSQL", "SQLAlchemy", "FastAPI", "React", "TypeScript", "Vercel"],
    github: "https://github.com/roshet/bearcat-hockey-analytics",
    featured: true,
  },
  {
    title: "AstroGuide",
    description:
      "AI-powered mobile astronomy assistant with a FastAPI backend and React Native (Expo) frontend. Deployed on Railway with OpenAI API integration for beginner and advanced explanation modes.",
    tech: ["Python", "FastAPI", "React Native", "Expo", "OpenAI API", "Railway"],
    github: "https://github.com/roshet/astroguide",
    featured: true,
  },
  {
    title: "Crave",
    description:
      "Full-stack nutrition scoring app that ranks fast-food items by goal (high protein, low sugar, low fat) within a calorie limit. Built with React + FastAPI, deployed on Vercel and Render.",
    tech: ["React", "FastAPI", "Python", "Vercel", "Render"],
    github: "https://github.com/roshet/Crave",
    featured: false,
  },
  {
    title: "NFL QB Clutch Factor Analyzer",
    description:
      "Statistical pipeline that quantifies quarterback performance in high-pressure situations using multi-season NFL play-by-play data. Computes clutch and consistency metrics with Python and Pandas.",
    tech: ["Python", "pandas", "NumPy"],
    github: "https://github.com/roshet/nfl-qb-clutch-factor-analysis",
    featured: false,
  },
  {
    title: "Video Game Recommendation System",
    description:
      "Explainable content-based recommender that suggests similar games using TF-IDF vectorization and cosine similarity, with human-readable explanations for each recommendation.",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit"],
    github: "https://github.com/roshet/video-game-recommender",
    featured: false,
  },
];