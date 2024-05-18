import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { UserService } from 'src/services/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../../entities/user.entity").User>;
    findAll(): Promise<import("../../entities/user.entity").User[]>;
    findOne(userName: string): Promise<import("../../entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../../entities/user.entity").User>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
