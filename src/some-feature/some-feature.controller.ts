import { Controller, Get, Query } from '@nestjs/common';
import { SomeFeatureService } from './some-feature.service';

@Controller('some-feature')
export class SomeFeatureController {
  constructor(private readonly someFeatureService: SomeFeatureService) {}

  @Get()
  getSortedData(@Query('sortBy') sortBy: string, @Query('order') order: 'asc' | 'desc' = 'asc') {
    const data = this.someFeatureService.getData();

    if (sortBy) {
      return this.someFeatureService.sortData(data, sortBy, order);
    }

    return data;
  }
}
