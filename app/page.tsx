import Image from "next/image";
import { redirect } from "next/navigation";
import Landing from "./components/Landing";
import Dashboard from "./dashboard/page";

export default function Home() {
  
  return (
<>
   <Landing />
</>
  );
}
