/* eslint-disable @typescript-eslint/no-unused-vars */
import { InventoryItem } from '@asledgehammer/pipewrench';

function SOL_Purify_Water_Container(
    items: Array<InventoryItem>,
    _result: unknown,
    _player: unknown
) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item?.isWaterSource() && item?.isTaintedWater()) {
            item?.setTaintedWater(false);
        }
    }
}
