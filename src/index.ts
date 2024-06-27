import fs from "node:fs";
import PDFDocument from "pdfkit";

import header from "./sections/header";
import experience from "./sections/experience";
import skills from "./sections/skills";
import education from "./sections/education";

import headerData from "./data/profile.json";

const doc = new PDFDocument({ size: "A4", margin: 50 });

doc.pipe(fs.createWriteStream("resume.pdf"));

header(doc, headerData);
experience(doc, {
  items: await import("./data/experiences.json").then((m) => m.default),
});
skills(doc, {
  items: await import("./data/skills.json").then((m) => m.default),
});
education(doc, {
  items: await import("./data/education.json").then((m) => m.default),
});

doc.end();
console.log("PDF Created");
