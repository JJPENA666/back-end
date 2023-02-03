import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ModulesModule } from './modules/product.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './modules/ventas/ventas.module';

@Module({
  imports: [DatabaseModule, ModulesModule, SharedModule, VentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
