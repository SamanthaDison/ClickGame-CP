let clickUpgrades = {
    beanGrinder: {
        price: 100,
        quantity: 0,
        multiplier: 1,
    },
    espressoMachine: {
        price: 300,
        quantity: 0,
        multiplier: 5,
    }
}

let autoUpgrades = {
    barista: {
        price: 600,
        quantity: 0,
        multiplier: 20,
    },
    manager: {
        price: 1000,
        quantity: 0,
        multiplier: 30,
    }

}



let coffee = 101


function mine() {
    coffee++
    for (const key in clickUpgrades) {
        const clickUpgrade = clickUpgrades[key];
        if (clickUpgrade.quantity >= 1) {
            coffee += clickUpgrade.quantity * clickUpgrade.multiplier
        }
    }
    inventory()
}


function inventory() {
    document.getElementById('espresso-count').innerText = coffee
    document.getElementById('bGrind').innerText = clickUpgrades.beanGrinder.quantity
}

function buyClickUpgrade() {
    for (const key in clickUpgrades) {
        const clickUpgrade = clickUpgrades[key];

    }


    // if (coffee >= 100) {
    //     clickUpgrades.beanGrinder.quantity += 1
    //     coffee -= 100
    //     console.log('getbeans', clickUpgrades.beanGrinder.quantity)
    //     inventory()
    // }
}

inventory()

// if (clickUpgrades.beanGrinder.quantity >= 1) {
//     coffee += 1 + clickUpgrades.beanGrinder.quantity * 1
// }