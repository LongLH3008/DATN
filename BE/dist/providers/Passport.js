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
const passport_1 = __importDefault(require("passport"));
const Locals_1 = __importDefault(require("./Locals"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const User_model_1 = __importDefault(require("../models/User.model"));
const IUser_1 = require("../interfaces/models/IUser");
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
class Passport {
    init(_express) {
        console.log('Passport :: mounting...');
        // thiet lap phien
        _express = _express.use(passport_1.default.initialize());
        _express = _express.use(passport_1.default.session());
        // người dùng đăng nhập 
        passport_1.default.serializeUser((user, done) => {
            done(null, user);
        });
        // trả thông tin sau khi người dùng đăng nhập thành công 
        passport_1.default.deserializeUser((user, done) => {
            done(null, user);
        });
        // thiết lâp đối tượng đăng nhập 
        passport_1.default.use(new GoogleStrategy({
            clientID: Locals_1.default.config().google_client_id,
            clientSecret: Locals_1.default.config().google_client_secret,
            callbackURL: Locals_1.default.config().google_url_callback
        }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
            console.log(profile);
            //check người dùng tồn tại hay chưa 
            const checkUser = yield User_model_1.default.findOne({
                user_email: profile.emails[0].value,
                user_auth_type: IUser_1.UserTypeAuth.google
            });
            if (!checkUser) {
                const newUser = yield User_model_1.default.create({
                    user_email: profile.emails[0].value,
                    user_name: profile.displayName,
                    user_auth_type: IUser_1.UserTypeAuth.google,
                    user_avatar: profile.photos[0].value
                });
                return done(null, newUser);
            }
            return done(null, checkUser);
        })));
        return _express;
    }
}
exports.default = new Passport;
