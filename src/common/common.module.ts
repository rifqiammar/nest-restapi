import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { ValidationService } from './validation.service';
import * as winston from 'winston';

@Global()
@Module({
  imports: [
    WinstonModule.forRoot({
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ValidationService],
})
export class CommonModule {}
