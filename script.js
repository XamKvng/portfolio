const productCategories = [
  {
    title: "Wigs",
    items: [
      "Pixie Curly Wig",
      "Bob Human Hair Wig",
      "Frontal Body Wave Wig",
      "Deep Wave Closure Wig",
      "Highlight Blonde Wig"
    ]
  },
  {
    title: "Xpression Attachments for Braids",
    items: [
      "Xpression Ultra Braid 82",
      "Xpression Darling Color 1",
      "Xpression Two-Tone 1B/27",
      "Xpression Attachment 33",
      "Xpression Crochet Braid Pack"
    ]
  },
  {
    title: "Bonestraight Hair",
    items: [
      "10-inch Bonestraight Bundle",
      "16-inch Bonestraight Bundle",
      "20-inch Bonestraight Bundle",
      "24-inch Bonestraight Bundle",
      "28-inch Premium Bonestraight"
    ]
  },
  {
    title: "Perfumes",
    items: [
      "Floral Bliss Perfume",
      "Oud Elegance Perfume",
      "Rose Gold Mist",
      "Citrus Bloom Body Spray",
      "Vanilla Night Perfume"
    ]
  },
  {
    title: "Makeup (Glams, Mary Kay & Tara)",
    items: [
      "Glams Matte Foundation",
      "Glams Lip Palette",
      "Mary Kay Timewise Powder",
      "Mary Kay Lash Love Mascara",
      "Tara Pro Face Palette"
    ]
  }
];

const productsRoot = document.getElementById("products-root");

productCategories.forEach((category) => {
  const categoryCard = document.createElement("article");
  categoryCard.className = "category-card";

  const heading = document.createElement("h2");
  heading.textContent = category.title;

  const list = document.createElement("ul");
  list.className = "product-grid";

  category.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "product-item";
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  const note = document.createElement("p");
  note.className = "section-note";
  note.textContent = "Contact us for any product you need.";

  categoryCard.append(heading, list, note);
  productsRoot.appendChild(categoryCard);
});
