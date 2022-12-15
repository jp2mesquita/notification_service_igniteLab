import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsReposotory } from './prisma/repositories/prisma-notifications-repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsReposotory,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
