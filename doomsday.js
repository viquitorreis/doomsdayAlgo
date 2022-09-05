function anoValidator(ano) {
    const tipo = typeof(ano) === 'number'
    const inteiro = Number.isInteger(ano) === true
    const div4 = ano % 4 === 0
    const div400 = ano % 400 === 0
    const div100 = ano % 100 === 0
    let isBissexto = true
    if( tipo && inteiro ) {
        if(div400) {
            return isBissexto
        } else if ( div100 ) {
            return !isBissexto
        } else if ( div4 ) {
            return isBissexto
        } else { return !isBissexto }
    } else { return 'não é número ou não é um número inteiro' }
}

function achaDia(dia, mes, anoF) {

    let isBissexto = anoValidator(anoF)
    //dia que se repete nas datas especiais na virada do seculo
    let anchorday = (5*((Math.floor(anoF/100))%4)+2)%7
    const ultimos2digStr = String(anoF).slice(-2)
    const ultimos2Dig = Number(ultimos2digStr)
    
    let doomsDayAno = (anchorday + ultimos2Dig + Math.floor(ultimos2Dig/4))%7
    
    let doomsdayMes
    switch(mes) {
        case "1": 
            if(isBissexto === true) {
                doomsdayMes = 4;
            } else {
                doomsdayMes = 3;
            }
            break;
        case "2": 
            if(isBissexto === true) {
                doomsdayMes = 29;
            } else {
                doomsdayMes = 28;
            }
            break;
        case"3": 
            doomsdayMes = 14;
            break;
        case "4": 
            doomsdayMes = 4;
            break;
        case "5": 
            doomsdayMes = 9;
            break;
        case "6": 
            doomsdayMes = 6;
            break;
        case "7": 
            doomsdayMes = 11;
            break;
        case "8": 
            doomsdayMes = 8;
            break;
        case "9": 
            doomsdayMes = 5;
            break;
        case "10": 
            doomsdayMes = 10;
            break;
        case "11": 
            doomsdayMes = 7;
            break;
        case "12": 
            doomsdayMes = 12;
            break;
        default:
            console.log("Mes errado " + mes);
            break;
    }

    let diferencaDatas = dia - doomsdayMes
    let doomsdayData = doomsDayAno + diferencaDatas
    while(doomsdayData < 0) {
        doomsdayData += 7
    }
    doomsdayData = doomsdayData%7

    switch(doomsdayData) {
        case 0:
            return 'O dia dessa data é => Domingo' 
        case 1:
            return 'O dia dessa data é => Segunda' 
        case 2:
            return 'O dia dessa data é => Terca' 
        case 3:
            return 'O dia dessa data é => Quarta' 
        case 4:
            return 'O dia dessa data é => Quinta' 
        case 5:
            return 'O dia dessa data é => Sexta' 
        case 6:
            return 'O dia dessa data é => Sabado' 
        default:
            return 'Dia da semana errado'
    }
 
}


console.log(achaDia(23, '5', 1985))