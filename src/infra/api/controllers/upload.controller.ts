import {
  Body,
  Controller,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';

@Controller('files')
export class FilesController {
  constructor() {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Body() body: any,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 7000 })],
      }),
    )
    file: Express.Multer.File,
  ): Promise<any | { success: boolean; message: string }> {
    try {
      return file;
    } catch (e: any) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
