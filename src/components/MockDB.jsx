
import icon1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import icon2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import icon3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import icon4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import icon5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import icon6 from "../../Assets/Iteration-2-aseets/icons/6.svg";

import food1 from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import food2 from "../../Assets/Iteration-2-aseets/pictures/food-2.png";
import food3 from "../../Assets/Iteration-2-aseets/pictures/food-3.png";


export const menuIcons = [
    { src: icon1 },
    { src: icon2 },
    { src: icon3 },
    { src: icon4 },
    { src: icon5 },
    { src: icon6 },
  ];
  
  export const firstMenuLabels = [
    { text: "YENİ! Kore", alt: "Kore Cuisine" },
    { text: "Pizza", alt: "Pizza" },
    { text: "Burger", alt: "Burger" },
    { text: "Kızartmalar", alt: "Fries" },
    { text: "Fast Food", alt: "Fast Food" },
    { text: "Gazlı İçecek", alt: "Soft Drinks" },
  ];
  
  export const secondMenuLabels = [
    { text: "Ramen", alt: "Ramen" },
    { text: "Pizza", alt: "Pizza" },
    { text: "Burger", alt: "Burger" },
    { text: "French Fries", alt: "French Fries" },
    { text: "Fast Food", alt: "Fast Food" },
    { text: "Soft Drinks", alt: "Soft Drinks" },
  ];
  
  export const INGREDIENTS_LIST = [
    { label: "Pepperoni", value: "Pepperoni" },
    { label: "Sosis", value: "Sosis" },
    { label: "Kanada Jambonu", value: "Kanada Jambonu" },
    { label: "Tavuk Izgara", value: "Tavuk Izgara" },
    { label: "Soğan", value: "Soğan" },
    { label: "Domates", value: "Domates" },
    { label: "Mısır", value: "Mısır" },
    { label: "Sucuk", value: "Sucuk" },
    { label: "Jalepeno", value: "Jalepeno" },
    { label: "Sarımsak", value: "Sarımsak" },
    { label: "Biber", value: "Biber" },
    { label: "Ananas", value: "Ananas" },
    { label: "Kabak", value: "Kabak" },
  ];
  
  export const sizeOptions = [
    { label: "S", value: "small" },
    { label: "M", value: "medium" },
    { label: "L", value: "large" },
  ];
  
  export const items = [
    {
      id: 1,
      name: "Position Absolute Acı Pizza",
      price: 140,
      image: food1,
      rating: 4.9,
      ratingCount: 124,
      description:
        "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok            acı pizza tam sana göre. Pizza, domates, peynir ve genellikle               çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak               odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle               yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan               İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen               pizzetta denir",
    },
    {
      id: 2,
      name: "Terminal Pizza",
      price: 180,
      image: food2,
      rating: 4.7,
      ratingCount: 216,
      description:
        "Zengin malzeme çeşitliliği, bol peynir ve doyurucu porsiyonuyla her lokmada keyif sunan bir klasik.",
    },
    {
      id: 3,
      name: "Ultimate Burger",
      price: 150,
      image: food3,
      rating: 4.8,
      ratingCount: 89,
      description:
        "Lezzet dolu sulu köftesi, taptaze sebzeleri ve özel hazırlanmış sosuyla burger severlerin vazgeçilmez favorisi!",
    },
  ];