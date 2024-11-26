export const normalizeString = (string: string): string =>
  string
    .normalize("NFD")
    .replace(/[\u0142]/g, "l") // Handle ł/Ł specifically
    .replace(/[\u0105]/g, "a") // Handle ą/Ą
    .replace(/[\u0119]/g, "e") // Handle ę/Ę
    .replace(/[\u00F3]/g, "o") // Handle ó/Ó
    .replace(/[\u015B]/g, "s") // Handle ś/Ś
    .replace(/[\u017C\u017A]/g, "z") // Handle ż/Ż and ź/Ź
    .replace(/[\u0107]/g, "c") // Handle ć/Ć
    .replace(/[\u0144]/g, "n") // Handle ń/Ń
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();
