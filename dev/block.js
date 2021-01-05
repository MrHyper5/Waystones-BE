//регистрация специального типа блока
/*
var Obelisk = Block.createSpecialType({
     lightlevel: 3,
     lightopacity: 15,
     explosionres: 9,
     destroytime: 2
});
*/
//регистрация айди блока
IDRegistry.genBlockID("obelisk");
//создание блока
Block.createBlock("obelisk",
[
	{name: "obelisk", texture: [[
	  "plants", 0
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
ToolAPI.registerBlockMateri(
  BlockID.obelisk, "stone", 2
);