"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComplimentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_compliment_dto_1 = require("./create-compliment.dto");
class UpdateComplimentDto extends (0, swagger_1.PartialType)(create_compliment_dto_1.CreateComplimentDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateComplimentDto = UpdateComplimentDto;
//# sourceMappingURL=update-compliment.dto.js.map