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



let coffee = 701
let upgrades = Object.assign([], clickUpgrades, autoUpgrades)


function mine() {
    coffee++
    for (const key in clickUpgrades) {
        const clickUpgrade = clickUpgrades[key];
        if (clickUpgrade.quantity >= 1) {
            coffee += clickUpgrade.quantity * clickUpgrade.multiplier
        }
    }
    drawInventory()

}

function drawInventory() {
    document.getElementById('espresso-count').innerText = coffee
    for (const key in upgrades) {
        const upgrade = upgrades[key];
        document.getElementById(key).innerText = upgrade.quantity
    }
}

function buyUpgrade(upgradeKey) {
    const upgrade = upgrades[upgradeKey];
    if (coffee >= upgrade.price) {
        upgrade.quantity += 1
        coffee -= upgrade.price
    }
    drawInventory()
}


function drawPrice() {
    document.getElementById(`test`).innerText = clickUpgrades.beanGrinder.price
}

function increasePrice() {
    if (clickUpgrades.beanGrinder.quantity >= 1) {
        clickUpgrades.beanGrinder.price += clickUpgrades.beanGrinder.price * 1

    }
    drawPrice()
}

// function buyButton() {
//     const
//     if (coffee >= ) {

//     }
// }


function collectAutoUpgrades() {
    for (const key in autoUpgrades) {
        const autoUpgrade = autoUpgrades[key];
        if (autoUpgrade.quantity >= 1) {
            coffee += autoUpgrade.quantity * autoUpgrade.multiplier
        }
    }
    drawInventory()
    console.log('we vibin')
}

function startInterval() {
    setInterval(collectAutoUpgrades, 3000);
}


startInterval()





// ..................OLD FUNCTIONS....................//

// if (clickUpgrades.beanGrinder.quantity >= 1) {
//     coffee += 1 + clickUpgrades.beanGrinder.quantity * 1
// }

// function drawAutoInventory() {
//     let template = ''
//     for (const key in autoUpgrades) {
//         const autoUpgrade = autoUpgrades[key];
//         document.getElementById(key).innerText = autoUpgrade.quantity
//     }

// }

// ASK HOW BEST TO TEMPLATE THIS????? DO I ASSIGN ID? 

// document.getElementById('machine').innerText = clickUpgrades.espressoMachine.quantity

// function buyClickUpgrade(upgradeKey) {
//     const clickUpgrade = clickUpgrades[upgradeKey];
//     if (coffee >= clickUpgrade.price) {
//         clickUpgrade.quantity += 1
//         coffee -= clickUpgrade.price
//     }
//     // ASK HOW DO I RECURSE THIS FUNCTION TO INCLUDE BOTH DICTIONARIES?
//     drawInventory()
// }

// function buyAutoUpgrade(upgradeKey) {
//     const autoUpgrade = autoUpgrades[upgradeKey];
//     if (coffee >= autoUpgrade.price) {
//         autoUpgrade.quantity += 1
//         coffee -= autoUpgrade.price
//     }
//     drawAutoInventory()
// }