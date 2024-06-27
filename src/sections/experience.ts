export default async function component(
  doc: PDFKit.PDFDocument,
  {
    items,
  }: {
    items: Array<{
      position: string;
      company: string;
      location?: string;
      dates: string;
      responsibilities: string[];
    }>;
  }
) {
  doc.fontSize(16).text("Experience");
  doc.moveDown();

  for (const item of items) {
    const { position, company, location, dates, responsibilities } = item;

    doc
      .fontSize(14)
      .text(position, { continued: true })
      .fontSize(12)
      .text(`${company}${location ? ` • ${location}` : ""}`, {
        align: "right",
      });
    doc.fontSize(10).text(dates);
    doc.moveDown();
    for (const responsibility of responsibilities) {
      doc.text(responsibility);
    }
    doc.moveDown();
  }
  return;
}
