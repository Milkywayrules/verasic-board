import { Sections } from '~components/organisms'
import CONSTS from '~config/consts'

export default function IndexPage() {
  return (
    <div>
      <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
        <Sections.SimpleCentered
          badge={{
            cta: { text: 'Try now.', url: CONSTS.url.auth.login },
            text: 'Announcing our initial alpha board.',
          }}
          title="Board to ease your team work routine"
          description="Built to enhance and help you and your team to move faster and farther than ever before. Verasic Board will ease those tasks and projects your team currently do by enabling multiplayer collaboration on the board."
          companyName="Verasic Board"
          url={{
            auth: {
              login: CONSTS.url.auth.login,
            },
            home: CONSTS.url.home,
          }}
          main={{
            cta: {
              primary: {
                text: 'Try Board Now',
                url: CONSTS.url.auth.login,
              },
              secondary: {
                text: 'Our Motivation',
                url: CONSTS.url.auth.login,
              },
            },
          }}
          logoAlt="Verasic Board Logo"
          logoSrc="/tw-mark.svg"
          navigation={[
            { name: 'Product', href: CONSTS.url.__cursor },
            { name: 'Features', href: CONSTS.url.__cursor },
            { name: 'Try Board ✨', href: CONSTS.url.board },
          ]}
        />

        <Sections.Feature2x2 />

        <Sections.Analytics />
      </div>

      <div className="mt-12">
        <Sections.CtaSimpleJustified />
      </div>

      <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
        <Sections.Subscribe />
        <Sections.Footer />
      </div>
    </div>
  )
}
