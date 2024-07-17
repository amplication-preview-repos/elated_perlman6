import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { OrganizationModule } from "./organization/organization.module";
import { UserModule } from "./user/user.module";
import { UserPrivateInfoModule } from "./userPrivateInfo/userPrivateInfo.module";
import { UserPortugueseGoldenCoinModule } from "./userPortugueseGoldenCoin/userPortugueseGoldenCoin.module";
import { UserHonorGloryModule } from "./userHonorGlory/userHonorGlory.module";
import { UserRankingModule } from "./userRanking/userRanking.module";
import { UserOnboardingModule } from "./userOnboarding/userOnboarding.module";
import { GuildModule } from "./guild/guild.module";
import { MissionsModule } from "./missions/missions.module";
import { GuildsPrivateInfoModule } from "./guildsPrivateInfo/guildsPrivateInfo.module";
import { GuildsMembersModule } from "./guildsMembers/guildsMembers.module";
import { GuildsJoinInvitationsModule } from "./guildsJoinInvitations/guildsJoinInvitations.module";
import { GuildsCoinsModule } from "./guildsCoins/guildsCoins.module";
import { UserInvitationsModule } from "./userInvitations/userInvitations.module";
import { UserGodsonModule } from "./userGodson/userGodson.module";
import { AnnouncementModule } from "./announcement/announcement.module";
import { ProductModule } from "./product/product.module";
import { ProductsCategoryModule } from "./productsCategory/productsCategory.module";
import { EventModule } from "./event/event.module";
import { TransactionsPortugueseCoinsModule } from "./transactionsPortugueseCoins/transactionsPortugueseCoins.module";
import { TransactionsHonorGloryModule } from "./transactionsHonorGlory/transactionsHonorGlory.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    LoggerModule,
    OrganizationModule,
    UserModule,
    UserPrivateInfoModule,
    UserPortugueseGoldenCoinModule,
    UserHonorGloryModule,
    UserRankingModule,
    UserOnboardingModule,
    GuildModule,
    MissionsModule,
    GuildsPrivateInfoModule,
    GuildsMembersModule,
    GuildsJoinInvitationsModule,
    GuildsCoinsModule,
    UserInvitationsModule,
    UserGodsonModule,
    AnnouncementModule,
    ProductModule,
    ProductsCategoryModule,
    EventModule,
    TransactionsPortugueseCoinsModule,
    TransactionsHonorGloryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
