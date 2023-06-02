import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  async convertAmount({
    from,
    to,
    amount,
  }: {
    from: string;
    to: string;
    amount: number;
  }): Promise<any> {
    if (!from || !to || !amount) {
      throw new Error();
    }
  }
}
