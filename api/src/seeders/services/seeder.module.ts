import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../models/User.model';
import { UsersSeederService } from './users.seeder.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersSeederService],
  exports: [UsersSeederService],
})
export class SeederModule {}
