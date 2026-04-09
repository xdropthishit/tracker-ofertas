const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

(async () => {
  const url = "https://api.mercadolibre.com/sites/MLA/search?q=ps5&limit=5";

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.mercadolibre.com.ar/"
    }
  });

  const text = await res.text();

  if (text.includes("forbidden")) {
    console.log("❌ Sigue bloqueado → vamos a solución definitiva");
    return;
  }

  const data = JSON.parse(text);

  const productos = data.results.map(p => ({
    titulo: p.title,
    precio: p.price,
    link: p.permalink
  }));

  console.log("✅ PRODUCTOS:");
  console.log(productos);
})();