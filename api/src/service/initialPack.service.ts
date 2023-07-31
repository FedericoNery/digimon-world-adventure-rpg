import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InitialPack, InitialPackDocument } from 'src/models/InitialPack.model';

@Injectable()
export class InitialPackService {
  constructor(
    @InjectModel(InitialPack.name)
    private initialPackModel: Model<InitialPackDocument>,
  ) {}

  async findAll(): Promise<InitialPack[]> {
    return this.initialPackModel.find().exec();
  }
}