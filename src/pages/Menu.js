import React, { useState } from "react";
import '../style/Menu.css'; // Importando o CSS do menu

// Itens de Menu com imagens da web
const beerMenu = [
  {
    category: "Cervejas",
    items: [
      { name: "Skol", price: "R$ 6,50", image: "https://cdn.formulaexpress.com.br/img/p/1/9/8/198-large_default.jpg" },
      { name: "Skol Lata", price: "R$ 8,00", image: "https://savegnagoio.vtexassets.com/arquivos/ids/451158/CervejaSkolPilsenLata350ml1.jpg?v=638610711235400000" },
      { name: "Brahma", price: "R$ 6,80", image: "https://cdn.formulaexpress.com.br/img/p/1/9/7/197-thickbox_default.jpg" },
      { name: "Brahma Lata", price: "R$ 8,00", image: "https://mercantilatacado.vtexassets.com/arquivos/ids/168508/65391b486a2a15a1bb6c1b6f.jpg?v=638338381590100000" },
      { name: "Brahma Litro", price: "R$ 16,50", image: "https://ibassets.com.br/ib.item.image.large/l-f8a2cdcdfd064b4593152020fc0b72d0.jpeg" },
      { name: "Original", price: "R$ 8,50", image: "https://cdn.formulaexpress.com.br/img/p/3/7/37.jpg" },
      { name: "Spaten", price: "R$ 8,30", image: "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dwbb8d8c53/Produtos/882968-7891991297547-cerveja%20nacional%20spaten%20munich%20puro%20malte%20garrafa%20600ml-spaten-1.jpg" },
      { name: "Heineken", price: "R$ 12,00", image: "https://carrefourbrfood.vtexassets.com/arquivos/ids/23256934/cerveja-heineken-garrafa-600-ml-1.jpg?v=637655997827630000" },
      { name: "Heineken Long Neck", price: "R$ 10,00", image: "https://changlee.com.br/wp-content/uploads/2016/12/554244-Cerveja-Heineken-Long-Neck-355ml.png" },
      { name: "Budweiser", price: "R$ 10,00", image: "https://carrefourbrfood.vtexassets.com/arquivos/ids/134558686/cerveja-budweiser-american-lager-330ml-long-neck-1.jpg?v=638364442432970000" },
      { name: "Corona", price: "R$ 9,00", image: "https://marmoreio.com.br/wp-content/uploads/2020/05/corona-long-neck-Copia-2.jpg" },
      { name: "Stella Artois", price: "R$ 9,50", image: "https://mercantilnovaera.vtexassets.com/arquivos/ids/210044-800-450?v=638290020074200000&width=800&height=450&aspect=true" },
      
    ]
  },
  {
    category: "Porções",
    items: [
      { name: "Batatas Fritas", price: "R$ 18,00", image: "https://img.elo7.com.br/product/zoom/13B026B/porcao-de-batata-frita-fria-gordurenta-comida.jpg" },
      { name: "Calabresa", price: "R$ 22,00", image: "https://img.freepik.com/fotos-premium/detalhe-da-porcao-de-linguica-calabresa-grelhada-com-cebola_92534-4623.jpg" },
      { name: "Frango a Passarinho", price: "R$ 28,00", image: "https://i.ytimg.com/vi/hDFh7LqkTcU/sddefault.jpg" },
      { name: "Pastel", price: "R$ 20,00", image: "https://www.rbsdirect.com.br/filestore/8/4/1/7/6/2/4_a8e0c858f9c3845/4267148_5785f8705bf0f66.jpg?w=700" },
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Caipirinha", price: "R$ 15,00", image: "https://static.vecteezy.com/ti/fotos-gratis/t1/12175473-copo-de-caipirinha-foto.jpg" },
      { name: "Mojito", price: "R$ 18,00", image: "https://www.simplejoy.com/wp-content/uploads/2024/04/mojito.jpg" },
      { name: "Piña Colada", price: "R$ 20,00", image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/011532f78bb086f63b24f0adca73e8ef.jpeg" },
      { name: "Gin Tônica", price: "R$ 22,00", image: "https://www.bullhof.com.br/cdn/shop/articles/3_1200x1200.png?v=1636491023" },
    ]
  },
  {
    category: "Sem Álcool",
    items: [
      { name: "Água", price: "R$ 8,50", image: "https://tb0932.vtexassets.com/arquivos/ids/162415/112940.png?v=637705334878500000" },
      { name: "Água com gás", price: "R$ 9,00", image: "https://carrefourbrfood.vtexassets.com/arquivos/ids/18904682/agua-mineral-com-gas-crystal-500ml-1.jpg?v=637590231096200000" },
      { name: "Água de Coco", price: "R$ 8,00", image: "https://ibassets.com.br/ib.item.image.large/l-d4b49557229e4ce6b82abaf4cab5961a.jpeg" },
      { name: "Suco de Laranja", price: "R$ 10,00", image: "https://storage.googleapis.com/domain-images/06c5ca84-e308-4cad-8b0a-ece554dd990c/products/gallery_ffd2e63a-a707-4c47-9380-55f375e97df1.jpg" },
      { name: "Coca Lata", price: "R$ 11,00", image: "https://andinacocacola.vtexassets.com/arquivos/ids/158593/SKUs-Ecommerce--1000-x-1000-px---9-.jpg?v=638703085487330000" },
      { name: "Cola 2L", price: "R$ 10,50", image: "https://coopsp.vtexassets.com/arquivos/ids/224479-800-auto?v=637919585207130000&width=800&height=auto&aspect=true" },
      { name: "Guárana", price: "R$ 11,50", image: "https://brf.file.force.com/servlet/servlet.ImageServer?id=015U600000025zh&oid=00D410000012TJa&lastMod=1703691077000" },
      { name: "Gatorade", price: "R$ 13,00", image: "https://www.svicente.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw4aa2b0ab/Produtos/993255-7892840822019-isotonico%20gatorade%20berry%20blue%20pet%20-%20500ml-gatorade-1.jpg" },
    ]
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cervejas");
  const filteredItems = beerMenu.find(menu => menu.category === selectedCategory);

  return (
    <div className="menu-container">
      <div className="select-container">
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {beerMenu.map((menu, idx) => (
            <option key={idx} value={menu.category}>{menu.category}</option>
          ))}
        </select>
      </div>

      <h1 className="menu-title">{selectedCategory}</h1>

      {filteredItems && (
        <div className="menu-items">
          {filteredItems.items.map((item, idx) => (
            <div key={idx} className="menu-item-card">
              <h3 className="item-name">{item.name}</h3>
              <img src={item.image} alt={item.name} className="item-image" />
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
