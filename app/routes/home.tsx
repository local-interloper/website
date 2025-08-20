import PageWrapper from "~/components/page-wrapper";
import Screen from "~/components/screen";
import VguiWindow from "~/components/vgui-window";

const Home = () => {
  return (
    <PageWrapper>
      <Screen>
        <VguiWindow title="Welcome Message" frameClassNames="min-w-[300px]">
          <article className="flex gap-md">
            <section className="flex flex-col w-full gap-sm">
              <span className="title">Hey there!</span>
              <section className="flex flex-col">
                <span>Welcome to local.interloper.me</span>
                <span>Use the top navbar to navigate!</span>
              </section>
            </section>
            <section className="flex flex-col">
              <section className="h-32 w-32 frame-inset">
                <img alt="local.interloper's avatar" src="images/pfp.png"></img>
              </section>
            </section>
          </article>
        </VguiWindow>
      </Screen>
    </PageWrapper>
  );
};

export default Home;
