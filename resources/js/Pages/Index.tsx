import Default from "@/Layouts/Default";
import { User } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ user }: { user: User }) {
  return (
    <Default>
      <Head title="Home"></Head>

      <h1>Home</h1>
    </Default>
  )
}