export default async function component(
  doc: PDFKit.PDFDocument,
  {
    items,
  }: {
    items: Array<{
      degree: string;
      institution: string;
      location: string;
      graduationDate: string;
    }>;
  }
) {
  doc.fontSize(16).text("Education");
  doc.moveDown();

  for (const item of items) {
    const { degree, institution, location, graduationDate } = item;

    doc
      .fontSize(14)
      .text(degree, { continued: true })
      .fontSize(12)
      .text(`${institution} • ${location}`, { align: "right" });
    doc.fontSize(10).text(graduationDate);
    doc.moveDown();
  }
  return;
}
