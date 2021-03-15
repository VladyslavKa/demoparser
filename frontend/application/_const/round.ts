export enum ROUND_END_REASONS {
	TargetBombed = 1, // Target Successfully Bombed!
	TerroristsEscaped = 4, // The terrorists have escaped!
	CTStoppedEscape = 5, // The CTs have prevented most of the terrorists from escaping!
	TerroristsStopped = 6, // Escaping terrorists have all been neutralized!
	BombDefused = 7, // The bomb has been defused!
	CTWin = 8, // Counter-Terrorists Win!
	TerroristWin = 9, // Terrorists Win!
	Draw = 10, // Round Draw!
	HostagesRescued = 11, // All Hostages have been rescued!
	TargetSaved = 12, // Target has been saved!
	HostagesNotRescued = 13, // Hostages have not been rescued!
	TerroristsNotEscaped = 14, // Terrorists have not escaped!
	GameStart = 16, // Game Commencing!
	TerroristsSurrender = 17, // Terrorists Surrender
	CTSurrender = 18, // CTs Surrender
	TerroristsPlanted = 19, // Terrorists Planted the bomb
	CTsReachedHostage = 20, // CTs Reached the hostage
}

export enum PHASES {
	first = 'first',
	second = 'second',
}
