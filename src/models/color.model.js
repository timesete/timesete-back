module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define(
    'Color',
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
      tableName: 'colors',
    }
  );

  Color.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(Object.entries(data));
  };

  return Color;
};
