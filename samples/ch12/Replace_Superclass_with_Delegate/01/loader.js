
const scrolls = aDocument.map(record => new Scroll(
  record.id,
  record.catalogData.title,
  record.catalogData.tags,
  LocalDate.parse(record.lastCleaned)
));
