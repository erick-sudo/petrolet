import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  welcome() {
    return {
      title: 'Petrolet',
      www: this.configService.get<string>('FRONTEND_HOST'),
    };
  }
}
