import {Grid} from "theme-ui";
import Head from "next/head";

import Hero from "../components/Hero";
import LandingHeroCTA from "../components/LandingHeroCTA";
import {Container} from "../components/Container";
import {Card, CardDetail, CardGraphic} from "../components/Card";
import FeaturesGrid from "../components/FeaturesGrid";
import LinkBanner from "../components/LinkBanner";
import Footer from "../components/Footer";
import UniversalNav from "../components/UniversalNav";

const Page = () => {
  return (
    <>
      <Head>
        <title>Amplify Framework Docs</title>
        <link rel="next" href="/start/q/integration/js" />
        <link rel="next" href="/start" />
        <link rel="next" href="/start/q/integration/react" />
        <link rel="next" href="/start/q/integration/vue" />
        <link rel="next" href="/start/q/integration/js" />
        <link rel="next" href="/start/q/integration/ios" />
        <link rel="next" href="/start/q/integration/android" />
        <link rel="next" href="/start/q/integration/flutter" />
        <link rel="next" href="/lib/q/platform/js" />
        <link rel="next" href="/cli" />
        <link rel="next" href="/console" />
        <link rel="next" href="/console/adminui/intro" />
        <link rel="next" href="/lib/auth/getting-started" />
        <link rel="next" href="/lib/storage/getting-started" />
        <link rel="next" href="/lib/graphqlapi/getting-started" />
        <link rel="next" href="/lib/datastore/getting-started" />
        <link rel="next" href="/lib/restapi/getting-started" />
        <link rel="next" href="/lib/analytics/getting-started" />
        <link rel="next" href="/lib/push-notifications/getting-started" />
        <link rel="next" href="/lib/xr/getting-started" />
        <link rel="next" href="/lib/pubsub/getting-started" />
        <link rel="next" href="/lib/interactions/getting-started" />
        <link rel="next" href="/lib/predictions/getting-started" />
      </Head>
      <UniversalNav
        heading="Amplify Docs"
        brandIcon="/assets/logo-dark.svg"
        blend={true}
      />
      <Hero>
        <h1 className="font-weight-300">Amplify Framework Documentation</h1>
        <p>
          Learn how to use Amplify to develop and deploy cloud-powered mobile
          and web apps
        </p>
        <LandingHeroCTA />
      </Hero>

      <Container backgroundColor="color-off-white">
        <div className="padding-top-lg padding-bottom-lg padding-horizontal-md">
          <h4 className="text-align-center">
            Discover the end-to-end AWS solution for mobile and front-end web
            developers
          </h4>

          <Grid
            columns={[1, null, null, 4]}
            gap={4}
            sx={{
              marginTop: "2rem",
            }}
          >
            <Card href="/lib/q/platform/js">
              <CardGraphic src="/assets/lib.png" />
              <CardDetail>
                <h4>Amplify Libraries</h4>
                <p>
                  Connect app to new or existing AWS services (Cognito, S3, and
                  more).
                </p>
              </CardDetail>
            </Card>
            <Card href="/cli">
              <CardGraphic src="/assets/cli.png" />
              <CardDetail>
                <h4>Amplify CLI</h4>
                <p>Configure an app backend with a guided CLI workflow.</p>
              </CardDetail>
            </Card>
            <Card href="/console">
              <CardGraphic src="/assets/console.png" />
              <CardDetail>
                <h4>Amplify Console</h4>
                <p>
                  AWS service for creating an app backend and hosting full-stack
                  web apps.
                </p>
              </CardDetail>
            </Card>
            <Card href="/console/adminui/intro">
              <CardGraphic src="/assets/console.png" />
              <CardDetail>
                <h4>NEW! Amplify Admin UI</h4>
                <p>Visually configure and manage your app backend.</p>
              </CardDetail>
            </Card>
          </Grid>
        </div>
      </Container>

      <FeaturesGrid />
      <LinkBanner />
      <Footer />
    </>
  );
};

export default Page;
