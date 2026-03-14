"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full mx-auto">
      <GitHubCalendar
        username="immohitsen"
        colorScheme={theme === "light" ? "light" : "dark"}
        fontSize={12}
        blockSize={12}
        theme={{
          dark: ["#0d1117", "#3ae374", "#27ae60", "#239a3b", "#196127"],
          light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
        }}
      />
    </div>
  );
};

export default GitHubContributions;
