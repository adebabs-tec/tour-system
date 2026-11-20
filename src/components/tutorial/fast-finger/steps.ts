import type { TutorialFlow } from "../types";

export const dashboardTutorial: TutorialFlow = {
  id: "ff-dashboard",
  title: "Dashboard Overview",
  description: "Get familiar with the Fast Finger command center, real-time metrics, and live gaming sessions.",
  route: "/dashboard/services/games/fast-finger",
  steps: [
    {
      target: '[data-tutorial="dashboard-header"]',
      title: "Welcome to Fast Finger",
      description: "This is your primary overview page.\nHere you can monitor player engagement, live prize pools, and system status at a glance.",
      placement: "bottom",
      icon: "LayoutDashboard",
    },
    {
      target: '[data-tutorial="sidebar-nav"]',
      title: "Main Navigation",
      description: "Quickly jump across game sessions, questions bank, payouts, analytics, and settings.\nYou can access every area of the platform from here.",
      placement: "right",
      icon: "Menu",
    },
    {
      target: '[data-tutorial="metrics-grid"]',
      title: "Key Performance Metrics",
      description: "Track total participants, prize pool turnover, average question completion time, and platform uptime.\nCards update continuously.",
      placement: "bottom",
      icon: "TrendingUp",
    },
    {
      target: '[data-tutorial="topbar-create-quiz"]',
      title: "Instant Quiz Launcher",
      description: "Need to start a match right away?\nClick **Create Quiz** from anywhere in the header to launch a new session in seconds.",
      placement: "bottom",
      icon: "Zap",
    },
    {
      target: '[data-tutorial="recent-games-table"]',
      title: "Active & Recent Sessions",
      description: "Inspect currently running rounds, participant counts, and instant winner verification.",
      placement: "top",
      icon: "Gamepad2",
    },
    {
      target: '[data-tutorial="tutorial-toggle"]',
      title: "Tutorial Management Card",
      description: "You have full control over all guided tours.\nToggle tours globally, replay any specific flow, or reset completed statuses at any time.",
      placement: "left",
      icon: "HelpCircle",
    },
  ],
};

export const createGameTutorial: TutorialFlow = {
  id: "ff-create-game",
  title: "Creating a Game",
  description: "Learn how to configure game modes, question pools, time constraints, and prize tiers.",
  route: "/dashboard/services/games/fast-finger/game-sessions/games",
  steps: [
    {
      target: '[data-tutorial="create-game-header"]',
      title: "Game Session Manager",
      description: "Deploy single-round speed contests or multi-stage tournament events.",
      placement: "bottom",
      icon: "Gamepad2",
    },
    {
      target: '[data-tutorial="game-config-card"]',
      title: "Match Configurations",
      description: "Define session titles, game difficulty, player capacity, and entry fees.\nEnsure your title is catchy for public lobbies.",
      placement: "right",
      icon: "Settings",
    },
    {
      target: '[data-tutorial="question-pool-select"]',
      title: "Question Pool Assignment",
      description: "Select from your Drafts, Verified Live questions, or community public pools.\nRandomized draw ensures fair gameplay.",
      placement: "bottom",
      icon: "Layers",
    },
    {
      target: '[data-tutorial="game-rules-card"]',
      title: "Timer & Prize Structure",
      description: "Set round countdowns, rapid-fire bonus points, and payout percentage curves.",
      placement: "left",
      icon: "Trophy",
    },
  ],
};

export const bankQuestionsTutorial: TutorialFlow = {
  id: "ff-bank-questions",
  title: "Managing Questions",
  description: "Curate, refine, and tag questions before sending them to the live game rotation.",
  route: "/dashboard/services/games/fast-finger/my-questions/draft",
  steps: [
    {
      target: '[data-tutorial="questions-tabs"]',
      title: "Question Bank Categories",
      description: "Switch seamlessly between **Drafts**, **Live**, **Import**, and **Archived** questions.",
      placement: "bottom",
      icon: "BookOpen",
    },
    {
      target: '[data-tutorial="questions-search"]',
      title: "Search & Deep Filter",
      description: "Filter questions by category, difficulty grade, author, and language tags in milliseconds.",
      placement: "bottom",
      icon: "Search",
    },
    {
      target: '[data-tutorial="btn-add-question"]',
      title: "Add New Question",
      description: "Open the single-question authoring modal with rich multiple choice options and explanation fields.",
      placement: "left",
      icon: "Plus",
    },
    {
      target: '[data-tutorial="questions-draft-list"]',
      title: "Drafts Queue",
      description: "Inspect drafted questions, verify correctness, and test sample timer runs.",
      placement: "top",
      icon: "List",
    },
  ],
};

