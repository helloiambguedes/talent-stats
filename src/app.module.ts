import { Module } from '@nestjs/common';
import { UserController } from './resources/user/controller';
import { UserService } from './resources/user/service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
