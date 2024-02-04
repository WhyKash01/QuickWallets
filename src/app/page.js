import Image from "next/image";
import Header from "@/components/Header";
import AccountBalance from "@/components/AccountBalance";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <AccountBalance></AccountBalance>
    </div>
  );
}
