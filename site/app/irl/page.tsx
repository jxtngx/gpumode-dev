import Link from "next/link";
import ArrowIconUp from '@/app/components/ui/arrowIconUp'
import ArrowIconRight from '@/app/components/ui/arrowIconRight'

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">IRL Events</h1>
            <h2 className="font-semibold text-lg mb-8 tracking-tighter">Upcoming IRLs</h2>
            <div>
            <Link className="flex flex-col space-y-2 mb-4" href="" target="_blank">
                  <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                      <ArrowIconRight/>
                      <hr></hr>
                      <p className="text-neutral-900 dark:text-neutral-100 w-[100px]">
                          Stay tuned!
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 w-[125px] tabular-nums">
                          TBD location
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                          TBD date and time
                      </p>
                  </div>
              </Link>
          </div>
          <br/>
          <p className="mb-4">
              {` Subscribe to the `}
              <Link href="https://lu.ma/gpumode" target="_blank">
                  <u>Luma calendar</u>
              </Link>
              {` for upcoming events. `}
          </p>
          <br/>
          <h2 className="font-semibold text-lg mb-8 tracking-tighter">Past IRLs</h2>
          <div>
              <iframe
                  width="560" height="315"
                  src="https://www.youtube.com/embed/FH5wiwOyPX4?si=FiiHl2JN18Au7xun"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
              </iframe>
          </div>
      </section>
  )
}
