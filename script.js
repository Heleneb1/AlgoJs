let price = 19.5;
let cid = [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
];

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
    const cashAmount = Number(cash.value);
    if (cashAmount < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (cashAmount === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
    } else {
        let change = cashAmount - price;
        const units = {
            "PENNY": 0.01,
            "NICKEL": 0.05,
            "DIME": 0.1,
            "QUARTER": 0.25,
            "ONE": 1,
            "FIVE": 5,
            "TEN": 10,
            "TWENTY": 20,
            "ONE HUNDRED": 100
        };

        let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

        if (change > totalCid) {
            changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
            return;
        } else if (change.toFixed(2) === totalCid) {
            // The drawer will be emptied exactly
            cid = cid.reverse();
            let result = [];
            cid.forEach(item => {
                if (item[1] > 0) {
                    result.push(`${item[0]}: $${item[1].toFixed(2)}`);
                }
            });
            changeDue.textContent = `Status: CLOSED ${result.join(' ')}`;
            return;
        } else {
            let result = [];
            cid = [...cid].reverse();  // Create a reversed copy to not alter the original

            cid.forEach(item => {
                let value = 0;
                while (change >= units[item[0]] && item[1] > 0) {
                    change -= units[item[0]];
                    item[1] -= units[item[0]];
                    value += units[item[0]];
                    change = Math.round(change * 100) / 100;
                }
                if (value > 0) {
                    result.push(`${item[0]}: $${value.toFixed(2)}`);
                }
            });

            if (change > 0) {
                changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
            } else {
                changeDue.textContent = `Status: OPEN ${result.join(' ')}`;
            }
        }
    }
});
