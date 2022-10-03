import {
  ChatBubbleBottomCenterTextIcon,
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
    name: 'Looking for safe places to eat?',
    description:
      'Have difficulties making last-minute dinner plans or finding safe options for places to order take-out to prevent an allergic reaction.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Avoiding reactions outside of home?',
    description:
      'Have to bring your own food to prevent exposure to foods that are now off-limits but hard to avoid.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 3,
    name: 'Changing food orders to fit your food allergy dietary needs?',
    description:
      'Altering your order to minimize mix-ups to avoid feeling left out of the dining-out experience.',
    icon: ChatBubbleBottomCenterTextIcon,
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
        <h2 className="text-center text-lg font-semibold text-yellow-700 mb-3">October 3rd - 11th Event</h2>
          <h2 className="text-center text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Volunteers Needed! 
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          We are exploring the challenges and opportunities to support people with food allergies and sensitivities to find safe places to eat out and improve their dining experiences.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">We want to hear from you</h3>
            <p className="mt-3 text-lg text-gray-500">
              Do you have difficulties finding the right kind of foods to eat?
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-stone-600 text-white">
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

    {/* START */}

 {/* Stats section */}
 <div className="relative bg-gray-50 sm:bg-stone-800">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              
              <div className='circle absolute right-full hidden translate-x-full translate-y-12 transform lg:block'>
                
                  <img
                    src="https://s3.us-east-2.amazonaws.com/dexter.io/woman-eating-sandwich.webp"
                    alt=""
                    className='h-full w-full object-left object-cover'
                  />
              </div>
              
              <div className="h-screen xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://s3.us-east-2.amazonaws.com/dexter.io/interview-food-illustrations.webp"
                  alt="Food App User Research"
                />
              </div>
            </div>
          </div>
          {/* <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8"> */}
          {/* <div className='pt-12 pb-64 sm:pt-24 sm:pb-64 xl:pb-24 text-center'> */}
          <div className='pt-12 sm:pt-24 sm:pb-64 xl:pb-24 text-center'>
            <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl sm:text-white">
              <span className="block">Schedule a time to participate</span>
              <span className="block">and make your voice heard.</span>
            </h2>
            <Scheduler />
          </div>
        </div>


    {/* END */}
    <footer>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">&copy; 2022 Food Signel, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
</div>
  )
}
