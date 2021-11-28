const fs = require("fs");
const PDFDocument = require("pdfkit");

function createInvoice(invoice_latest,  path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice_latest);
  generateInvoiceTable(doc, invoice_latest);
  generateFooter(doc, invoice_latest);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}


function generateHeader(doc) {
  doc
    .image("logo.png", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("IB-ASCM", 110, 57)
    .fontSize(10)
    .text("IB-ASCM", 200, 50, { align: "right" })
    .text("123 Main Street", 200, 65, { align: "right" })
    .text("New York, NY, 10025", 200, 80, { align: "right" })
    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Invoice", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.Invoice_no, 150, customerInformationTop)
    .font("Helvetica")
    .text("Invoice Date:", 50, customerInformationTop + 15)
    .text(invoice.Invoice_date, 150, customerInformationTop + 15)

    .font("Helvetica-Bold")
    .text("IB-ASCM Inventory Dept", 300, customerInformationTop)
    .font("Helvetica")
    .text(
      "Chennai" +
        ", " +
        "Tamil Nadu" +
        ", " +
        "India",
      300,
      customerInformationTop + 15
    )
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
  let i=0;
  const invoiceTableTop = 330;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Request No",
    "Raw Material",
    "Qty",
    "Digital Signature",
    "Supplier",
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  const position = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    position,
    invoice.Req_no,
    invoice.Raw_mat_type,
    invoice.Qty_req,
    invoice.Supplier,
  );

  generateHr(doc, position + 20);
  doc.font("Helvetica");
}

function generateFooter(doc, invoice) {
  doc
    .fontSize(12)
    .text(
      "The authenticity of this document has been verified using SHA-256 hash: "  + invoice.Hash_val,
      50,
      475,
      { align: "center", width: 500 }
    );
  doc
    .fontSize(10)
    .text(
      "This invoice has been issued by the inventory dept. Thank You.",
      50,
      780,
      { align: "center", width: 500 }
    );
}

function generateTableRow(
  doc,
  y,
  reqno,
  raw_material,
  qty_req,
  supplier
) {
  doc
    .fontSize(10)
    .text(reqno, 50, y)
    .text(raw_material, 150, y)
    .text(qty_req, 250, y, { width: 90, align: "right" })
    .text(supplier, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  createInvoice
};
