const Sequelize = require("sequelize");
const connection = require("../database/database");
const Article = require("../articles/Article")
const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
Category.hasMany(Article); // UMA Categoria tem muitos artigos
Article.belongsTo(Category); // UM Artigo pertence a uma categoria

module.exports = Category;
