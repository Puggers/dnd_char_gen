const planeMachine = document.querySelector('#planeMachine');

$(document).ready(function () {
    var race = new EZSlots("elementid", {
        reelCount: 1,
        symbols: ['Aarakocra', 'Aasimar', 'Aasimar (Fallen)', 'Aasimar (Protector)', 'Aasimar (Scourge)', 'Bugbear', 'Centaur', 'Dragonborn', 'Dwarf (Duergar)', 'Dwarf (Hill)', 'Dwarf (Mountain)', 'Elf (Drow)', 'Elf (Eladrin)', 'Elf (Eladrin)', 'Elf (High)', 'Elf (Sea)', 'Elf (Shadar-kai)', 'Elf (Wood)', 'Firbolg', 'Genasi (Air)', 'Genasi (Earth)', 'Genasi (Fire)', 'Genasi (Water)', 'Gith (Githyanki)', 'Gith (Githzerai)', 'Gnome (Deep)', 'Gnome (Deep/Svirfneblin)', 'Gnome (Forest)', 'Gnome (Rock)', 'Goblin', 'Goblin', 'Goliath', 'Half-Elf', 'Half-Elf (Aquatic Elf Descent)', 'Half-Elf (Drow Descent)', 'Half-Elf (Moon Elf Sun Elf Descent)', 'Half-Elf (Wood Elf Descent)', 'Half-Orc', 'Halfling (Ghostwise)', 'Halfling (Lightfoot)', 'Halfling (Stout)', 'Hobgoblin', 'Human (Variant)', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tiefling (Asmodeus)', 'Tiefling (Baalzebul)', 'Tiefling (Dispater)', 'Tiefling (Fierna)', 'Tiefling (Glasya)', 'Tiefling (Levistus)', 'Tiefling (Mammon)', 'Tiefling (Mephistopheles)', 'Tiefling (Variant)', 'Tiefling (Zariel)', 'Tortle', 'Triton', 'Vedalken', 'Yuan-ti Pureblood'
        ]
    });
    var dd_class = new EZSlots("elementid", {
        reelCount: 1,
        symbols: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    });
    var background = new EZSlots("elementid", {
        reelCount: 1,
        symbols: ['Acolyte','Anthropologist','Archaeologist','Azius Functionary','Black Fist Double Agent','Bos Legionnaire','Caravan Specialist','Charlatan','City Watch','City Watch (Investigat)','Clan Crafter','Cloistered Scholar','Cmanth Refugee','Courtier','Criminal','Criminal (Spy)','Dimir Operative','Dragon Casualty','Earthspur Miner','Entertainer','Entertainer (Gladiat)','Faction Agent','Far Traveler','Folk Hero','Gate Urchin','Golgari Agent','Gruul Anarch','Guild Artisan','Guild Artisan (Guild Merchant)','Harbfolk','Haunted One','Hermit','Hillsfar Merchant','Hillsfar Smuggler','Inherit','Iron Route Bandit','Izzet Engineer','Knight of the Order','Mercenary Veteran','Mulmaster Aristocrat','Noble','Noble (Knight)','Orzhov Representative','Outlander','Phlan Insurgent','Phlan Refugee','Rakdos Cultist','Sage','Sail','Sail (Pirate)','Secret Identity','Selesnya Initiate','Shade Fanatic','Simic Scientist','Soldier','Stojanow Prisoner','Ticklebelly Nomad','Trade Sheriff','Urban Bounty Hunter','Urchin','Uthgardt Tribe Member','Waterdhavian Noble'
]
    });


    $("#spin").click(function () {
        console.log(race.spin());
        setTimeout(function () {
            console.log(dd_class.spin());
        }, 2000);
        setTimeout(function () {
            console.log(background.spin());
        }, 4000);
        setTimeout(function () {
            console.log(theme.spin());
        }, 6000);

    });
});



new SlotMachine(planeMachine, {
    active: 1,
    delay: 450,
    auto: 1500,
    randomize() {
        return this.nextIndex;
    }
});

// Using jQuery
$('#planeMachine2').slotMachine({
    active: 1,
    delay: 450,
    auto: 1500,
    randomize() {
        return this.nextIndex;
    }
});
