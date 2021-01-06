//регистрация специального типа блока
var Waystone = Block.createSpecialType({
     lightlevel: 3,
     lightopacity: 15,
     explosionres: 9,
     destroytime: 2
});
/*
{
     lightlevel: 3,
     lightopacity: 15,
     explosionres: 9,
     destroytime: 2
}
*/
//регистрация айди блока
IDRegistry.genBlockID("waystonedown");
IDRegistry.genBlockID("waystoneup");
//создание блока
Block.createBlock("waystonedown",
[
	{name: "waystonedown", texture: [[
	  "stone", 0
]], inCreative: true}
],Waystone);
Block.createBlock("waystoneup",
[
	{name: "waystoneup", texture: [[
	  "stone", 0
]], inCreative: true}
],Waystone);
//присвоение материала блоку
ToolAPI.registerBlockMaterial(
  BlockID.waystonedown, "stone", 2, true
);
ToolAPI.registerBlockMaterial(
  BlockID.waystoneup, "stone", 2, true
);
//модель блока

//нижняя часть
var meshwaydown = new RenderMesh(); 
meshwaydown.setBlockTexture("andesitium",0);

meshwaydown.importFromFile(__dir__+"/models/meshweydown.obj","obj",null);

meshwaydown.translate(0.5,0,0.5);

var renderWaydown = new ICRender.Model(); 
renderWaydown.addEntry(new BlockRenderer.Model(meshwaydown)); 
BlockRenderer.setStaticICRender(BlockID.waystonedown,0,renderWaydown);

//верхняя часть
var meshwayup = new RenderMesh(); 
meshwayup.setBlockTexture("andesitium",0);

meshwayup.importFromFile(__dir__+"/models/meshweyup.obj","obj",null);

meshwayup.translate(0.5,0,0.5);

var renderWayup = new ICRender.Model(); 
renderWayup.addEntry(new BlockRenderer.Model(meshwayup)); 
BlockRenderer.setStaticICRender(BlockID.waystoneup,0,renderWayup);