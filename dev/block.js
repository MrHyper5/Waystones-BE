
var Obelisk = Block.createSpecialType({
     lightlevel: 3,
     lightopacity: 15,
     explosionres: 9,
     destroytime: 2
});

IDRegistry.genBlockID("obelisk");

Block.createBlock("obelisk", [
	{name: "obelisk", texture: [["kk", 4]], inCreative: true}
], Obelisk);