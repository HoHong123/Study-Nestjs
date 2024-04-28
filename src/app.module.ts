import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BoardsModule, LoginModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