export const rewardPayoutsTutorial: TutorialFlow = {
  id: "ff-reward-payouts",
  title: "Reward Payouts",
  description: "Manage escrow pools, batch approve winner disbursements, and audit claim logs.",
  route: "/dashboard/services/games/fast-finger/reward-payouts",
  steps: [
    {
      target: '[data-tutorial="payouts-overview"]',
      title: "Escrow & Payout Summary",
      description: "View current total prize allocations, verified winners awaiting release, and settled payouts.",
      placement: "bottom",
      icon: "Wallet",
    },
    {
      target: '[data-tutorial="pending-payouts-table"]',
      title: "Pending Verifications",
      description: "Review automated anti-cheat flags, player wallet destinations, and victory margins.",
      placement: "top",
      icon: "Table",
    },
    {
      target: '[data-tutorial="btn-batch-payout"]',
      title: "One-Click Batch Release",
      description: "Sign and broadcast all cleared payouts to winners instantly.",
      placement: "left",
      icon: "Zap",
    },
  ],
};

export const analyticsTutorial: TutorialFlow = {
  id: "ff-analytics",
  title: "Analytics Hub",
  description: "Explore player retention, completion rates, high-score distributions, and drop-off rates.",
  route: "/dashboard/services/games/fast-finger/analytics",
  steps: [
    {
      target: '[data-tutorial="analytics-chart"]',
      title: "Traffic & Participation Curves",
      description: "Interactive visual analytics highlighting hourly peaks, active concurrency, and prize redemption trends.",
      placement: "bottom",
      icon: "BarChart3",
    },
    {
      target: '[data-tutorial="engagement-stats"]',
      title: "Player Engagement Score",
      description: "Compare return visitor loyalty and quiz completion rates versus platform averages.",
      placement: "left",
      icon: "TrendingUp",
    },
    {
      target: '[data-tutorial="dropoff-breakdown"]',
      title: "Question Difficulty & Drop-off",
      description: "Identify tricky or ambiguous questions that have unusually high timeout or wrong-answer rates.",
      placement: "top",
      icon: "PieChart",
    },
  ],
};

export const withdrawEarningsTutorial: TutorialFlow = {
  id: "ff-withdraw-earnings",
  title: "Withdraw Earnings",
  description: "Initiate platform commission withdrawals and manage bank or crypto settlement methods.",
  route: "/dashboard/services/games/fast-finger/withdraw-earnings",
  steps: [
    {
      target: '[data-tutorial="wallet-balance-card"]',
      title: "Net Settlement Balance",
      description: "Check your settled earnings ready for withdrawal, minus fees and security reserve.",
      placement: "bottom",
      icon: "Wallet",
    },
    {
      target: '[data-tutorial="withdrawal-form"]',
      title: "Withdrawal Destination",
      description: "Select bank transfer, ACH, or USDC settlement and input your desired payout amount.",
      placement: "right",
      icon: "FileText",
    },
    {
      target: '[data-tutorial="withdrawal-history"]',
      title: "Transfer Audit Trail",
      description: "Check confirmation hashes, transaction timestamps, and settlement status for each transfer.",
      placement: "top",
      icon: "Table",
    },
  ],
};

export const partnerEventsTutorial: TutorialFlow = {
  id: "ff-game-events",
  title: "Partner Events",
  description: "Coordinate branded partner tournaments, sponsored reward boosts, and special event rules.",
  route: "/dashboard/services/games/fast-finger/game-sessions/events",
  steps: [
    {
      target: '[data-tutorial="partner-banner"]',
      title: "Featured Partnership Spotlight",
      description: "Check active partner branding assets, co-branded banners, and custom event landing links.",
      placement: "bottom",
      icon: "Sparkles",
    },
    {
      target: '[data-tutorial="events-schedule"]',
      title: "Upcoming Event Calendar",
      description: "Schedule tournament start gates and automated registration announcements.",
      placement: "top",
      icon: "CalendarDays",
    },
    {
      target: '[data-tutorial="sponsor-rewards"]',
      title: "Sponsor Prize Matching",
      description: "View boosted rewards contributed directly by verified sponsor partners.",
      placement: "left",
      icon: "Trophy",
    },
  ],
};

