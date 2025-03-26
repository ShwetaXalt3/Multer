import { Module } from '@nestjs/common';
import { UploadModule } from './upload/upload.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
            type: "postgres",
            host : "localhost",
            port : 5433,
            username : "postgres",
            password : "123456",
            database : "postgres",
            autoLoadEntities : true,
            synchronize: true
    }),
    
    UploadModule],

})
export class AppModule {}
