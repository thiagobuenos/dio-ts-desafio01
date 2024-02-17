export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  deposit(deposit: number): void {
    if (!this.validateStatus()) return
    this.balance += deposit
    console.log('Seu saldo atual é de R$', this.balance)
  }

  withdraw(withdraw: number): void {
    if (!this.validateStatus()) return
    if (this.balance < withdraw) return console.log('Saldo insuficiente')
    this.balance -= withdraw
    console.log('Seu saldo atual é de R$', this.balance)
  }

  getBalance(): void {
    console.log(this.balance)
  }

  protected validateStatus(): boolean {
    if (this.status) return this.status
    throw new Error('Conta inválida')
  }
}
