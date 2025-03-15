import React, { useState } from "react";
import '../style/Menu.css'; // Importando o CSS do menu

// Itens de Menu
const beerMenu = [
  {
    category: "Cervejas",
    items: [
      // Skol
      { name: "Skol", price: "R$ 6,50", description: "Cerveja lager com sabor suave e de fácil paladar." },
      { name: "Skol Lata", price: "R$ 8,00", description: "Skol em lata, sabor leve e fácil de carregar." },
      { name: "Skol Litro", price: "R$ 16,00", description: "Skol em garrafa de 1 litro, sabor leve e ideal para festas." },

      // Brahma
      { name: "Brahma", price: "R$ 6,80", description: "Cerveja com sabor suave e ideal para todas as ocasiões." },
      { name: "Brahma Lata", price: "R$ 8,00", description: "Brahma em lata, a cerveja ideal para todas as ocasiões." },
      { name: "Brahma Litro", price: "R$ 16,50", description: "Brahma em garrafa de 1 litro, sabor clássico em grande volume." },

      // Antártica
      { name: "Antártica", price: "R$ 7,00", description: "Cerveja tipo pilsen com sabor leve e refrescante." },
      { name: "Antártica Lata", price: "R$ 8,50", description: "Antártica em lata, sabor leve e refrescante." },
      { name: "Antártica Litro", price: "R$ 17,00", description: "Antártica em garrafa de 1 litro, sabor leve e refrescante." },

      // Budweiser
      { name: "Budweiser", price: "R$ 7,50", description: "Cerveja lager com um sabor encorpado e uma leve nota de malte." },
      { name: "Budweiser Lata", price: "R$ 9,50", description: "Cerveja Budweiser em lata, o sabor encorpado em versão compacta." },
      { name: "Budweiser Litro", price: "R$ 17,50", description: "Budweiser em garrafa de 1 litro, ideal para quem quer mais sabor." },

      // Heineken
      { name: "Heineken", price: "R$ 8,00", description: "Cerveja lager premium com um sabor leve e refrescante." },
      { name: "Heineken Lata", price: "R$ 10,00", description: "Cerveja Heineken em lata, praticidade e sabor refrescante." },
      { name: "Heineken Litro", price: "R$ 18,00", description: "Heineken em garrafa de 1 litro, sabor refrescante e em grande volume." },

      // Corona
      { name: "Corona", price: "R$ 9,00", description: "Cerveja mexicana com sabor leve e refrescante." },
      { name: "Corona Lata", price: "R$ 10,50", description: "Corona em lata, um toque refrescante e prático." },
      { name: "Corona Litro", price: "R$ 19,00", description: "Corona em garrafa de 1 litro, refrescante e de grande volume." },

      // Bud Light
      { name: "Bud Light", price: "R$ 8,30", description: "Cerveja leve com baixo teor alcoólico e sabor refrescante." },

      // Original
      { name: "Original", price: "R$ 8,50", description: "Cerveja encorpada com um toque amargo." },
      { name: "Original Lata", price: "R$ 9,00", description: "Original em lata, um sabor encorpado e prático." },

      // Stella Artois
      { name: "Stella Artois", price: "R$ 9,50", description: "Cerveja belga com sabor refinado e elegante." }
    ]
  },
  {
    category: "Porções",
    items: [
      { name: "Batatas Fritas", price: "R$ 18,00", description: "Porção de batatas fritas crocantes." },
      { name: "Onion Rings", price: "R$ 22,00", description: "Anéis de cebola empanados e crocantes." },
      { name: "Frango à Passarinho", price: "R$ 25,00", description: "Frango frito crocante com tempero especial." },
      { name: "Tiras de Peixe Empanadas", price: "R$ 28,00", description: "Peixe empanado servido com molho tartar." }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Caipirinha", price: "R$ 15,00", description: "Drink tradicional com cachaça, limão e açúcar." },
      { name: "Mojito", price: "R$ 18,00", description: "Drink refrescante com rum, hortelã e limão." },
      { name: "Piña Colada", price: "R$ 20,00", description: "Drink cremoso com rum, leite de coco e abacaxi." },
      { name: "Gin Tônica", price: "R$ 22,00", description: "Drink com gin e tônica, refrescante e delicioso." }
    ]
  },
  {
    category: "Sem Álcool",
    items: [
      { name: "Suco de Laranja", price: "R$ 10,00", description: "Suco natural de laranja." },
      { name: "Água de Coco", price: "R$ 8,00", description: "Água de coco geladinha e refrescante." },
      { name: "Suco de Abacaxi", price: "R$ 12,00", description: "Suco natural de abacaxi." },
      { name: "Chá Gelado", price: "R$ 9,00", description: "Chá gelado de limão e hortelã, refrescante." },
      { name: "Suco de Morango", price: "R$ 12,00", description: "Suco natural de morango fresco." },
      { name: "Suco de Uva", price: "R$ 11,00", description: "Suco 100% natural de uva." },
      { name: "Suco de Melancia", price: "R$ 10,50", description: "Suco natural e refrescante de melancia." },
      { name: "Limonada Suíça", price: "R$ 11,50", description: "Limonada feita com limão siciliano e adoçada na medida." },
      { name: "Água Aromatizada", price: "R$ 8,50", description: "Água com infusão de frutas frescas." },
      { name: "Suco de Manga", price: "R$ 13,00", description: "Suco natural de manga, refrescante e doce." }
    ]
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cervejas");

  // Filtra os itens com base na categoria selecionada
  const filteredItems = beerMenu.find(menu => menu.category === selectedCategory);

  return (
    <div className="menu-container">
      {/* Select de Categorias */}
      <div className="select-container">
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Cervejas">Cervejas</option>
          <option value="Porções">Porções</option>
          <option value="Drinks">Drinks</option>
          <option value="Sem Álcool">Sem Álcool</option>
        </select>
      </div>

      {/* Título do Menu */}
      <h1 className="menu-title">{selectedCategory}</h1>

      {/* Exibição dos Itens do Menu */}
      {filteredItems && (
        <div className="menu-items">
          {filteredItems.items.map((item, idx) => (
            <div key={idx} className="menu-item-card">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
