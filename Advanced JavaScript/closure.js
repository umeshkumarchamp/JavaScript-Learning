
function createBankAccount(initialBalance){
    let balance = initialBalance; 
    return {
        deposit : function(amount){
            if(amount >=0){
                balance += amount;
                console.log(`Deposit: ${amount}, Current Balance: ${balance}`)
            }
        },
        withdraw : function(amount){
            if(amount>=0 && amount < balance){
                balance -= amount;
                console.log(`Withdraw : ${amount}, Current Balance: ${balance}`);
            }
        },
        getBalance : function(){
            return balance; 
        }
    }
}
const bankAccount = createBankAccount(1000);
console.log(`Initial Balance: ${bankAccount.getBalance()}`);
bankAccount.deposit(500);
bankAccount.withdraw(100);
console.log(`Current Balance: ${bankAccount.getBalance()}`);
