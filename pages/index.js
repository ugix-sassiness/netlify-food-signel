import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'
import { InlineWidget } from 'react-calendly'

const Scheduler = () => {
  return (
    <div className='Scheduler'>
          <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">

          <div className='circle absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden -z-10'>
          <img
            src="https://s3.us-east-2.amazonaws.com/dexter.io/woman-eating-sandwich.webp"
            alt=""
            className='h-full w-full object-cover'
          />
          </div>

              {/* SCHEDULER */}
              <InlineWidget url="https://calendly.com/food-signel/30min"/>
        </div>
    </div>
  );
};

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: EnvelopeIcon,
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className='circle absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block'>
          <img
            src="https://s3.us-east-2.amazonaws.com/dexter.io/satisfied-teenage-girl-with-piece-pizza.webp"
            alt=""
            className='h-full w-full object-right object-cover'
          />
          </div>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
            accusamus quisquam.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds world-wide</h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
              officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
              Totam, velit.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">

            <img
              className="relative mx-auto"
              width={490}
              src="https://s3.us-east-2.amazonaws.com/dexter.io/interview-mockup.png"
              alt=""
            />
          </div>
        </div>
    </div>

    <div className='relative mx-auto max-w-full'>
    <img
                  className=" bg-repeat opacity-25 xl:absolute xl:inset-0"
                  src="https://s3.us-east-2.amazonaws.com/dexter.io/interview-food-illustrations.webp"
                  alt="Food App User Research"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
      
    <div className='circle absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block'>
              <img
                src="https://s3.us-east-2.amazonaws.com/dexter.io/woman-eating-sandwich.webp"
                alt=""
                className='h-full w-full object-left object-cover'
              />
              </div>
            <div className='mt-12 sm:mt-16 lg:mt-24 text-center bg'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start your free trial today.</span>
            </h2>
            <Scheduler />
          </div>
</div>
</div>
  )
}
