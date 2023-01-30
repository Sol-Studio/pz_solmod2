require 'Items/SuburbsDistributions'
require 'Items/Distributions'
require 'Items/ProceduralDistributions'
require 'Vehicles/VehicleDistributions'
require 'Items/ItemPicker'


local function procDistribute(target, itemType, chance)
    table.insert(ProceduralDistributions.list[target].items, itemType);
    table.insert(ProceduralDistributions.list[target].items, chance);
end

-- PepsiCola
procDistribute("StoreShelfDrinks", "SOL.PepsiCola", 100);