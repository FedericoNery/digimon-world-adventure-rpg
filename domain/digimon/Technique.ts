import { EntityBase } from "../EntityBase";
import { DigimonInBattle } from "../battle/DigimonInBattle";
import { ElementEnum } from "./ElementEnum";

export class Technique extends EntityBase {
    name: string;
    description: number;
    type: number; //Physical or Magical
    level: number; // lv enabled ??? nivel en el que se desbloquea??
    magicPointsCost: number;
    accuracy: number;
    power: number;
    typeElement: ElementEnum;
    //elementType: ; //Elemento predominante 
    elementValue: number; // Valor elemento predominante
    //effect:   
    //EFECTO 
    // Heal -> cura un digimon aliado
    // Heal Allies -> cura todos los digimons
    // Auto Heal -> Se cura a si mismo
    // Revive -> revive un aliado 
    // Revive All -> revive a todos los aliados
    // Cured -> quita efectos aplicados a si mismo
    // Cured Allies -> quita efectos a sus aliados
    // KO -> mata al rival??
    // Confuse -> confunde al rival
    // Paralyze -> confunde al rival
    // Poison -> confunde al rival
    // Sleep -> confunde al rival
    // Anti KO -> mata al rival??
    // Anti Confuse -> confunde al rival
    // Anti Paralyze -> confunde al rival
    // Anti Poison -> confunde al rival
    // Anti Sleep -> confunde al rival
    // Multi ATK 2x ->
    // Multi ATK 3x ->
    // Multi ATK 4x ->
    // Drain Health Points -> del rival
    // Auto increment Speed -> Incrementa velocidad
    // Counter Attack -> incrementa contrataque ??

    // Set field in types -> 

    applyOn(target: DigimonInBattle){
        //Chequear si la precision es superior??
    }

    heal(target: DigimonInBattle){ //Crear formula
        let healPoints = target.digimon.healthPoints * 0.2 + (this.power * 0.01);
        target.actualHealthPoints += healPoints;
    }
}    