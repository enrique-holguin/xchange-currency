import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from './user/entities/user.entity';
import { ExchangeCurrency } from './exchange/entities/exchange-currency.entity';
import { Currency } from './exchange/entities/currency.entity';

const configDB: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'xcurrency',
  host: 'host.docker.internal',
  port: 3306,
  username: 'root',
  password: 'admin',
  entities: [User, Currency, ExchangeCurrency],
  synchronize: true,
};

export default configDB;
