"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const Locals_1 = __importDefault(require("../providers/Locals"));
class SendNewPasswordEmail {
    static sendNewPasswordEmails(email, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transporter = nodemailer_1.default.createTransport({
                    service: "gmail",
                    auth: {
                        user: Locals_1.default.config().emailUser,
                        pass: Locals_1.default.config().emailPass,
                    },
                });
                const mailOptions = {
                    from: Locals_1.default.config().emailUser,
                    to: email,
                    subject: "Your New Password",
                    text: `Your new password is: ${newPassword}`,
                };
                yield transporter.sendMail(mailOptions);
            }
            catch (error) {
                throw new Error(`Error sending email: ${error.message}`);
            }
        });
    }
    ;
}
exports.default = SendNewPasswordEmail;
