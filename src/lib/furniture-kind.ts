export type ExactFurnitureKind =
  | "bed"
  | "cabinet"
  | "chair"
  | "coffee-table"
  | "desk"
  | "dining-table"
  | "generic"
  | "sofa"
  | "wardrobe";

type FurnitureKindInput = {
  name: string;
  category: string;
};

function normalized(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function containsAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

/**
 * Identifies the product from its actual name first, then uses the catalogue
 * category as a fallback. Some imported Maisons du Monde products have a broad
 * or incorrect category (for example, a desk listed under "Cassettiere").
 */
export function getExactFurnitureKind(item: FurnitureKindInput): ExactFurnitureKind {
  const name = normalized(item.name);
  const category = normalized(item.category);

  // Seating has priority over "scrivania": office-chair names contain both.
  if (
    category === "sedie" ||
    category === "poltrone" ||
    containsAny(name, ["sedia", "sedie", "poltrona", "poltroncina", "sgabello"])
  ) {
    return "chair";
  }

  // A sofa bed is a sofa, while loft beds may also mention a desk.
  if (category === "divani" || name.includes("divano")) return "sofa";
  if (category === "letti" || name.includes("letto")) return "bed";

  // Product name wins over an unreliable imported category.
  if (containsAny(name, ["scrivania", "bureau", "desk"]) || category === "scrivanie") {
    return "desk";
  }

  if (
    category === "comodini" ||
    containsAny(name, ["comodino", "mobiletto", "cassettiera", "credenza", "madia"])
  ) {
    return "cabinet";
  }

  if (
    category === "tavolini" ||
    category === "tavolini da salotto" ||
    containsAny(name, ["tavolino", "tavolini"])
  ) {
    return "coffee-table";
  }

  if (category === "tavoli da pranzo" || containsAny(name, ["tavolo", "console"])) {
    return "dining-table";
  }

  if (
    category === "cassettiere" ||
    category === "credenze" ||
    category === "mobili tv" ||
    containsAny(name, ["cassetti", "mobile tv"])
  ) {
    return "cabinet";
  }

  if (
    category === "armadi" ||
    category === "librerie" ||
    containsAny(name, ["armadio", "guardaroba", "libreria"])
  ) {
    return "wardrobe";
  }

  return "generic";
}
