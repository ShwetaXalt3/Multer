import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService : UploadService){}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file : Express.Multer.File){
            const saved = await this.uploadService.savefile(file);
            return {message:  'file uploaded successfully'}
    }

    @Get()
    async getAllFiles(){
        return this.uploadService.getfile();
    }
}
