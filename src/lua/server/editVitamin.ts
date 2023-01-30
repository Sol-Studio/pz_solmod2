import { onGameStart } from '@asledgehammer/pipewrench-events';
import { ISTakePillAction } from '@asledgehammer/pipewrench';

function overrideISTakePillActionPerform() {
    const perform = ISTakePillAction.prototype.perform;
    ISTakePillAction.prototype.perform = function () {
        if (this.item.getFullType() == 'Base.PillsVitamins') {
            this.character.getBodyDamage().AddGeneralHealth(40); // 치유량 : n% * 4
        }
        perform(this);
    };
}
onGameStart.addListener(overrideISTakePillActionPerform);
