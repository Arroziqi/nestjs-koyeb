import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TimeHelper } from 'src/common/helper/time.helper';
import { PrismaService } from './service/prisma.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [PrismaService, TimeHelper],
  exports: [PrismaService, TimeHelper],
})
export class CommonModule {}
