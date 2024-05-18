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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compliment = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const tag_entity_1 = require("./tag.entity");
let Compliment = class Compliment {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, userSender: { required: true, type: () => require("./user.entity").User }, userReceiver: { required: true, type: () => require("./user.entity").User }, tag: { required: true, type: () => require("./tag.entity").Tag }, message: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, userSenderId: { required: true, type: () => String }, userReceiverId: { required: true, type: () => String }, tagId: { required: true, type: () => String } };
    }
};
exports.Compliment = Compliment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Compliment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'userSenderId' }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Compliment.prototype, "userSender", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'userReceiverId' }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Compliment.prototype, "userReceiver", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'tagId' }),
    (0, typeorm_1.ManyToOne)(() => tag_entity_1.Tag),
    __metadata("design:type", tag_entity_1.Tag)
], Compliment.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Compliment.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Compliment.prototype, "createdAt", void 0);
exports.Compliment = Compliment = __decorate([
    (0, typeorm_1.Entity)()
], Compliment);
//# sourceMappingURL=compliment.entity.js.map