//регистрация специального типа блока
/*
var Waystone = Block.createSpecialType({
     lightlevel: 3,
     lightopacity: 15,
     explosionres: 9,
     destroytime: 2
});
*/
//регистрация айди блока
IDRegistry.genBlockID("waystone");
//создание блока
Block.createBlock("waystone",
[
	{name: "waystone", texture: [[
	  "planks", 0
]], inCreative: true}
],
{
     lightlevel: 3,
     lightopacity: 15,
     explosionres: 9,
     destroytime: 2
}
);
//присвоение материала блоку
ToolAPI.registerBlockMaterial(
  BlockID.waystone, "stone", 2, true
);