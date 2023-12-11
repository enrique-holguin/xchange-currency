import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let userService: UserService;

  interface LoginUser extends CreateUserDto {
    accesToken: number;
  }

  const mockAuthService = {
    login: jest.fn().mockImplementation(
      (value: CreateUserDto): LoginUser => ({
        ...value,
        accesToken: 1,
      }),
    ),
    validateUser: jest.fn(),
  };

  const mockUserService = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, UserService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('registerUser', () => {
    it('should call userService.create with the correct data', async () => {
      const createUserDto: CreateUserDto = {
        name: 'testUser',
        email: 'test@email.com',
        password: 'Test123@',
      };

      await authController.registerUser(createUserDto);

      expect(userService.create).toHaveBeenCalledWith(createUserDto);

      const createdUser: CreateUserDto =
        mockUserService.create.mock.calls[0][0];
      expect(createdUser.name).toBe(createUserDto.name);
      expect(createdUser.email).toBe(createUserDto.email);

      const data = await authController.login({ user: createdUser });
      console.log(data);
      expect(mockAuthService.login).toHaveBeenCalledWith(createdUser);
    });
  });
});
