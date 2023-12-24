import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { UniversityModule } from './university/university.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env/.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: configService.get('PORT'),
        username: configService.get('PG_USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: ['./dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ConfigModule,
    AuthModule,
    StudentModule,
    GroupModule,
    UniversityModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
