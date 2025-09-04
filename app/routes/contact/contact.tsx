import { BiPhone } from "react-icons/bi";
import PageWrapper from "~/components/page-wrapper";
import Screen from "~/components/screen";
import VguiWindow from "~/components/vgui-window";
import { SOCIAL } from "~/lib/constants/social";

const Contact = () => (
  <PageWrapper>
    <Screen>
      <VguiWindow Icon={BiPhone} title="Contact" className="max-w-md">
        <article className="flex flex-col gap-sm">
          <p>
            Have a question? Need help with something? Wanna chat? Hit me up on
            any of these platforms!
          </p>
          <article className="frame-inset p-2">
            <article className="flex w-full flex-wrap items-center justify-evenly">
              {SOCIAL.map(({ Icon, url }, i) => (
                <a key={i} href={url}>
                  <Icon className="text-4xl" />
                </a>
              ))}
            </article>
          </article>
        </article>
      </VguiWindow>
    </Screen>
  </PageWrapper>
);

export default Contact;
