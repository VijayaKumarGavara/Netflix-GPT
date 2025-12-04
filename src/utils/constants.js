export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWMzMjQwMGFmMDdhMjJjY2U5MTg4NzM0ZDMwNWFmZCIsIm5iZiI6MTc2NDQyOTE0MS4yMDQsInN1YiI6IjY5MmIwZDU1OWY5MTgwNjA2ZmI4ZjA3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SUta9Q-ENWfi4P82zFjh-ohAFE0fnyFQQPOssO3RDbQ",
  },
};

export const Image_Url = "https://image.tmdb.org/t/p/w500";

export const Netflix_Logo_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg";

export const placeholdersList = [
  "What would you like to watch today?",
  "Search anything… movies, actors, genres, moods…",
  "Looking for something thrilling? Just ask.",
  "Let me find something for you…",
  "Ask me anything… I'm your movie assistant.",
];

export const OPEN_AI_KEY=process.env.REACT_APP_OPEN_AI_KEY;

export const GEMINI_AI_KEY=process.env.REACT_APP_GEMINI_AI_KEY;