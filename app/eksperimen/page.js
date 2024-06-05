"use client";

import { useRouter } from "next/navigation";

const Eksperimen = () => {
  const router = useRouter();
  return (
    <div>
      <h1>ALL EKSPERIMEN IN HERE</h1>
      <button onClick={() => router.push("/lala")}>Click Me</button>
    </div>
  );
};

export default Eksperimen;
