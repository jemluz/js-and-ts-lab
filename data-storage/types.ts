// Types are aliases and can express unions and intersections.
// Prefer type for unions or more complex composition.

// Basic alias for an object shape.
type Item = {
  readonly sku: string;
  name: string;
  price?: number;
};

// Union types allow multiple possible shapes or primitives.
type ItemId = number | string;

// Intersection types combine multiple shapes into one.
type AuditedItem = Item & {
  createdAt: Date;
};

function formatProduct(product: Item, id: ItemId) {
  return (product.name + " (" + id + ")").toUpperCase();
}

const audited: AuditedItem = {
  sku: "SKU-2",
  name: "Notebook",
  createdAt: new Date(),
};

formatProduct(audited, 2);
