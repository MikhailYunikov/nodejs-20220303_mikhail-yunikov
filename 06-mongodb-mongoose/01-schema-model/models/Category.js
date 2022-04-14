const mongoose = require('mongoose');
const connection = require('../libs/connection');
// https://mongoosejs.com/docs/subdocs.html
// https://metanit.com/web/nodejs/6.6.php
//mongoose.connect('mongodb://localhost/mongoose_basics');

const subCategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    },
});

const categorySchema = new mongoose.Schema({
  _id: new mongoose.Schema.Types.ObjectId(),
  title: {
    type: String,
	required: true,
  },
  subcategories: [subCategorySchema],
});

module.exports = mongoose.model('Category', categorySchema);


/*
const subCategorySchema = new mongoose.Schema({
  _id: new mongoose.Schema.Types.ObjectId(),
  title: {
    type: String,
    required: true,
    },
});

const categorySchema = new mongoose.Schema({
  _id: new mongoose.Schema.Types.ObjectId(),
  title: {
    type: String,
	required: true,
  },
  subcategories: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      ref: 'Subcategory',
    },
  ],

});
*/
/*
const subCategorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
      },
  });
  
const categorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    subcategories: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
      },
    ],
});
*/
//let subCategory = mongoose.model('subCategory', subCategorySchema);
 
//var Book = mongoose.model('Category', categorySchema);


//module.exports = connection.model('Category', categorySchema);

/*
var mongoose = require(‘mongoose’);
 
mongoose.connect(‘mongodb://localhost/mongoose_basics’);

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
            firstName: String,
        lastName: String
    },
    biography: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
    created: {
        type: Date,
        default: Date.now
    }
});

var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: String,
    thumbnail: Buffer,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ‘Author’
    },
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: {
                type: Date,
                default: Date.now
            }
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

var Author = mongoose.model(‘Author’, authorSchema);
 
var Book = mongoose.model(‘Book’, bookSchema);

//  Чтобы продемонстрировать создание и сохранение объекта, в следующем примере я собираюсь создать несколько объектов: 
//  модель Author и несколько моделей Book . После создания эти объекты будут сохранены в MongoDB
//  с использованием метода сохранения модели.

var jamieAuthor = new Author {
    _id: new mongoose.Types.ObjectId(),
    name: {
        firstName: ‘Jamie’,
        lastName: ‘Munro’
    },
    biography: ‘Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.’,
    twitter: ‘https://twitter.com/endyourif’,
    facebook: ‘https://www.facebook.com/End-Your-If-194251957252562/’
};
 
jamieAuthor.save(function(err) {
    if (err) throw err;
     
    console.log(‘Author successfully saved.’);
     
    var mvcBook = new Book {
            _id: new mongoose.Types.ObjectId(),
            title: ‘ASP.NET MVC 5 with Bootstrap and Knockout.js’,
            author: jamieAuthor._id,
            ratings:[{
                summary: ‘Great read’
            }]
    };
     
    mvcBook.save(function(err) {
        if (err) throw err;
     
        console.log(‘Book successfully saved.’);
    });
     
    var knockoutBook = new Book {
            _id: new mongoose.Types.ObjectId(),
            title: ‘Knockout.js: Building Dynamic Client-Side Web Applications’,
            author: jamieAuthor._id
    };
     
    knockoutBook.save(function(err) {
        if (err) throw err;
     
        console.log(‘Book successfully saved.’);
    });
});
*/