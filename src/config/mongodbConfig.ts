import { ConfigModule as CustomConfigModule } from '../components/config/config.module';
import { ConfigService } from '../components/config/config.service';

export default {
  imports: [CustomConfigModule],
    useFactory: async (configService: ConfigService) => ({
  uri: configService.get('MONGODB_URI'),
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
  inject: [ConfigService],
};
