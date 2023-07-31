import { Query, Resolver } from '@nestjs/graphql';
import { InitialPack } from 'src/models/InitialPack.model';
import { InitialPackService } from 'src/service/initialPack.service';

@Resolver((of) => InitialPack)
export class InitialPackResolver {
  constructor(private initialPackService: InitialPackService) {}

  @Query(() => [InitialPack])
  async initialPacks() {
    const initialPacks = await this.initialPackService.findAll();
    return initialPacks;
  }
}