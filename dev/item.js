
//регистрация айди предмета
IDRegistry.genItemID("Waystone");
IDRegistry.genItemID("warpStone");
//создаём предмет
Item.createItem("Waystone", "Waystone", {
  name: "waystone", meta: 0
},
{stack:64});
Item.createItem("warpStone", "warpStone", {
  name: "warpstone", meta: 0
},
{stack:1});
//рецепты
Callback.addCallback('LevelPreLoaded', function () {
  Recipes.addShaped({id: ItemID.Waystone, count: 1, data: 0}, [
	" b ",
	"bcb",
	"aaa"
], ['a', 98, 0, 'b', 49, 0, 'c', 264, 0]);
  Recipes.addShaped({id: ItemID.warpStone, count: 1, data: 0}, [
	"bab",
	"aca",
	"bab"
], ['a', 368, 0, 'b', 351, 13, 'c', 388, 0]);
});