import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalService } from './external-service/external-service.service';
import { UrlService } from './http/url/url.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ExternalService, UrlService],
})
export class AppModule {}
