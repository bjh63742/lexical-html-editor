"use client";

import HtmlEditor from "./lexicalHtmlEditor/HtmlEditor";

export default function Home() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {" "}
        lexical html editor
      </div>
      <HtmlEditor />
    </div>
  );
}
