import Image from "next/image";
import SnakeGame from "./components/SnakeGame";

export default function Home() {
  const numWood = 18;

  return (
    <div>
      <SnakeGame />
    </div>
  );
}
