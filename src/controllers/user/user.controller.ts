import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { AdminGuard } from 'src/guards/admin/admin.guard';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { UserService } from 'src/services/user/user.service';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AdminGuard)
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('list')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userName')
  findOne(@Param('userName') userName: string) {
    return this.userService.findOne(userName);
  }

  @UseGuards(AdminGuard)
  @Patch(':id/update')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id/delete')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.delete(id);
  }
}
