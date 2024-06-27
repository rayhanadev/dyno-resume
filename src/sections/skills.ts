export default async function component(
  doc: PDFKit.PDFDocument,
  {
    items,
  }: {
    items: string[];
  }
) {
  doc.fontSize(16).text("Skills");
  doc.moveDown();

  doc.fontSize(10).text(items.join(", "));
  doc.moveDown();
  return;
}
