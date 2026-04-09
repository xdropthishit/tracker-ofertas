import fetch from "node-fetch";

(async () => {
  const url = "https://api.mercadolibre.com/sites/MLA/search?q=ps5&limit=10";

  const res = await fetch(url);

  if (!res.ok) {
    console.log("❌ Error:", res.status);
    return;
  }

  const data = await res.json();

  if (!data.results) {
    console.log("❌ Sin resultados");
    console.log(data);
    return;
  }

  const productos = data.results.map(p => ({
    titulo: p.title,
    precio: p.price,
    link: p.permalink,
    cuotas: p.installments
  }));

  console.log("✅ PRODUCTOS:");
  console.log(productos);
})();