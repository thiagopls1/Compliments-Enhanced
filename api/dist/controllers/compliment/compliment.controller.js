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
exports.ComplimentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_compliment_dto_1 = require("../../dtos/compliment/create-compliment.dto");
const auth_guard_1 = require("../../guards/auth/auth.guard");
const compliment_service_1 = require("../../services/compliment/compliment.service");
let ComplimentController = class ComplimentController {
    constructor(complimentService) {
        this.complimentService = complimentService;
    }
    create(createComplimentDto) {
        return this.complimentService.create(createComplimentDto);
    }
    listReceived(id) {
        return this.complimentService.listReceived(id);
    }
    listSent(id) {
        return this.complimentService.listSent(id);
    }
    delete(id) {
        return this.complimentService.delete(id);
    }
};
exports.ComplimentController = ComplimentController;
__decorate([
    (0, common_1.Post)('/compliment/create'),
    openapi.ApiResponse({ status: 201, type: require("../../entities/compliment.entity").Compliment }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_compliment_dto_1.CreateComplimentDto]),
    __metadata("design:returntype", void 0)
], ComplimentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/compliment/recieved'),
    openapi.ApiResponse({ status: 200, type: [require("../../entities/compliment.entity").Compliment] }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComplimentController.prototype, "listReceived", null);
__decorate([
    (0, common_1.Get)(':id/compliment/sent'),
    openapi.ApiResponse({ status: 200, type: [require("../../entities/compliment.entity").Compliment] }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComplimentController.prototype, "listSent", null);
__decorate([
    (0, common_1.Delete)('compliment/:id/delete'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComplimentController.prototype, "delete", null);
exports.ComplimentController = ComplimentController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiTags)('Compliment'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [compliment_service_1.ComplimentService])
], ComplimentController);
//# sourceMappingURL=compliment.controller.js.map