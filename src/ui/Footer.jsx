import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 mx-auto text-xs text-sky-100">
      <p className="text-justify">
        Crafted with ❤️ by Sorena. Connect with me on{" "}
        <a
          className="text-base font-semibold text-blue-400"
          href="https://www.linkedin.com/in/sorenasalehi/"
        >
          Linkedln
        </a>{" "}
        or check out my work on{" "}
        <a
          className="text-base font-semibold text-blue-400"
          href="https://github.com/SorenaSalehi"
        >
          Github
        </a>
        .
      </p>
    </footer>
  );
}
