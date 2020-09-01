import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleController } from './user-module/user-module.controller';
import { UserModuleModule } from './user-module/user-module.module';

@Module({
  imports: [UserModuleModule],
  controllers: [AppController, UserModuleController],
  providers: [AppService],
})
export default class AppModule {}
