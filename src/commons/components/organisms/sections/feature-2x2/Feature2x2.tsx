import { Icon, Model } from '~commons/components/atoms'

interface Feature {
  name: string
  description: string
  icon: Model
}

const features: Feature[] = [
  {
    name: 'Collaborate realtime',
    description:
      "Work together on multiplayer feature. Update your work and your teammate will see exactly the same update you've made.",
    icon: 'GlobeAltIcon',
  },
  {
    name: 'No hidden fees',
    description:
      "Use Verasic Board for free, no hidden fee at all. For now, we restrict the feature, but if you love Verasic Board, maybe we'll update on those things and provide more features.",
    icon: 'ScaleIcon',
  },
  {
    name: 'Updates are instant',
    description:
      'Blazingly fast web applications and realtime collaboration makes the experience of using board is priceless. And of course, it is fast.',
    icon: 'BoltIcon',
  },
  {
    name: 'Mobile responsive',
    description:
      'The board itself maybe not yet responsive, but our landing page is. So, any device will have a great experience on our landing page.',
    icon: 'DevicePhoneMobileIcon',
  },
]

/**
 * @version v1.0.0-alpha.1
 */
export default function Feature2x2() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Collaborations</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to collaborate
            <br />
            on Kanban Board
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We offer experience that you (maybe) never felt before. See others updates blazingly
            fast and completely free (at least for now). Disscus and updates your board with your
            teammates.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map(feature => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <Icon model={feature.icon} className="h-8 w-8" aria-hidden="true" />
                </div>

                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
