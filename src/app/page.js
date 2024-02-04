import Image from "next/image";
import Header from "@/components/Header";
import AccountBalance from "@/components/AccountBalance";
import Users from "@/components/Users";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <AccountBalance></AccountBalance>
      <Users/>
    </div>
  );
}
