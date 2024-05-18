"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplimentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const compliment_controller_1 = require("../controllers/compliment/compliment.controller");
const compliment_entity_1 = require("../entities/compliment.entity");
const tag_entity_1 = require("../entities/tag.entity");
const user_entity_1 = require("../entities/user.entity");
const compliment_service_1 = require("../services/compliment/compliment.service");
let ComplimentModule = class ComplimentModule {
};
exports.ComplimentModule = ComplimentModule;
exports.ComplimentModule = ComplimentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([compliment_entity_1.Compliment, user_entity_1.User, tag_entity_1.Tag])],
        controllers: [compliment_controller_1.ComplimentController],
        providers: [compliment_service_1.ComplimentService],
    })
], ComplimentModule);
//# sourceMappingURL=compliment.module.js.map