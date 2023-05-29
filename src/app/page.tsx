"use client";
import { useRouter } from "next/navigation";
import { FormEvent, LegacyRef, useRef } from "react";

export default function Home() {
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement>();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const file = fileInputRef.current?.files?.item(0);
    if (file) {
      router.push(URL.createObjectURL(file));
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            accept=".ics"
            ref={fileInputRef as LegacyRef<HTMLInputElement>}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
