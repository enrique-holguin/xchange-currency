import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from './user/entities/user.entity';

const configDB: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'xcurrency',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  entities: [User],
  synchronize: true,
};

export default configDB;
