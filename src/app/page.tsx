import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/services/games/fast-finger");
}
