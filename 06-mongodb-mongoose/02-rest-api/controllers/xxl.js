const xxl1 = require('../controllers/xxl1');

const obj = {
  categories: [{
    id: '5d208e631866a7366d831ffc',
    title: 'Category1',
    subcategories: [{
      id: '5d208e631866a7366d831ffd',
      title: 'Subcategory1'
    }]
  }]
};

console.log(obj.categories[0].id);
console.log(obj);
console.log(JSON.stringify(obj,null,2));

const dbResult = [
  {
    _id: "62b01fd82cf32978eb461f75",
    title: "Category1",
    subcategories: [
      {
        title: "Subcategory1",
        _id: "62b01fd82cf32978eb461f76"
      }
    ],
    __v: 0,
  }
];

const dbResult1 = [
  {
    _id: "62b01fd82cf32978eb461f75",
    title: "Category1",
    subcategories: [
      {
        title: "Subcategory1",
        _id: "62b01fd82cf32978eb461f76"
      },
      {
        title: "Subcategory2",
        _id: "62b01fd82cf32978eb461f76"
      },
      {
        title: "Subcategory3",
        _id: "62b01fd82cf32978eb461f76"
      },
    ],
    __v: 0,
  },
  {
    _id: "62b01fd82cf32978eb461f75",
    title: "Category2",
    subcategories: [
      {
        title: "Subcategory21",
        _id: "62b01fd82cf32978eb461f76"
      },
      {
        title: "Subcategory22",
        _id: "62b01fd82cf32978eb461f76"
      },
      {
        title: "Subcategory23",
        _id: "62b01fd82cf32978eb461f76"
      },
    ],
    __v: 0,
  }

];

function conversion (dbResult1) {
const newFormat = [];
//console.log(JSON.stringify(dbResult,null,2));

console.log('+++++++++++transformation BEGINS');

dbResult1.forEach((element, idx) => {
  // console.log('ffffuck');
  newFormat.push({});
  // console.log(element.title);
  // console.log('current idx =', idx);
  newFormat[idx].title = element.title;
  newFormat[idx].id = element._id;
  // console.log(element.subcategories[0]);
  newFormat[idx].subcategories = [];
  element.subcategories.forEach((element1, idx1) => {
    // console.log('fffuusk');
    newFormat[idx].subcategories.push({});
    newFormat[idx].subcategories[idx1].title = element1.title;
    newFormat[idx].subcategories[idx1].id = element1._id;
  });
});
console.log('+++++++++++transformation ENDS');
console.log(JSON.stringify(newFormat,null,2));
};


function conversion1 (dbResult1) {
  const newFormatXX = {categories: []};
  const newFormat = newFormatXX.categories;
  //console.log(JSON.stringify(dbResult,null,2));
  
  console.log('+++++++++++transformation BEGINS');
  
  dbResult1.forEach((element, idx) => {
    // console.log('ffffuck');
    newFormat.push({});
    // console.log(element.title);
    // console.log('current idx =', idx);
    newFormat[idx].title = element.title;
    newFormat[idx].id = element._id;
    // console.log(element.subcategories[0]);
    newFormat[idx].subcategories = [];
    element.subcategories.forEach((element1, idx1) => {
      // console.log('fffuusk');
      newFormat[idx].subcategories.push({});
      newFormat[idx].subcategories[idx1].title = element1.title;
      newFormat[idx].subcategories[idx1].id = element1._id;
    });
  });
  console.log('+++++++++++transformation ENDS');
  console.log(JSON.stringify(newFormatXX,null,2));
  };


conversion(dbResult1);
console.log(xxl1.add(5,5));
conversion1(dbResult1);

const arrayY = [1,5,6,7];
console.log(arrayY);
//const arrayX = arrayY.map(Math.sqrt);
arrayX = arrayY;
arrayX[3] = 10000;
console.log(arrayY);
console.log(arrayX);
console.log(Object.keys(dbResult).length);
console.log(Object.keys(dbResult));
console.log(Object.keys(dbResult[0]));
console.log(Object.keys(dbResult1).length);
console.log(Object.keys(dbResult1));


