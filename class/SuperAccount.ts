import { DioAccount } from "./DioAccount";

export class SuperAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (deposit: number): void => {
    console.log('Depositando R$', deposit)
    super.deposit(deposit + 10)
  };
}