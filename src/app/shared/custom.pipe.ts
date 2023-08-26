import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(nbSecondes: number): string {
    let jours = Math.floor(nbSecondes / 86400)
    nbSecondes = nbSecondes - (jours * 86400)

    let heures = Math.floor(nbSecondes / 3600)
    nbSecondes = nbSecondes - (heures * 3600)

    let minutes = Math.floor(nbSecondes / 60)
    nbSecondes = nbSecondes - (minutes * 60)

    let secondes = nbSecondes

    let joursSTR = jours.toString()
    if(jours < 10) joursSTR = "0"+joursSTR
    let strForJours = jours > 1 ? "jours" : "jour"
    
    let heuresSTR = heures.toString()
    if(heures < 10) heuresSTR = "0"+heuresSTR
    let strForHeures = heures > 1 ? "heures" : "heure"

    let minutesSTR = minutes.toString()
    if(minutes < 10) minutesSTR = "0"+minutesSTR
    let qtrForMinutes = minutes > 1 ? "minutes" : "minute"

    let secondesSTR = secondes.toString()
    if(secondes < 10) secondesSTR = "0"+secondesSTR
    let strForSecondes = secondes > 1 ? "secondes" : "seconde"
    return '${joursSTR} ${strForJours}, ${heuresSTR} ${strForHeures}, ${minutesSTR} ${strForMinutes}, ${secondesSTR} ${strForSecondes}';
    //return joursSTR + " " + strForJours + ", " + heuresSTR + " " + strForHeures + ", " + minutesSTR + " " +strForMinutes + ", " + secondesSTR + " " + strForSecondes;
  }

}
