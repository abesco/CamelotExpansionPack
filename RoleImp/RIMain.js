(function () {
	var ready = function () {
		RoleImp.addCustomEvents();
		//EventTrain
		//EventSteal
		//EventBailOut
		//EventBetterOffer
		//Lottery Chance Added	
			
		RoleImp.addGameExtentions();
		RoleImp.addSpecialismOption();
		RoleImp.setSpecialism();
	
	};

	var error = function () {
	};

	GDT.loadJs(['mods/RoleImp/RoleImp.js','mods/gdt-modAPI/api/events.js'], ready, error);
})();