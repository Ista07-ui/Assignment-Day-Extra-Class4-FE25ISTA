import Link from "next/dist/client/link";
import ButtonAction from "./_components/button-action";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      Contact Page
      <ButtonAction />
      <Link href="/contact/1">Go to Contact 1</Link>
    </div>
  );
  // Server component
}
