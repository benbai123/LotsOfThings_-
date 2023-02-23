
const scrolls = aDocument.map(record => new Scroll(
  record.id,
  LocalDate.parse(record.lastCleaned),
  record.catalogData.id,
  catalog
));
