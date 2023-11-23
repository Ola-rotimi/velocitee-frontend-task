import { useRouter } from "next/router";

export default function Edit() {
  const router = useRouter();
  return router.push("/");
}
