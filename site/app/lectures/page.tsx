import Link from 'next/link'
import PastLectures from 'app/components/pastlectures'
import UpcomingLectures from 'app/components/upcomingLectures'

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Lectures</h1>
            <h2 className="font-semibold text-lg mb-8 tracking-tighter">Upcoming Lectures</h2>
            <p className="mb-4">
                {`Future lectures are listed below. Each will be held on Zoom unless otherwise noted. Subscribe to the `}
                <Link href="https://lu.ma/gpumode">
                    <u>Luma calendar</u>
                </Link>
                {` for the Zoom links and to stay up to date on lectures. `}
            </p>
            <br/>
            <UpcomingLectures/>
            <br/>
            <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                <p className="mb-4">
                    {'Interested in giving a talk? Reach out to us on '}
                    <Link href="https://discord.gg/gpumode">
                        <u>Discord</u>
                    </Link>
                    {'!'}
                </p>
            </div>
            <br/>
            <h2 className="font-semibold text-lg mb-8 tracking-tighter">Past Lectures</h2>
            <p className="mb-4">
                {`Links to each recording are provided below (ordered by most recent). Check out the `}
                <Link href="https://github.com/gpu-mode/lectures">
                    <u>GitHub repo</u>
                </Link>
                {` for accompanying code and slides. `}
            </p>
            <br/>
            <PastLectures/>
        </section>
    )
}