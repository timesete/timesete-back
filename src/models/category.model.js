module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'categorys',
    }
  );

  Category.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Category;
};
