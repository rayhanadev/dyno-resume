export default async function component(
  doc: PDFKit.PDFDocument,
  {
    data,
  }: {
    data: {
      name: string;
      email: string;
      phone: string;
      summary: string;
      location: string;
    };
  }
) {
  const { name, email, phone, summary, location } = data;

  doc.fontSize(20).text(name, {
    align: "center",
  });
  doc.fontSize(12).text(`${location}\n${email}\n${phone}\n`, {
    align: "center",
  });
  doc.moveDown();
  doc.fontSize(12).text(summary, { align: "center" });
  doc.moveDown();
  return;
}
