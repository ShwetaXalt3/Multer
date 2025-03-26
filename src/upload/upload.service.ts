import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor (@InjectRepository(FileEntity)
private readonly fileRespo : Repository<FileEntity>) {}

async savefile(file : Express.Multer.File) : Promise<FileEntity>{
      const newfile = this.fileRespo.create({
        filename : file.filename,
        path : file.path,
        mimetype : file.mimetype
      })

    return this.fileRespo.save(newfile);
}

async getfile(){
    return this.fileRespo.find();
}

}
