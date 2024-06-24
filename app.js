





const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/GettyImages-155351117-f2ff49b2d8ea4d6ba7a5c97f9de28558.jpg",
    desc: `IM nkndslkn sdknsldnkfslkd nlsdn sldkn  lsndfsd `,
  },
  {
    id: 2,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item-3.jpeg",
    desc: `jbkjsbak caks nalsk nasldnaslkn dlasnkn `,
  },
  {
    id: 3,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./img/item-2.jpeg",
    desc: `nasnxalksn lkas ndlaksn dlasndl nlan ksldnalskn dlaksndnlkn `,
  },
  {
    id: 4,
    title: "Country Delights",
    category: "breakfast",
    price: 20.99,
    img: "./img/download.jpg",
    desc: `IM nkndslkn sdknsldnkfslkd nlsdn sldkn  lsndfsd `,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "./img/egg-burger-recipe-featured.jpg",
    desc: `jbkjsbak caks nalsk nasldnaslkn dlasnkn `,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "./img/Oreo-Milkshake-10.jpg",
    desc: `nasnxalksn lkas ndlaksn dlasndl nlan ksldnalskn dlaksndnlkn `,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/images.jpg",
    desc: `asdalskjdsjhbaskdkjansdk nalksnd lkasnd klnsad nasldnl asnldnal kasnlnldk nasndlk alsnd naksndl nasn sadkn`,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./img/americanClassic.jpg",
    desc: `sk nsadlnasldnla nsldkna lksndlknnk lalkd aksndl asnd alsndlka ls ndans dnklasnldnas k `,
  },
  {
    id: 9,
    title: "Kay's Favorite",
    category: "shakes",
    price: 16.99,
    img: "./img/Chocolate-Shake-with-Chocolate-Syrup-Whipped-Cream-and-Cherry-500x500.jpg",
    desc: `aslkansldk nalksnd anlskdnlk ansndklannwklnknwn kjn kwjn nwkn ncnsdoncoainpwqnd pqn`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "./img/5488100-ea9d7533df104140a4279fc9d1185bd9.jpg",
    desc: `asdnanlskn alskdn lqkw lqwnpvo m pweonwlkn lzxkcn apwkn pksancl kanwpqndaksn l`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//Load Items
  window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item){
    // console.log(item);
 
     return `<article class="menu-item">
     <img src=${item.img} class="photo" alt=${item.title}>
     <div class="item-info"></div>
     <header>
       <h4>${item.title}</h4>
       <h4 class="price">${item.price}</h4>
       <p>${item.desc}</p>
     </header> 
   </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },
  ['all']
  );

  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button"
    data-id=${category}>
    ${category}
    </button>
    `
  }).join('');
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  //Filter Items
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        //console.log(menuItem.category);

        if(menuItem.category === category){
          return menuItem;
        }

      //console.log(menuCategory);
      
    });
    
    if(category === 'all'){
      displayMenuItems(menu);
    }else{
      displayMenuItems(menuCategory);
    }
    });
  });
}