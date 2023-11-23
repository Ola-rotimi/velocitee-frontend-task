import { useRouter } from "next/navigation";

export default function Edit() {
  const router = useRouter();
  return router.push("/");
}
