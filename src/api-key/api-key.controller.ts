import { Controller, Get, UseGuards } from '@nestjs/common';
import { TestService } from './api-key.service';
import { ApiHeader } from '@nestjs/swagger';
import { ApiKeyGuard } from './api-key.guard';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @ApiHeader({
    name: 'Authorization',
    description: 'API key authentication',
    required: true,
  })
  @UseGuards(ApiKeyGuard)
  @Get()
  getHello(): string {
    return this.testService.getHello();
  }
}
