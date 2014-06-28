cow = Animal.create name: 'Cow'
cow.primal_cuts.create name: 'Chuck'
cow.primal_cuts.create name: 'Short Loin'
rib = cow.primal_cuts.create name: 'Rib'
rib.cuts.create name: 'Prime Rib'
rib.cuts.create name: 'Ribeye'
cow.cuts.create name: 'Porterhouse'
cow.cuts.create name: 'T-Bone'
cow.cuts.create name: 'Strip'

pig = Animal.create name: 'Pig'
pig.primal_cuts.create name: 'Jowl'
pig.primal_cuts.create name: 'Ham'
loin = pig.primal_cuts.create name: 'Loin'
loin.cuts.create name: 'Loin Chop'
loin.cuts.create name: 'Blade Roast'
pig.cuts.create name: 'Babyback Ribs'
pig.cuts.create name: 'Spareribs'
pig.cuts.create name: 'Hock'