"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const tag_service_1 = require("../../services/tag/tag.service");
const create_tag_dto_1 = require("../../dtos/tag/create-tag.dto");
const update_tag_dto_1 = require("../../dtos/tag/update-tag.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../guards/auth/auth.guard");
const admin_guard_1 = require("../../guards/admin/admin.guard");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    create(createTagDto) {
        return this.tagService.create(createTagDto);
    }
    findAll() {
        return this.tagService.findAll();
    }
    findOne(id) {
        return this.tagService.findOne(id);
    }
    update(id, updateTagDto) {
        return this.tagService.update(id, updateTagDto);
    }
    delete(id) {
        return this.tagService.remove(id);
    }
};
exports.TagController = TagController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: require("../../entities/tag.entity").Tag }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDto]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    openapi.ApiResponse({ status: 200, type: [require("../../entities/tag.entity").Tag] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../entities/tag.entity").Tag }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id/update'),
    openapi.ApiResponse({ status: 200, type: require("../../entities/tag.entity").Tag }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tag_dto_1.UpdateTagDto]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id/delete'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "delete", null);
exports.TagController = TagController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiTags)('Tag'),
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
//# sourceMappingURL=tag.controller.js.map