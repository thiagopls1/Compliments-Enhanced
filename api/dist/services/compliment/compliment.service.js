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
exports.ComplimentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const compliment_entity_1 = require("../../entities/compliment.entity");
const tag_entity_1 = require("../../entities/tag.entity");
const user_entity_1 = require("../../entities/user.entity");
const typeorm_2 = require("typeorm");
let ComplimentService = class ComplimentService {
    constructor(complimentRepository, userRepository, tagRepository) {
        this.complimentRepository = complimentRepository;
        this.userRepository = userRepository;
        this.tagRepository = tagRepository;
    }
    async create(createComplimentDto) {
        const compliment = new compliment_entity_1.Compliment();
        if (!this.userRepository.findOneBy({ id: createComplimentDto.userReceiverId }))
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        if (!this.tagRepository.findOneBy({ id: createComplimentDto.tagId }))
            throw new common_1.HttpException('Tag not found', common_1.HttpStatus.NOT_FOUND);
        compliment.userReceiver = await this.userRepository.findOneBy({
            id: createComplimentDto.userReceiverId,
        });
        compliment.tag = await this.tagRepository.findOneBy({
            id: createComplimentDto.tagId,
        });
        compliment.message = createComplimentDto.message;
        return this.complimentRepository.save(compliment);
    }
    listSent(userSenderId) {
        if (!this.userRepository.findOneBy({ id: userSenderId }))
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        return this.complimentRepository.findBy({ userSenderId });
    }
    listReceived(userReceiverId) {
        if (!this.userRepository.findOneBy({ id: userReceiverId }))
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        return this.complimentRepository.findBy({ userReceiverId });
    }
    delete(id) {
        if (!this.complimentRepository.findOneBy({ id })) {
            throw new common_1.HttpException('Compliment not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.complimentRepository.delete({ id });
    }
};
exports.ComplimentService = ComplimentService;
exports.ComplimentService = ComplimentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(compliment_entity_1.Compliment)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ComplimentService);
//# sourceMappingURL=compliment.service.js.map