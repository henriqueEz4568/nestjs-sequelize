import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from '../modules/auth/public';

@Controller('files')
export class FilesController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
  ): Promise<any> {
    console.log(req.user);
    return body;
  }
}
