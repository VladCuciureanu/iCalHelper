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
      <h3>You can&apos;t import .ics files into the iOS Calendar app</h3>
      <ul>
        <li>You can&apos;t save it to iCloud files and open it</li>
        <li>You can&apos;t use the share button</li>
        <li>You can&apos;t open the Calendar app and import it from there</li>
        <li>
          You can only import .ics files if you receive them from Apple&apos;s
          native iOS Mail app
        </li>
      </ul>
      <p>
        But you <i>can</i> open it via Safari. <br /> This tool loads an .ics
        file and opens it in-browser. All client-side.
      </p>
      <p></p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <label style={{ fontWeight: 600 }}>Select .ics file:</label>
        <input
          type="file"
          accept=".ics"
          ref={fileInputRef as LegacyRef<HTMLInputElement>}
        />
        <button
          type="submit"
          disabled={fileInputRef.current?.files?.length === 0}
          style={{ width: "100px" }}
        >
          Open
        </button>
      </form>
    </main>
  );
}
