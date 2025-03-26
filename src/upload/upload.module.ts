import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './upload.entity';

@Module({
    imports  : [
        MulterModule.register({
            storage : diskStorage({
                destination : './shweta',
                filename : (req, file , cb) =>{
                    const uniqueName = Date.now() + '-' + Math.random(); // Make a unique name
                    cb(null , file.fieldname + '-' + uniqueName + extname(file.originalname));
                }
            }),
            fileFilter : (req, file , cb) =>{
                if (file.mimetype.startsWith('image') || file.mimetype.startsWith('video')) {
                    cb(null, true); 
                  } else {
                    cb(new Error('Only images and videos allowed!'), false); 
                  }
            }
        }),
        TypeOrmModule.forFeature([FileEntity])
    ],
    controllers : [UploadController],
    providers : [UploadService]
})
export class UploadModule {}
