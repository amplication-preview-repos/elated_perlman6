import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserPrivateInfoList } from "./userPrivateInfo/UserPrivateInfoList";
import { UserPrivateInfoCreate } from "./userPrivateInfo/UserPrivateInfoCreate";
import { UserPrivateInfoEdit } from "./userPrivateInfo/UserPrivateInfoEdit";
import { UserPrivateInfoShow } from "./userPrivateInfo/UserPrivateInfoShow";
import { UserPortugueseGoldenCoinList } from "./userPortugueseGoldenCoin/UserPortugueseGoldenCoinList";
import { UserPortugueseGoldenCoinCreate } from "./userPortugueseGoldenCoin/UserPortugueseGoldenCoinCreate";
import { UserPortugueseGoldenCoinEdit } from "./userPortugueseGoldenCoin/UserPortugueseGoldenCoinEdit";
import { UserPortugueseGoldenCoinShow } from "./userPortugueseGoldenCoin/UserPortugueseGoldenCoinShow";
import { UserHonorGloryList } from "./userHonorGlory/UserHonorGloryList";
import { UserHonorGloryCreate } from "./userHonorGlory/UserHonorGloryCreate";
import { UserHonorGloryEdit } from "./userHonorGlory/UserHonorGloryEdit";
import { UserHonorGloryShow } from "./userHonorGlory/UserHonorGloryShow";
import { UserRankingList } from "./userRanking/UserRankingList";
import { UserRankingCreate } from "./userRanking/UserRankingCreate";
import { UserRankingEdit } from "./userRanking/UserRankingEdit";
import { UserRankingShow } from "./userRanking/UserRankingShow";
import { UserOnboardingList } from "./userOnboarding/UserOnboardingList";
import { UserOnboardingCreate } from "./userOnboarding/UserOnboardingCreate";
import { UserOnboardingEdit } from "./userOnboarding/UserOnboardingEdit";
import { UserOnboardingShow } from "./userOnboarding/UserOnboardingShow";
import { GuildList } from "./guild/GuildList";
import { GuildCreate } from "./guild/GuildCreate";
import { GuildEdit } from "./guild/GuildEdit";
import { GuildShow } from "./guild/GuildShow";
import { MissionsList } from "./missions/MissionsList";
import { MissionsCreate } from "./missions/MissionsCreate";
import { MissionsEdit } from "./missions/MissionsEdit";
import { MissionsShow } from "./missions/MissionsShow";
import { GuildsPrivateInfoList } from "./guildsPrivateInfo/GuildsPrivateInfoList";
import { GuildsPrivateInfoCreate } from "./guildsPrivateInfo/GuildsPrivateInfoCreate";
import { GuildsPrivateInfoEdit } from "./guildsPrivateInfo/GuildsPrivateInfoEdit";
import { GuildsPrivateInfoShow } from "./guildsPrivateInfo/GuildsPrivateInfoShow";
import { GuildsMembersList } from "./guildsMembers/GuildsMembersList";
import { GuildsMembersCreate } from "./guildsMembers/GuildsMembersCreate";
import { GuildsMembersEdit } from "./guildsMembers/GuildsMembersEdit";
import { GuildsMembersShow } from "./guildsMembers/GuildsMembersShow";
import { GuildsJoinInvitationsList } from "./guildsJoinInvitations/GuildsJoinInvitationsList";
import { GuildsJoinInvitationsCreate } from "./guildsJoinInvitations/GuildsJoinInvitationsCreate";
import { GuildsJoinInvitationsEdit } from "./guildsJoinInvitations/GuildsJoinInvitationsEdit";
import { GuildsJoinInvitationsShow } from "./guildsJoinInvitations/GuildsJoinInvitationsShow";
import { GuildsCoinsList } from "./guildsCoins/GuildsCoinsList";
import { GuildsCoinsCreate } from "./guildsCoins/GuildsCoinsCreate";
import { GuildsCoinsEdit } from "./guildsCoins/GuildsCoinsEdit";
import { GuildsCoinsShow } from "./guildsCoins/GuildsCoinsShow";
import { UserInvitationsList } from "./userInvitations/UserInvitationsList";
import { UserInvitationsCreate } from "./userInvitations/UserInvitationsCreate";
import { UserInvitationsEdit } from "./userInvitations/UserInvitationsEdit";
import { UserInvitationsShow } from "./userInvitations/UserInvitationsShow";
import { UserGodsonList } from "./userGodson/UserGodsonList";
import { UserGodsonCreate } from "./userGodson/UserGodsonCreate";
import { UserGodsonEdit } from "./userGodson/UserGodsonEdit";
import { UserGodsonShow } from "./userGodson/UserGodsonShow";
import { AnnouncementList } from "./announcement/AnnouncementList";
import { AnnouncementCreate } from "./announcement/AnnouncementCreate";
import { AnnouncementEdit } from "./announcement/AnnouncementEdit";
import { AnnouncementShow } from "./announcement/AnnouncementShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductsCategoryList } from "./productsCategory/ProductsCategoryList";
import { ProductsCategoryCreate } from "./productsCategory/ProductsCategoryCreate";
import { ProductsCategoryEdit } from "./productsCategory/ProductsCategoryEdit";
import { ProductsCategoryShow } from "./productsCategory/ProductsCategoryShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { TransactionsPortugueseCoinsList } from "./transactionsPortugueseCoins/TransactionsPortugueseCoinsList";
import { TransactionsPortugueseCoinsCreate } from "./transactionsPortugueseCoins/TransactionsPortugueseCoinsCreate";
import { TransactionsPortugueseCoinsEdit } from "./transactionsPortugueseCoins/TransactionsPortugueseCoinsEdit";
import { TransactionsPortugueseCoinsShow } from "./transactionsPortugueseCoins/TransactionsPortugueseCoinsShow";
import { TransactionsHonorGloryList } from "./transactionsHonorGlory/TransactionsHonorGloryList";
import { TransactionsHonorGloryCreate } from "./transactionsHonorGlory/TransactionsHonorGloryCreate";
import { TransactionsHonorGloryEdit } from "./transactionsHonorGlory/TransactionsHonorGloryEdit";
import { TransactionsHonorGloryShow } from "./transactionsHonorGlory/TransactionsHonorGloryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"vimperio-api"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserPrivateInfo"
          list={UserPrivateInfoList}
          edit={UserPrivateInfoEdit}
          create={UserPrivateInfoCreate}
          show={UserPrivateInfoShow}
        />
        <Resource
          name="UserPortugueseGoldenCoin"
          list={UserPortugueseGoldenCoinList}
          edit={UserPortugueseGoldenCoinEdit}
          create={UserPortugueseGoldenCoinCreate}
          show={UserPortugueseGoldenCoinShow}
        />
        <Resource
          name="UserHonorGlory"
          list={UserHonorGloryList}
          edit={UserHonorGloryEdit}
          create={UserHonorGloryCreate}
          show={UserHonorGloryShow}
        />
        <Resource
          name="UserRanking"
          list={UserRankingList}
          edit={UserRankingEdit}
          create={UserRankingCreate}
          show={UserRankingShow}
        />
        <Resource
          name="UserOnboarding"
          list={UserOnboardingList}
          edit={UserOnboardingEdit}
          create={UserOnboardingCreate}
          show={UserOnboardingShow}
        />
        <Resource
          name="Guild"
          list={GuildList}
          edit={GuildEdit}
          create={GuildCreate}
          show={GuildShow}
        />
        <Resource
          name="Missions"
          list={MissionsList}
          edit={MissionsEdit}
          create={MissionsCreate}
          show={MissionsShow}
        />
        <Resource
          name="GuildsPrivateInfo"
          list={GuildsPrivateInfoList}
          edit={GuildsPrivateInfoEdit}
          create={GuildsPrivateInfoCreate}
          show={GuildsPrivateInfoShow}
        />
        <Resource
          name="GuildsMembers"
          list={GuildsMembersList}
          edit={GuildsMembersEdit}
          create={GuildsMembersCreate}
          show={GuildsMembersShow}
        />
        <Resource
          name="GuildsJoinInvitations"
          list={GuildsJoinInvitationsList}
          edit={GuildsJoinInvitationsEdit}
          create={GuildsJoinInvitationsCreate}
          show={GuildsJoinInvitationsShow}
        />
        <Resource
          name="GuildsCoins"
          list={GuildsCoinsList}
          edit={GuildsCoinsEdit}
          create={GuildsCoinsCreate}
          show={GuildsCoinsShow}
        />
        <Resource
          name="UserInvitations"
          list={UserInvitationsList}
          edit={UserInvitationsEdit}
          create={UserInvitationsCreate}
          show={UserInvitationsShow}
        />
        <Resource
          name="UserGodson"
          list={UserGodsonList}
          edit={UserGodsonEdit}
          create={UserGodsonCreate}
          show={UserGodsonShow}
        />
        <Resource
          name="Announcement"
          list={AnnouncementList}
          edit={AnnouncementEdit}
          create={AnnouncementCreate}
          show={AnnouncementShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ProductsCategory"
          list={ProductsCategoryList}
          edit={ProductsCategoryEdit}
          create={ProductsCategoryCreate}
          show={ProductsCategoryShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="TransactionsPortugueseCoins"
          list={TransactionsPortugueseCoinsList}
          edit={TransactionsPortugueseCoinsEdit}
          create={TransactionsPortugueseCoinsCreate}
          show={TransactionsPortugueseCoinsShow}
        />
        <Resource
          name="TransactionsHonorGlory"
          list={TransactionsHonorGloryList}
          edit={TransactionsHonorGloryEdit}
          create={TransactionsHonorGloryCreate}
          show={TransactionsHonorGloryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
