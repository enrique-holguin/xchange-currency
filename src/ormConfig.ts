import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from './user/entities/user.entity';
import { Currency } from './common/entities/currency.entity';

const configDB: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'xcurrency',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  entities: [User, Currency],
  synchronize: true,
};

export default configDB;
