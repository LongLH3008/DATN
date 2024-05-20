"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const IUser_1 = require("../interfaces/models/IUser");
const COLLECTION_NAME = "User";
const DOCUMENT_NAME = "Users";
const Userchema = new mongoose_1.default.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_phone_number: {
        type: String,
        required: false,
    },
    user_password: {
        type: String,
        required: false,
    },
    user_status: {
        type: String,
        enum: IUser_1.UserStatus,
        default: IUser_1.UserStatus.active,
    },
    user_address: {
        type: String,
        required: false,
    },
    user_role: {
        type: String,
        enum: IUser_1.UserRole,
        default: IUser_1.UserRole.user,
    },
    user_avatar: {
        type: String,
        default: "",
    },
    user_gender: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
});
const User = mongoose_1.default.model(DOCUMENT_NAME, Userchema);
exports.default = User;
