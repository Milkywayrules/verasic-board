import { Sections } from '~components/organisms'

export default function IndexPage() {
  return (
    <div>
      <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
        <Sections.SimpleCentered
          badge={{
            cta: { text: 'Try now.', url: '/board' },
            text: 'Announcing our initial alpha board.',
          }}
          title="Board to ease your team work routine"
          description="Built to enhance and help you and your team to move faster and farther than ever before. Verasic Board will ease those tasks and projects your team currently do by enabling multiplayer collaboration on the board."
          companyName="Verasic Board"
          url={{
            auth: {
              login: '/auth/login',
            },
            home: '/',
          }}
          main={{
            cta: {
              primary: {
                text: 'Try Board Now',
                url: '/board',
              },
              secondary: {
                text: 'Our Motivation',
                url: '/board',
              },
            },
          }}
          logoAlt="Verasic Board Logo"
          logoSrc="/tw-mark.svg"
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
