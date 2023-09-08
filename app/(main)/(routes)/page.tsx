import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <h1>Discord Clone</h1>
      <UserButton />
      <ModeToggle />
    </div>
  );
}