export const importQuestionsTutorial: TutorialFlow = {
  id: "ff-import-questions",
  title: "Import Questions",
  description: "Bulk upload hundreds of questions via CSV, Excel, or JSON format with instant validation.",
  route: "/dashboard/services/games/fast-finger/my-questions/import",
  steps: [
    {
      target: '[data-tutorial="import-dropzone"]',
      title: "File Uploader",
      description: "Drag and drop your questions spreadsheet. Supports `.csv`, `.xlsx`, and `.json` formats.",
      placement: "bottom",
      icon: "Upload",
    },
    {
      target: '[data-tutorial="btn-download-template"]',
      title: "Template Guides",
      description: "Download the pre-formatted schema template to ensure zero syntax or column errors.",
      placement: "left",
      icon: "FileText",
    },
    {
      target: '[data-tutorial="import-preview-table"]',
      title: "Live Parsing Preview",
      description: "Inspect parsed questions before committing them to your database draft folder.",
      placement: "top",
      icon: "Table",
    },
  ],
};

export const browsePublicTutorial: TutorialFlow = {
  id: "ff-browse-public",
  title: "Browse Public Questions",
  description: "Discover community-contributed questions, verified trivia packs, and trending categories.",
  route: "/dashboard/services/games/fast-finger/my-questions/browse-public",
  steps: [
    {
      target: '[data-tutorial="community-categories"]',
      title: "Trending Categories",
      description: "Explore curated packs in Science, History, Pop Culture, Coding, and Sports.",
      placement: "bottom",
      icon: "Globe",
    },
    {
      target: '[data-tutorial="public-questions-list"]',
      title: "Community Repository",
      description: "Browse high-rated questions submitted and vetted by global educators and trivia masters.",
      placement: "top",
      icon: "BookOpen",
    },
    {
      target: '[data-tutorial="btn-fork-question"]',
      title: "Fork to Your Bank",
      description: "Click Fork to copy questions into your own draft repository for customization.",
      placement: "left",
      icon: "Copy",
    },
  ],
};

export const bulkReleaseTutorial: TutorialFlow = {
  id: "ff-bulk-release",
  title: "Bulk Release",
  description: "Promote batches of vetted questions directly into the live gameplay circulation.",
  route: "/dashboard/services/games/fast-finger/my-questions/bulk-release",
  steps: [
    {
      target: '[data-tutorial="staging-queue"]',
      title: "Staging Pipeline",
      description: "Review questions flagged as ready for release.\nQuestions pass grammar and novelty filters.",
      placement: "bottom",
      icon: "Layers",
    },
    {
      target: '[data-tutorial="qc-status"]',
      title: "Quality Control Checklist",
      description: "Ensure all questions meet answer ambiguity standards and timer recommendations.",
      placement: "right",
      icon: "Info",
    },
    {
      target: '[data-tutorial="btn-publish-all"]',
      title: "Publish to Live Pool",
      description: "Promote all selected questions to live games with zero platform downtime.",
      placement: "left",
      icon: "Sparkles",
    },
  ],
};

export const socialMediaTutorial: TutorialFlow = {
  id: "ff-social-media",
  title: "Social Media Settings",
  description: "Connect X, Discord, and Telegram for automated winner shout-outs and game invitations.",
  route: "/dashboard/services/games/fast-finger/settings/social-media",
  steps: [
    {
      target: '[data-tutorial="social-accounts"]',
      title: "Linked Channels",
      description: "Connect your official game channels to broadcast match countdowns.",
      placement: "bottom",
      icon: "Share2",
    },
    {
      target: '[data-tutorial="social-announcements"]',
      title: "Automated Winner Broadcasts",
      description: "Configure dynamic templates that post champion handles and prize payouts right after game close.",
      placement: "right",
      icon: "Settings",
    },
    {
      target: '[data-tutorial="share-links-card"]',
      title: "Viral Game Invites",
      description: "Generate customized deep links with custom social preview metadata.",
      placement: "left",
      icon: "Link",
    },
  ],
};

