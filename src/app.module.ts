import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig)],
})

export class AppModule {}
