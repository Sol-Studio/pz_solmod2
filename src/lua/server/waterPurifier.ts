/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InventoryItem } from '@asledgehammer/pipewrench';

const SOL_Purify_Water_Container = (items: Array<InventoryItem>, _r: unknown, _p: unknown) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item?.isWaterSource() && item?.isTaintedWater()) {
            item?.setTaintedWater(false);
        }
    }
};

const SOL_Is_Tainted_Water = (item: InventoryItem) => {
    if (!item.isWaterSource()) return true;
    if (item.isTaintedWater()) return true;
    return false;
};
(_G as any).SOL_Purify_Water_Container = SOL_Purify_Water_Container;
(_G as any).SOL_Is_Tainted_Water = SOL_Is_Tainted_Water;
