'use client'
import usePokemon from './hooks/usePokemon'
import Card from './components/Card'
import Loader from './components/Loader'

export default function Home() {
  const { data, error, isLoading, onNext, onPrev } = usePokemon();

  return (
    <main className="container mx-auto px-4 h-[100%]">
      <section className="mt-[164px] flex flex-row items-center justify-start pt-0 px-0 pb-2 box-border gap-[4px] text-[32px] text-enviral-tech-dark-grey font-body-1-regular">
        <div className="flex-1 relative tracking-[0.02em] leading-[36px] font-medium font-heading-5-medium">
          All the Pokemon!
        </div>
        <div className="flex flex-row items-start justify-start text-xl text-base-neutral-dark">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-end py-2 pr-4 pl-2 gap-[8px]">
            <div className="overflow-hidden flex flex-row items-center justify-center p-2">
              <div className="relative rounded-80xl box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-base-neutral-dark" />
            </div>
            <div className="relative leading-[32px]">Sort Name</div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-end py-2 pr-4 pl-2 gap-[8px]">
            <div className="overflow-hidden flex flex-row items-center justify-center p-2">
              <img
                className="relative rounded-80xl w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/checkbox.svg"
              />
            </div>
            <div className="relative leading-[32px]">Sort ID</div>
          </div>
        </div>
        <div className="rounded bg-base-neutral-light hidden flex-col items-start justify-start py-1 px-3 text-sm text-base-primary border-[1px] border-solid border-neutral-30">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative leading-[20px]">Sort By</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-base text-base-neutral-dark">
            <div className="relative leading-[24px]">Name</div>
            <img className="relative w-6 h-6" alt="" src="/icon.svg" />
          </div>
        </div>
      </section>
      <section className="grid gap-[16px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          isLoading && (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          )
        }
        {
          error && <>Error!</>
        }
        {
          data?.results.map(val => <Card key={val.name} pokemon={val} />)
        }
      </section>
      <div className="flex justify-between">
        {
          data?.previous ? (
            <button className="py-2 px-3 text-base-primary" onClick={onPrev}>Previous 12</button>
          ) : <div/>
        }
        {
          data?.next ? (
            <button className="py-2 px-3 text-base-primary" onClick={onNext}>Next 12</button>
          ) : <div/>
        }
      </div>
    </main>
  )
}

