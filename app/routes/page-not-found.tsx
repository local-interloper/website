import { BsExclamationDiamond, BsExclamationTriangle } from "react-icons/bs";
import LinkButton from "~/components/link-button";
import PageWrapper from "~/components/page-wrapper";
import Screen from "~/components/screen";
import VguiWindow from "~/components/vgui-window";

const PageNotFound = () => (
  <PageWrapper>
    <Screen>
      <VguiWindow
        Icon={BsExclamationTriangle}
        title="Error 404"
        className="min-w-[90svw] md:min-w-sm"
      >
        <article className="flex flex-col items-center gap-md">
          <section>
            <p>Page Not Found</p>
          </section>
          <section>
            <LinkButton url="/">Go Back Home</LinkButton>
          </section>
        </article>
      </VguiWindow>
    </Screen>
  </PageWrapper>
);

export default PageNotFound;