export const liveQuestionsTutorial: TutorialFlow = {
  id: "ff-live-questions",
  title: "Live Questions",
  description: "Real-time monitoring of questions currently being served in active player sessions.",
  route: "/dashboard/services/games/fast-finger/my-questions/live",
  steps: [
    {
      target: '[data-tutorial="live-monitor"]',
      title: "Real-time Feed",
      description: "Watch live question delivery, answer split distribution, and average response times.",
      placement: "bottom",
      icon: "Eye",
    },
    {
      target: '[data-tutorial="active-stats"]',
      title: "Live Player Accuracy",
      description: "Inspect correct answer ratios in real time across concurrent rooms.",
      placement: "right",
      icon: "BarChart3",
    },
    {
      target: '[data-tutorial="btn-emergency-pause"]',
      title: "Emergency Intercept",
      description: "Notice a typo or disputed question?\nPull it instantly from active circulation without disrupting ongoing matches.",
      placement: "left",
      icon: "Zap",
    },
  ],
};

export const archivedQuestionsTutorial: TutorialFlow = {
  id: "ff-archived-questions",
  title: "Archived Questions",
  description: "Access retired or seasonal questions with one-click restore or permanent cleanup.",
  route: "/dashboard/services/games/fast-finger/my-questions/archived",
  steps: [
    {
      target: '[data-tutorial="archived-table"]',
      title: "Cold Storage Archive",
      description: "Questions retired after seasonal tournaments or high exposure limits are stored safely here.",
      placement: "bottom",
      icon: "Archive",
    },
    {
      target: '[data-tutorial="btn-restore-archive"]',
      title: "Restore to Drafts",
      description: "Bring questions back into active drafts whenever you wish to refresh and reuse them.",
      placement: "left",
      icon: "Plus",
    },
    {
      target: '[data-tutorial="btn-purge-archive"]',
      title: "Permanent Removal",
      description: "Safely delete obsolete questions to keep your database lean and clean.",
      placement: "left",
      icon: "FileText",
    },
  ],
};

export const quizzesTutorial: TutorialFlow = {
  id: "ff-quizzes",
  title: "Quizzes",
  description: "Explore multi-round quiz categories, timed challenges, and player leaderboards.",
  route: "/dashboard/services/games/fast-finger/game-sessions/quizzes",
  steps: [
    {
      target: '[data-tutorial="quiz-catalog"]',
      title: "Quiz Challenge Catalog",
      description: "Browse categorized quizzes curated for fast finger tournaments.",
      placement: "bottom",
      icon: "Gamepad2",
    },
    {
      target: '[data-tutorial="quiz-tiers"]',
      title: "Difficulty Tiers",
      description: "Filter challenges from Novice sprints to Grandmaster lightning rounds.",
      placement: "right",
      icon: "Filter",
    },
    {
      target: '[data-tutorial="btn-launch-quiz"]',
      title: "Launch Arena",
      description: "Spin up a new quiz arena and invite players with a single tap.",
      placement: "left",
      icon: "Zap",
    },
  ],
};

export const ALL_TUTORIALS: TutorialFlow[] = [
  dashboardTutorial,
  createGameTutorial,
  bankQuestionsTutorial,
  rewardPayoutsTutorial,
  analyticsTutorial,
  withdrawEarningsTutorial,
  partnerEventsTutorial,
  importQuestionsTutorial,
  browsePublicTutorial,
  bulkReleaseTutorial,
  socialMediaTutorial,
  liveQuestionsTutorial,
  archivedQuestionsTutorial,
  quizzesTutorial,
];

export const TUTORIAL_MAP: Record<string, TutorialFlow> = Object.fromEntries(
  ALL_TUTORIALS.map((t) => [t.id, t])
);

export function getTutorialsForRoute(pathname: string): TutorialFlow[] {
  // Normalize pathname: remove trailing slash if present (except root)
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return ALL_TUTORIALS.filter((t) => {
    const tRoute = t.route.length > 1 && t.route.endsWith("/") ? t.route.slice(0, -1) : t.route;
    return tRoute === normalized;
  });
}
