import React from "react";
import Promo from "../../components/promo";
import NewExperience from "../../components/newExperience";
import SignatureDish from "../../components/signatureDish";
import DefaultLayout from "../../layout/defaultLayout";
import Menu from "../../components/menu";

const Home = () => (
  <DefaultLayout>
    <Promo
      particle="is"
      title="An Extraordinery Experience"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus."
      homeStyles='homeStyles'
    />

    <NewExperience />

    <SignatureDish />

    <Menu title="The Menu" subtitle="5 Stars" />
  </DefaultLayout>
);

export default Home;
