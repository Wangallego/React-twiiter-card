import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <>
      <TwitterFollowCard
        formatUserName = {formatUserName}
        isFollowing 
        userName="midudev"
      >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing = {false}
        userName="elonmusk"
      >
        Elon musk
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing = {false}
        userName="Wangallego_"
      >
        Wangalleg0
      </TwitterFollowCard>
    </>
  );
}
