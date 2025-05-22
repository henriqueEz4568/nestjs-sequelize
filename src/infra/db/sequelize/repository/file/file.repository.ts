import File from "@entities/file/file.entity";
import { IFileRepository } from "@entities/file/repository/file.repository.interface";

export default class FileRepository implements IFileRepository{
    
   async create(entity: File): Promise<File> {
        
    }
    async getAll(): Promise<File[]> {
        
    }
}