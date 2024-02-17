import { CompanyAccount } from './class/CompanyAccount';
import { SuperAccount } from './class/SuperAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(11111, 'Thiago', 125648);
console.table(peopleAccount);
peopleAccount.getBalance()
peopleAccount.deposit(320);
peopleAccount.withdraw(300);

console.log('############');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 154584);
console.table(companyAccount);
companyAccount.getBalance()
companyAccount.getLoan(1500);
companyAccount.getBalance()

console.log('############');

const superAccount: SuperAccount = new SuperAccount('Super', 51584);
console.table(superAccount);
superAccount.getBalance();
superAccount.deposit(300);